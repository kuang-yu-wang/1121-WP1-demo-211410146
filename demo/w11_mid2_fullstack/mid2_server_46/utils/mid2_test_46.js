import db from './database.js';

const testDB = async () => {
    try {
        const result = await db.query('SELECT * FROM menu_46');
        console.log('json data.', JSON.stringify(result.rows));
    } catch (error) {
        console.log(error);
    }
};

testDB();