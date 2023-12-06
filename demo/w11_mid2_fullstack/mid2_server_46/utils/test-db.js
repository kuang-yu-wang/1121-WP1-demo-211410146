// const db = require('./database');
import db from './database.js';

const testDB = async () => {
  try {
    const results = await db.query(`select * from card_xx`);
    console.log('json data', JSON.stringify(results.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

export default testDB;
