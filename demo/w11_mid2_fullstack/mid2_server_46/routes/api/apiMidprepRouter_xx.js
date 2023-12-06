var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/overview2_xx', async function (req, res, next) {
  try {
    let results1 = await db.query(`select * from product_xx where cat_id = 4`);
    let results2 = await db.query(`select * from product_xx where cat_id = 1`);
    // console.log('data1', JSON.stringify(results1.rows));
    // console.log('data2', JSON.stringify(results2.rows));
    res.json({ data1: results1.rows, data2: results2.rows });
  } catch (error) {
    console.log(error);
  }
});

router.get('/overview2_xx/:cat_id', async function (req, res, next) {
  try {
    let results = await db.query(`select * from product_xx where cat_id = $1`, [
      req.params.cat_id,
    ]);
    console.log('cat_id data', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
