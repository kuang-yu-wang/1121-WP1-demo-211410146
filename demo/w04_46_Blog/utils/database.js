const { Pool } = require('pg');

let pool;

pool = new Pool({
  host    : 'db.lkzqmneikhvduesdatyd.supabase.co',
  port    : 5432,
  user    : 'postgres',
  password: '',
  database: 'postgres',
});

console.log('Database connected', pool);

module.exports = pool;