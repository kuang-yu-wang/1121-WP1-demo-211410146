import express from "express";
import path from "path";
import logger from "morgan";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";


// Where the server will be running.
const app = express();
dotenv.config();

app.use(express.json());
app.use(logger("dev"));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
// The port that the server will be listening on.
const port = process.env.PORT || 5050;
app.listen(port, () => {
  if(process.env.DATABASE=='SUPABASE'){
    console.log(`Connected to Supabase PostgreSQL.`);
  }
  else {
    console.log(`Connected to Local PostgreSQL.`); 
  }
  console.log(`Listening on port ${[port]}`);
});

