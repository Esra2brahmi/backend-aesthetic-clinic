-- Create the database
CREATE DATABASE paradise;

-- Create the 'users' table with the new fields
CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL, -- Changed from firstname
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

-- Insert a fake user (example with new fields)
INSERT INTO users (username, email, password)
VALUES ('sheldon', 'sheldon@gmail.com', 'sheldon123');

-- View all users in the users table
SELECT *
FROM users;

-- View a single user from the users table
SELECT *
FROM users
WHERE email ='sheldon@gmail.com';

-- Clear the entire table
TRUNCATE TABLE users;

-- Delete the entire table
DROP TABLE users;
