import express from 'express';
var router = express.Router();

import db from '../../utils/database.js';

/* GET home page. */
router.get('/menu_46', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM menu_46');
    res.json(result.rows);   
  } catch (error) {
      console.log(error);
  }
});

router.get('/menu_46/:category', async (req, res, next) => {
  console.log('category', req.params.category);
  try {
    const result = await db.query('SELECT * FROM menu_46 WHERE category = $1', [req.params.category]);
    res.json(result.rows);   
  } catch (error) {
      console.log(error);
  }
});

router.get('/btn_46/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT DISTINCT category FROM menu_46');
    res.json(result.rows);   
  } catch (error) {
      console.log(error);
  }
});

export default router;
