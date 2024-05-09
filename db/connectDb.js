const mysql = require("mysql2/promise");

let connectDb = function (dbName) {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: dbName,
  });
};

module.exports = connectDb;
