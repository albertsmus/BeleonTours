

$(function(){
            var demoRunning = false;
            
            $("#refreshbtn").click(function(){
                if(!demoRunning){
					$(this).addClass("running");
					$("#demoRunning").show();
                    demoRunning = true;
					
                    try {
                        html5sql.openDatabase("pelatologio.sqlite", "pelatologio", 5*1024*1024);
                   //http://www.keepandshare.com/doc/6641958/createdtbase-sql-4k?da=y
                        $.get('http://www.keepandshare.com/doc/6641958/createdtbase-sql-4k?da=y',function(sql){
                            var startTime = new Date();
                            html5sql.process(
                                sql,
                                function(){ //Success
                                    var endTime = new Date();
									$("#startTest").removeClass("running");
                                    $("#demoRunning").hide();
									demoRunning = false;
                                },
                                function(error, failingQuery){ //Failure
									$("#ajax-loader.gif").removeClass("running");
                                    $("#demoRunning").hide();
                                    demoRunning = false;
                                }
                            );
                        });
                    
                    } catch (error) {
						$("#startTest").removeClass("running");
                        $("#demoRunning").hide();
                       demoRunning = false;
                    }
                }
            })
        });
    	$(function(){
			$("#btnOffices").click(function(){
				try {
                        html5sql.openDatabase("pelatologio.sqlite", "pelatologio", 5*1024*1024);                                     
                            html5sql.process(
                               "SELECT * FROM TblNames",
                                function(transaction,results){ //Success
                                    var html = "<ul data-filter=&quot;true&quot;>";
									if (results.rows.length){
										for (var i = 0; i < results.rows.length; i++){
											var row = results.rows.item (i);
											var lname = row.PtName;
											var fname = row._id;
											html += "<li>" ;
											html +="<a href=#activity-details";
											html+=" data-role=button ?id=" + fname + "rel=&quot;external&quot; onclick='renderDetails(\"" + fname + "\")'"
											html+=">" + lname + "</a>" + "</li>";	
										}
									}else{
										html += "<li> Δεν Υπάρχουν Γραφεία</li>";
									}
									html+="</ul>";
									$("#offices").unbind().bind("pagebeforeshow",function(){
										var $content=$("#offices div:jqmData(role=content)");
										$content.html(html);
										var $ul = $content.find ("ul");
										$ul.listview ();
									});
									$.mobile.changePage($("#offices"));
                                },
								function(error, failingQuery){ //Failure	
									 alert ("DB error : " + error.message);
									 return false;												
                                }
                            );                        
                    
                    } catch (error) {
						$("#startTest").removeClass("running");
                        $("#demoRunning").hide();
                       demoRunning = false;
					   alert ("DB error : " + error.message);
									 //return false;		
                    }
				})
		});
		
		function renderDetails(index){
			html5sql.process(
                               "SELECT * FROM TblNames where _id=" + index,
                                function(transaction,results){ //Success
                                    var html = "<ul>";
									if (results.rows.length){
										for (var i = 0; i < results.rows.length; i++){
											var row = results.rows.item (i);
											var lname = row.PtName;
											var fStathero = row.PtPhone;
											var faddress=row.ptAddress;
											var fPtPeriferia=row.PtPeriferia;
											var fpteMail=row.pteMail;
											var fptTK=row.ptTK;
											var fptResponsible=row.ptResponsible;
											var fptPoli=row.ptPoli;
											//var fname = row._id;
											html += "<li>" + "<h3>"+  lname + "</h3>" + "&nbsp;" ;	
											html +="<p>Διεύθυνση: " +  faddress + "</p>";			 
											html +="<p>Τ.Κ.: " +  fptTK + "</p>";
											html +="<p>Πόλη: " +  fptPoli + "</p>"+" </li>";
											html +="<li><a href=tel:" +fStathero+ ">Σταθερό:" + fStathero+"</a></li>";
											  //html +="<p>Sta?e??: " +  fStathero + "</p>";
											  //html +="<p>" +  fPtPeriferia + "</p>";
											html +="<li><a href=mailto:"+fpteMail+">email: "+ fpteMail +"</a></li>"
								  //html +="<li><p>email:" +  fpteMail + "</p></li>";			  
											html +="<li><p>Υπεύθυνος: " +  "<strong>"+fptResponsible+"</strong>" + "</p>" +  "</li>";	
										}										
									}else{
										html += "<li>Δεν Υπάρχουν Γραφεία</li>";
									}
									html+="</ul>";
									console.log(html)
									var $content = $("#activity-details div:jqmData(role=content)");
									$content.html (html);
									var $ul = $content.find ("ul");
									$ul.listview ();
                                },
                                function(error, failingQuery){ //Failure
									
									
                                }
                            );
		};
		
		$(function(){
			$("#btnEmployees").click(function(){
				try {
                        html5sql.openDatabase("pelatologio.sqlite", "pelatologio", 5*1024*1024);                                     
                            html5sql.process(
                               "SELECT * FROM TblStelexi",
                                function(transaction,results){ //Success
                                    var html = "<ul data-filter=&quot;true&quot;>";
									if (results.rows.length){
										for (var i = 0; i < results.rows.length; i++){
											var row = results.rows.item (i);
											var lname = row.PtName;
											var fname=row._id;
											html += "<li>" ;
											html +="<a href=#activity-details";
											html+=" data-role=button ?id=" + fname + "rel=&quot;external&quot; onclick='renderDetailsIpallilon(\"" + fname + "\")'"			 
			  								html+=">" + lname + "</a>" + "</li>";		
										}
									}else{
										html += "<li> Δεν Υπάρχουν Υπάλληλοι</li>";
									}
									html+="</ul>";
									$("#stelexoi").unbind().bind("pagebeforeshow",function(){
										var $content=$("#stelexoi div:jqmData(role=content)");
										$content.html(html);
										var $ul = $content.find ("ul");
										$ul.listview ();
									});
									$.mobile.changePage($("#stelexoi"));
                                },
                                function(error, failingQuery){ //Failure						
								
                                }
                            );                        
                    
                    } catch (error) {
						$("#startTest").removeClass("running");
                        $("#demoRunning").hide();
                       demoRunning = false;
                    }
				})
		});
		
		function renderDetailsIpallilon(index){
			html5sql.process(
                               "SELECT * FROM TblStelexi where _id=" + index,
                                function(transaction,results){ //Success
                                    var html = "<ul>";
									if (results.rows.length){
										for (var i = 0; i < results.rows.length; i++){
											var row = results.rows.item (i);
											var lname = row.PtName;
											var fmobile = row.PtMobile;	
											var fpteMail=row.PtEmail;
											//var fname = row._id;
											html += "<li>" + "<h3>"+  lname + "</h3>" + "&nbsp;" ;	
											html +="<li><a href=tel:" +fmobile+ ">Κινητό: " + fmobile+"</a></li>";								
											html +="<li><a href=mailto:"+fpteMail+">email: "+ fpteMail +"</a></li>"	
										}										
									}else{
										html += "<li> Δεν Υπάρχουν Γραφεία</li>";

									}
									html+="</ul>";
									console.log(html)
									var $content = $("#activity-details div:jqmData(role=content)");
									$content.html (html);
									var $ul = $content.find ("ul");
									$ul.listview ();
                                },
                                function(error, failingQuery){ //Failure
									
									
                                }
                            );
		};