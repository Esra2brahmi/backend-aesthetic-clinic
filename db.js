const Pool = require("pg").Pool;
require("dotenv").config();

const dbConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const pool = new Pool(dbConfig);

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
  } else {
    console.log("Connected to the database:", res.rows[0]);
  }
});

module.exports = pool;
