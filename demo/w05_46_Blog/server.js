import express from "express";
import path from "path";
import logger from "morgan";
import db from './utils/database.js';
import apiCardRouter from "./routes/api/apiCardRouter_46.js";
import { log } from "console";

// Where the server will be running.
const app = express();
// dotenv.config({path: './.env'});
app.use(express.json());
app.use(logger("dev"));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', apiCardRouter);
// The port that the server will be listening on.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  if(process.env.DATABASE === 'SUPABASE'){
    log(`Connected to Supabase ${db.options.database}.`);
  }
  else {
    log(`Connected to Local PostgreSQL ${db.options.database}.`); 
  }
  log(`Listening on port ${[port]}`);
});

