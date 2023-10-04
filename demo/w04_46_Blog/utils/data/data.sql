CREATE TABLE card_46 (
  id int NOT NULL PRIMARY KEY,
  title varchar(255),
  description varchar(255),
  categories varchar(255),
  img_remote varchar(255),
  img varchar(255)
)

INSERT INTO card_46 (
  id, title, description, categories, img_remote, img
) VALUES (
  1, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-1.jpg', ''
),
(
  2, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle','/images/photo-2.jpg', ''
),
(
  3, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-3.jpg', ''
)