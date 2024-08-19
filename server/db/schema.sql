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

DROP DATABASE IF EXISTS events_dev;
CREATE DATABASE events_dev;

\c events_dev;

CREATE TABLE Events (
    id VARCHAR(21) PRIMARY KEY DEFAULT (CONCAT('evt_', LEFT(UUID(), 21))),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    date DATE NOT NULL,
    time TIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    attendees TEXT DEFAULT '[]',
    capacity INT, 
    organizer_name TEXT NOT NULL, 
    organizer_phone VARCHAR(12) NOT NULL,
);

