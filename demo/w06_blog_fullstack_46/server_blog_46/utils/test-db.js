import db from './database.js';

const testDB = async () => {
  try {
    const result = await db.query('SELECT * FROM card_46');
    console.log(JSON.stringify(result.rows));
  } catch (error) {
    console.log(error);
  }
};
testDB();