CREATE DATABASE wishbasket;

USE wishbasket;

CREATE TABLE products(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
price DOUBLE,
discount DOUBLE,
image VARCHAR(255)
);

INSERT INTO products(name,price,discount,image) VALUES
('Teddy Bear',1500,10,'images/image2'),
('Gift Box',2500,5,'images/image3'),
('Chocolate Basket',2000,8,'images/image9'),
('Flower Bouquet',1800,12,'images/image7'),
('Love Mug',900,5,'images/image10'),
('Gift Hamper',3200,15,'images/image1'),
('Surprise Box',2100,10,'images/image11'),
('Photo Frame',1200,7,'images/image12');