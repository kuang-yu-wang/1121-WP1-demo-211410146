const { Pool } = require('pg');

let pool;

pool = new Pool({
  host    : 'localhost',
  port    : 5432,
  user    : 'marxw',
  password: '',
  database: 'wp1_demo_46',
});

console.log('Database connected', pool.options);

module.exports = pool;