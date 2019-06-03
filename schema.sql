DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id  INT NOT NULL AUTO_INCREMENT,
  product_name  VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price  INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("diaper", "children", 35, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("painting", "homegood", 99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mower", "garden",299, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tire", "automotive", 89, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pant", "men clothing", 49, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("skirt", "women clothing", 29, 10);

-- update products
-- set stock_quantity = 12
-- where item_id = 3;