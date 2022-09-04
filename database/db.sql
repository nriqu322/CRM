CREATE DATABASE crmdb

CREATE TABLE customers(
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL
);

CREATE TABLE contacts(
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(10) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  CONSTRAINT fk_customer
    FOREIGN KEY(id)
      REFERENCES customers(id)
);

CREATE TABLE meetings(
  id SERIAL PRIMARY KEY,
  meeting_day DATE NOT NULL,
  meeting_time TIME NOT NULL,
  title VARCHAR(50) NOT NULL,
  attendies VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL
  -- customer_id INT NOT NULL,
  -- project_id INT NOT NULL
);

CREATE TABLE projects(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  descrip VARCHAR(255) UNIQUE NOT NULL,
  project_status VARCHAR(25) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  CONSTRAINT fk_customer
    FOREIGN KEY(id)
      REFERENCES customers(id)
);
