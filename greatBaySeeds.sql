DROP DATABASE IF EXISTS greatBay_db;
CREATE DATABASE greatBay_db;
USE greatBay_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    bid INTEGER(11) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE auctions (
  id int(11) NOT NULL AUTO_INCREMENT,
  item_name varchar(100) NOT NULL,
  category varchar(45) NOT NULL,
  stbid int(11) DEFAULT '0',
  highest_bid int(11) DEFAULT '0',
  PRIMARY KEY (id)



  Dumping data for table `auctions`
--

LOCK TABLES auctions WRITE;
/*!40000 ALTER TABLE `auctions` DISABLE KEYS */;
INSERT INTO auctions VALUES (10,'basil vinaigrette', 'dressing' ,20,50), (2,'used panties','underwear',10,235),(3,'Yeti','container',200,500),(4,'Original Ninja-Scoll bootleg','dvd',80,120);
/*!40000 ALTER TABLE `auctions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;