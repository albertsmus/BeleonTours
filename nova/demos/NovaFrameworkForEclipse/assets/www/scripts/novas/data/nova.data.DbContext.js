/// <reference path="ArrayExtensions.js" />
/// <reference path="nova.data.Repository.js" />
/// <reference path="nva.data.Entity.js" />


if (window.nova == undefined) {
    window.nova = {};
}
if (nova.data == undefined) {
    nova.data = {};
}

nova.data.DbContext = function (name, version, displayName, estimatedSize) {
    this.db = null;
    if (window.openDatabase) {
        this.db = window.openDatabase(name, version, displayName, estimatedSize);
    }
};

nova.data.DbContext.prototype.getTables = function () {
    var tables = [];
    for (property in this) {
        var query = this[property];
        if (query instanceof nova.data.Repository) {
            tables.push(this[property].table);
        }
    }
    return tables;
};

nova.data.DbContext.prototype.isTableExisting = function(table, callback) {
    var sql = "SELECT name FROM sqlite_master WHERE type='table' AND name='" + table + "'";
    this.query(sql, function(items) {
        callback(items.length > 0);
    }, function(err) {
        return false;
    });
};

nova.data.DbContext.prototype.reCreateTables = function (successCallback, errorCallback) {
    var obj = this;
    var sqls = [];
    obj.getTables().each(function () {
        var table = this;
        sqls.push("DROP TABLE IF EXISTS " + table);
        var columns = [];
        obj[table].getFields().each(function () {
            if (this.name == "id") {
                columns.push("id INTEGER PRIMARY KEY AUTOINCREMENT");
            } else {
                columns.push(this.name + " " + nova.data.Entity.getDbType(this.type));
            }
        });
        sqls.push("CREATE TABLE " + table + " (" + columns.join() + ")");
    });
    this.executeSql(sqls, successCallback, errorCallback);
};

nova.data.DbContext.prototype.saveChanges = function (successCallback, errorCallback) {
    var sqlDelegates = [];
    var tables = this.getTables();
    for (var ti = 0; ti < tables.length; ti++) {
        var table = tables[ti];
        var query = this[table];
        if (query instanceof nova.data.Repository) {
            var fields = query.getFields();
            query.pendingDeleteEntities.each(function () {
                var removeWhere = this;
                if (this instanceof query.type) {
                    removeWhere = " where id=" + this.id;
                }
                var deleteSql = "delete from " + table + removeWhere;
                sqlDelegates.push({
                    sql: deleteSql
                });
            });

            query.pendingDeleteEntities = [];
            if (query.pendingAddEntities.any()) {
                var columns = fields.select(function () {
                    return this.name;
                }).join();

                query.pendingAddEntities.each(function () {
                    var toAdd = this;
                    var values = [];
                    fields.each(function () {
                        if (this.name == "id") {
                            values.push("null");
                        } else {
                            values.push(nova.data.Entity.getDbValue(this.type, toAdd[this.name]));
                        }
                    });

                    var sqlInsert = "insert into " + table + " (" + columns + ") values (" + values.join() + ")";
                    sqlDelegates.push({
                        sql: sqlInsert,
                        entity: toAdd
                    });
                });
                query.pendingAddEntities = [];
            }

            query.pendingUpdateEntities.each(function () {
                var toUpdate = this;
                var sets = fields.where(function () {
                    return this.name != "id";
                }).select(function () {
                    return this.name + "=" + nova.data.Entity.getDbValue(this.type, toUpdate[this.name]);
                }).join();
                var sqlUpdate = "update " + table + " set " + sets + " where id = " + toUpdate.id;
                sqlDelegates.push({
                    sql: sqlUpdate
                });
            });
            query.pendingUpdateEntities = [];
        }
    }
    if (this.db != null) {
        this.db.transaction(function (dbContext) {
            for (var s = 0; s < sqlDelegates.length; s++) {
                var sqlDelegate = sqlDelegates[s];
                dbContext.executeSql(sqlDelegate.sql, [], function (tx, result) {
                    if (sqlDelegate.entity) {
                        sqlDelegate.entity.id = result.insertId;
                    }
                });
            }
        }, function (err) {
            if (errorCallback == undefined) {
                throw err;
            }
            errorCallback(err);
        }, successCallback);
    }
};

nova.data.DbContext.prototype.executeSql = function (sqls, successCallback, errorCallback) {
    if (this.db != null) {
        this.db.transaction(function (dbContext) {
            if (sqls instanceof Array) {
                for (var s = 0; s < sqls.length; s++) {
                    dbContext.executeSql(sqls[s]);
                }
            } else {
                dbContext.executeSql(sqls);
            }
        }, function (err) {
            if (errorCallback == undefined) {
                throw err;
            }
        }, function () {
            if (successCallback != undefined) {
                successCallback();
            }
        });
    }
};

nova.data.DbContext.prototype.query = function (sql, successCallback, errorCallback) {
    var obj = this;
    if (obj.db != null) {
        obj.db.transaction(function (dbctx) {
            dbctx.executeSql(sql, [], function (tx, result) {
                var items = [];
                for (var i = 0; i < result.rows.length; i++) {
                    items.push(result.rows.item(i));
                }
                successCallback(items);
            }, function (err) {
                if (errorCallback == undefined) {
                    throw err;
                }
                else {
                    errorCallback(err);
                }
            });
        }, function (err) {
            if (errorCallback == undefined) {
                throw err;
            }
            else {
                errorCallback(err);
            }
        });
    }
};