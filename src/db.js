const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'mypassword',
  host: 'localhost',
  port: 5432,
  database: 'crmdb',
});

module.exports = pool;
