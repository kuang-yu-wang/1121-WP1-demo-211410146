import express from "express";
let router = express.Router();
import db from '../../utils/database.js';

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM card_46');
    console.log('json data', JSON.stringify(result.rows));
    res.json(result.rows);
  }
  catch (err) {
    console.log(err);
  }
});
export default router;