CREATE DATABASE wp1_midp_xx;

DROP TABLE shop_xx;
TRUNCATE TABLE product_xx;

CREATE TABLE shop_xx (
    pId int NOT NULL PRIMARY KEY,
    name varchar(255),
    category_id int,
    price real,
    local_img_url varchar(255)
);

INSERT INTO shop_xx (pId, name, category_id, price, local_img_url)
VALUES
(1,'Blue Tanktop',4,25,'/img/womens/blue-tank.png'),
(2,'Floral Blouse',4,20,'/img/womens/floral-blouse.png'),
(3,'Floral Dress',4,80,'/img/womens/floral-skirt.png'),
(4,'Red Dots Dress',4,80,'/img/womens/red-polka-dot-dress.png'),
(5,'Brown Brim',1,25,'/img/hats/brown-brim.png'),
(6,'Blue Beanie',1,18,'/img/hats/blue-beanie.png'),
(7,'Brown Cowboy',1,35,'/img/hats/brown-cowboy.png'),
(8,'Grey Brim',1,25,'/img/hats/grey-brim.png')


