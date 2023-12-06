// const db = require('./database');
import db from '../database.js';

const midp_test_db_xx = async () => {
  try {
    const results = await db.query(`select * from shop_xx`);
    console.log('json data', JSON.stringify(results.rows));
  } catch (error) {
    console.log(error);
  }
};

midp_test_db_xx();

export default midp_test_db_xx;
