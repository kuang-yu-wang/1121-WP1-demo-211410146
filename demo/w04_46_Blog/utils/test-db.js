const db = require('./database');
const testDB = async () => {
  try {
    const result = await db.query(`SELECT * FROM card_46`);
    console.log('json data: ', result.rows);
  } catch (error) {
    console.log(error);
  };
};

testDB();
module.exports = testDB;