DROP DATABASE IF EXISTS users_dev;
CREATE DATABASE users_dev;

\c users_dev;

CREATE TABLE Users (
    id VARCHAR(21) PRIMARY KEY DEFAULT (CONCAT('usr_', LEFT(UUID(), 21))),
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    image_url VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Friendships (
    id SERIAL PRIMARY KEY,
    user_id1 VARCHAR(21) REFERENCES Users(id),
    user_id2 VARCHAR(21) REFERENCES Users(id),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (user_id1 < user_id2)
);

CREATE INDEX ON Friendships(user_id1);
CREATE INDEX ON Friendships(user_id2);


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
    capacity INT, 
    organizer_name TEXT NOT NULL, 
    organizer_phone VARCHAR(12) NOT NULL
);

CREATE TABLE EventAttendees (
    id SERIAL PRIMARY KEY,
    event_id VARCHAR(21) REFERENCES Events(id),
    user_id VARCHAR(21),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON EventAttendees(event_id);
CREATE INDEX ON EventAttendees(user_id);

