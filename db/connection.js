const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'little-cat',
  database: 'employee'
});

module.exports = db;