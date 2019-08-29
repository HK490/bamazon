DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon; 

USE bamazon;
DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id Int( 10 ) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR( 255) NOT NULL,
  department_name VARCHAR( 255 ) NOT NULL,
  price Int(10) NOT NULL,
  stock_quantity Int(10) NOT NULL,
  PRIMARY KEY ( id ) 
);
DELETE FROM product WHERE id=1;
DELETE FROM product WHERE id=2;
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Herbal Essence Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Dove Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Tresemme Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Loreal Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Pantene Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Head and Shoulder Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Garnier Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Biolage Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Nexxus Shampoo", "Hair Care", 5, 10);
INSERT INTO product(product_name, department_name, price, stock_quantity) VALUES ("Joico Shampoo", "Hair Care", 5, 10);




SHOW tables;
SELECT * FROM product;