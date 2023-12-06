import express from 'express';
import logger from 'morgan';
import path from 'path';

// import indexRouter from './routes/index.js'
import apiCardRouter_xx from './routes/api/apiCardRouter_xx.js';
import apiShopRouter_xx from './routes/api/apiShopRouter_xx.js';
import apiMid2Router_46 from './routes/api/apiMid2Router_46.js';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import db from './utils/database.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(cors());

// app.use('/', (req, res, next) => {
//     //   res.send('Hello');
//     res.render('index', { title: 'Express' });
//   });

app.use('/api/card_xx', apiCardRouter_xx);
app.use('/api/shop_xx', apiShopRouter_xx);
app.use('/api/mid2_46', apiMid2Router_46);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  if (process.env.DATABASE === 'SUPABASE') {
    console.log(
      `Connecting SUPABASE PostgreSQL database ${db.options.database}`
    );
  } else {
    console.log(`Connecting local PostgreSQL ${db.options.database}`);
  }
  console.log(`Connecting on port: ${port}`);
});
