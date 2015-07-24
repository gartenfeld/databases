CREATE DATABASE chat;

USE chat;

-- -----------------------------------------------------
-- Users Table
-- -----------------------------------------------------
CREATE TABLE `chat`.`users` (
  `id` INT NOT NULL COMMENT '',
  `username` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '');


-- -----------------------------------------------------
-- Messages Table
-- -----------------------------------------------------
CREATE TABLE `chat`.`messages` (
  `id` INT NOT NULL COMMENT '',
  `text` VARCHAR(1000) NOT NULL COMMENT '',
  `roomname` VARCHAR(45) NOT NULL COMMENT '',
  `created_at` DATETIME NULL COMMENT '',
  `users_id` INT NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  CONSTRAINT `fk_messages_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `chat`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

