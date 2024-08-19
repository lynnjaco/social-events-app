DROP DATABASE IF EXISTS users_dev;
CREATE DATABASE users_dev;

\c users_dev;

CREATE TABLE Users (
    id VARCHAR(21) PRIMARY KEY DEFAULT (CONCAT('usr_', LEFT(UUID(), 21))),
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    friends TEXT DEFAULT '[]',
    saved_events TEXT DEFAULT '[]',
    attending_events TEXT DEFAULT '[]'
);
