﻿CREATE TABLE TblNames (_id INTEGER PRIMARY KEY  NOT NULL ,PtName VARCHAR,PtPhone VARCHAR,PtPeriferia VARCHAR DEFAULT (null), pteMail CHAR DEFAULT (null) ,ptTK  VARCHAR, ptAddress VARCHAR, ptResponsible VARCHAR, ptPoli VARCHAR);
INSERT INTO TblNames VALUES(1,'ΓΡΑΦΕΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ','2310513313',NULL,'t.ouroumidis@beleontours.com','54626','ΔΑΝΑΪΔΩΝ 9','ΟΥΡΟΥΜΙΔΗΣ ΘΟΔΩΡΟΣ','ΘΕΣΣΑΛΟΝΙΚΗ');	
INSERT INTO TblNames VALUES(2,'ΓΡΑΦΕΙΟ ΡΟΔΟΣ','2241085530','ΡΟΔΟΣ','crete-operation@beleontours.com','85100','ΛΕΩΦΟΡΟΣ ΚΑΛΛΙΘΕΑΣ','NATALIA OPRINOWA','ΡΟΔΟΣ');
INSERT INTO  TblNames  VALUES(3,'ΓΡΑΦΕΙΟ ΚΡΗΤΗΣ','2810222044','','crete-operation@beleontours.com','71601','ΜΑΥΣΩΛΟΥ 133','ΕΥΗ ΓΕΩΡΓΙΑΔΗ','ΗΡΑΚΛΕΙΟ');
INSERT INTO  TblNames  VALUES(4,'ΓΡΑΦΕΙΟ ΧΑΛΚΙΔΙΚΗΣ','2374091722','ΧΑΛΚΙΔΙΚΗ','halkidiki-operation@beleontours.com','63077','ΑΘΥΤΟΣ','ΝΙΚΗ ΔΗΜΗΤΡΙΑΔΟΥ','ΑΘΥΤΟΣ'); 
INSERT INTO  TblNames  VALUES(5,'ΓΡΑΦΕΙΟ ΚΩΣ','2242045815','ΚΩΣ1','kos-operation@beleontours.com','85300','6ο ΧΙΛ. ΕΠΑΡΧΙΑΚΗΣ ΟΔΟΥ ΜΕΣΣΑΡΙΑΣ-ΚΩΣ','ΥΒΕΤΑ ΧΑΤΖΙΔΗ','ΜΕΣΣΑΡΙΑ');
INSERT INTO  TblNames  VALUES(6,'ΓΡΑΦΕΙΟ ΚΕΡΚΥΡΑΣ','2661082121','ΚΕΡΚΥΡΑ','corfu-operation@beleontours.com','49100','ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΕΩΣ 18','ΜΑΡΙΑ ΣΥΜΕΩΝΙΔΟΥ','ΚΕΡΚΥΡΑ');
INSERT INTO  TblNames  VALUES(7,'ΓΡΑΦΕΙΟ ΖΑΚΥΝΘΟΣ','2695055308','ΖΑΚΥΝΘΟΣ','zakynthos-operation@beleontours.com','29092','ΛΑΓΑΝΑΣ ΣΑΡΑΚΗΝΑΣ 943','ΛΑΡΙΣΑ ΑΖΩΙΔΟΥ','ΛΑΓΑΝΑΣ'); 
INSERT INTO  TblNames  VALUES(8,'ΓΡΑΦΕΙΟ ΣΑΝΤΟΡΙΝΗΣ','2286022980','ΣΑΝΤΟΡΙΝΗ','santorini-operation@beleontours.com','84700','ΕΥΘΕΙΑ ΦΗΡΩΝ ΠΥΡΓΟΥ ΚΑΡΤΕΡΑΔΟΣ','ΒΕΡΟΝΙΚΗ ΜΠΑΛΑΜΠΟΝΙΔΗ','ΣΑΝΤΟΡΙΝΗ');
CREATE TABLE TblStelexi (_id INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,PtName VARCHAR, PtMobile VARCHAR, PtEmail TEXT);
INSERT INTO TblStelexi VALUES(1,'ΟΥΡΟΥΜΙΔΗΣ ΘΕΟΔΩΡΟΣ','6980500500','t.ouroumidis@beleontours.com');
INSERT INTO TblStelexi VALUES(2,'ΜΕΤΑΞΑΣ ΔΗΜΗΤΡΗΣ','6932419900','d.metaxas@tilematiki.gr');
INSERT INTO TblStelexi VALUES(3,'ΚΑΛΑΝΔΡΕΑΣ ΓΙΩΡΓΟΣ','6932727474','g.kalandreas@tilematiki.gr');
INSERT INTO TblStelexi VALUES(4,'ΜΑΓΕΙΡΑ ΙΩΑΝΝΑ','6973363737','imagira@tilematiki.gr');
INSERT INTO TblStelexi VALUES(5,'ΚΟΥΤΣΟΔΗΜΟΥ ΚΩΝΣΤΑΝΤΙΝΑ','6937137374','dkoutsodimou@facebook.com');
INSERT INTO TblStelexi VALUES(6,'ΠΑΡΤΣΑΛΙΔΟΥ ΜΑΛΑΜΑ','6936855231','melina.partsalidou.7@facebook.com');
INSERT INTO TblStelexi VALUES(7,'ΑΝΘΟΠΟΥΛΟΥ ΛΙΤΣΑ','6948388777','litsa.anthopoulou@facebook.com');
INSERT INTO TblStelexi VALUES(8,'ΖΕΡΒΑΣ ΔΗΜΗΤΡΙΟΣ','6936072778','d.zervas@tilematiki.gr');
INSERT INTO TblStelexi VALUES(9,'ΠΑΠΑΝΙΔΗΣ ΙΑΚΩΒΟΣ','6937635265','iakovos@beleon.gr');
INSERT INTO TblStelexi VALUES(10,'ΑΝΤΩΝΙΑΔΗΣ ΑΓΓΕΛΟΣ','6984609294','a.antoniadis@beleontours.com');
INSERT INTO TblStelexi VALUES(11,'ΔΗΜΗΤΡΙΑΔΟΥ ΝΙΚΗ','6980500000','halkidiki1@beleon.gr');
INSERT INTO TblStelexi VALUES(12,'ΚΛΕΒΕΤΙΔΗΣ ΙΓΚΟΡ','6937212973','corfu-operation@beleontours.com');
INSERT INTO TblStelexi VALUES(13,'ΑΣΛΑΝΙΔΗΣ ΑΒΡΑΑΜ','6984609395','corfu-operation@beleontours.com');
INSERT INTO TblStelexi VALUES(14,'ΣΥΜΕΩΝΙΔΗ ΜΑΡΙΑ','6937212973','corfu-reservations@beleontours.com');
INSERT INTO TblStelexi VALUES(15,'ΤΑΤΑΡΙΔΟΥ ΒΙΟΛΕΤΑ','6984609297','crete-financial@beleontours.com');
INSERT INTO TblStelexi VALUES(16,'ΧΑΤΖΙΔΗ ΥΒΕΤΑ','6973558280','kos1@beleon.gr');
