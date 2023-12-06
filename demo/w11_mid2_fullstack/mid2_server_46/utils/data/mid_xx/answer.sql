CREATE TABLE product_xx (
    pId int NOT NULL PRIMARY KEY,
    name varchar(255),
    category_id int,
    price real,
    local_img_url varchar(255),
    remote_img_url varchar(255)
);

INSERT INTO shop_xx (pId, name, category_id, price, local_img_url, remote_image_url)
VALUES
(1,'Blue Tanktop',4,25,'/img/womens/blue-tank.png','https://i.ibb.co/7CQVJNm/blue-tank.png'),
(2,'Floral Blouse',4,20,'/img/womens/floral-blouse.png','https://i.ibb.co/4W2DGKm/floral-blouse.png'),
(3,'Floral Dress',4,80,'/img/womens/floral-skirt.png','https://i.ibb.co/KV18Ysr/floral-skirt.png'),
(4,'Red Dots Dress',4,80,'/img/womens/red-polka-dot-dress.png','https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'),
(5,'Stripped Sweater',4,45,'/img/womens/blue-tank.png','https://i.ibb.co/KmSkMbH/striped-sweater.png"'),
(6,'Yellow Track Suite',4,135,'/img/womens/floral-blouse.png','https://i.ibb.co/v1cvwNf/yellow-track-suit.png'),
(7,'White Blouse',4,20,'/img/womens/floral-skirt.png','https://i.ibb.co/qBcrsJg/white-vest.png')

