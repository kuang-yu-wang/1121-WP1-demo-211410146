import pkg from 'pg';
import {log, error} from 'console';
import dotenv from "dotenv";
const { Pool } = pkg;

let db;
dotenv.config();

if (process.env.DATABASE == "SUPABASE") {
  db = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: 'postgres',
    password: process.env.SUPABASE_PASSWORD,
    database: 'postgres',
  });
  log('[Database] Pool Supabase.');
}
else if (process.env.DATABASE == undefined){
  // yield new Error('DATABASE is undefined.');
  error('[Database] DATABASE is undefined.');
  db = {};
}
else {
  db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "",
    database: "wp1_demo_46",
  });
  log('[Database] Pool Local PostgreSQL.');
}

const testDB = async () => {
  try {
    log('[Database Test] Connected to ', db.options.database);
    const result = await db.query('SELECT * FROM card_46');
    log(JSON.stringify(result.rows));
  } catch (error) {
    error(error);
  }
};
testDB();

export default db;