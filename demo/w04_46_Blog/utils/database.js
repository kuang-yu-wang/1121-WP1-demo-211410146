const { Pool } = require('pg');

let pool;

pool = new Pool({
  host    : 'localhost',
  port    : 5432,
  user    : 'marxw',
  password: "",
  database: 'wp1_demo_46',
});

// console.log('Database connected', pool);

// const db = require('./database');
const testDB = async () => {
  try {
    const result = await pool.query(`SELECT * FROM card_46`);
    console.log('json data: ', result.rows);
  } catch (error) {
    console.log(error);
  };
};

testDB();

module.exports = pool;