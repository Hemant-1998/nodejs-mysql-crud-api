const connection = require("./dbconnection");

function executeThisQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, function (err, results, fields) {
      if (!err) {
        resolve([results, fields]);
      } else {
        reject(err);
      }
    });
    // const data = [{ id: 10, name: "in promise" }];
  });
}

module.exports = executeThisQuery;
