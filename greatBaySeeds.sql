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