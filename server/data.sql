/*This is just a list of things  put in postgres. Also, the database that I could connect is the postgres one unfortunately
not the todoticks one */


CREATE DATABASE todoticks;

CREATE TABLE todos (
	id VARCHAR(255) PRIMARY KEY,
	user_email VARCHAR(255),
	title VARCHAR(30),
	date VARCHAR(300)
);

CREATE TABLE users (
	email VARCHAR(255) PRIMARY KEY,
	hashed_password VARCHAR(255)
);	