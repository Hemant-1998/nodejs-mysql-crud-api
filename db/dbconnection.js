// const mysql = require("mysql2/promise");
// let connection;
// (async () => {
//   try {
//     connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: process.env.password,
//       database: "pando",
//     });
//   } catch (error) {
//     console.log("error connecting to database in dbconnection.js", error);
//   }
// })();
// console.log(`connection object in dbconnection ${connection}`);

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "pando",
});
module.exports = connection;
