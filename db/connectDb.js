const mysql = require("mysql2/promise");

let connectDb = function (dbName) {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: dbName,
  });
};

module.exports = connectDb;
