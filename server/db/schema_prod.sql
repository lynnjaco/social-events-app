DROP DATABASE IF EXISTS locally_dev;
CREATE DATABASE locally_dev;

\c locally_dev;

DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Friendships CASCADE;
DROP TABLE IF EXISTS Events CASCADE;
DROP TABLE IF EXISTS EventAttendees CASCADE;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    image_url VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Friendships (
    id SERIAL PRIMARY KEY,
    user_id1 INT REFERENCES Users(id) ON DELETE CASCADE,
    user_id2 INT REFERENCES Users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (user_id1 < user_id2)
);

CREATE INDEX idx_friendships_user1_user2 ON Friendships(user_id1, user_id2);

CREATE TABLE Events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    date DATE NOT NULL,
    time TIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    capacity INT, 
    organizer_name TEXT NOT NULL, 
    organizer_phone VARCHAR(12) NOT NULL
);

CREATE TABLE EventAttendees (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES Events(id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_event_attendees_event_user ON EventAttendees(event_id, user_id);

