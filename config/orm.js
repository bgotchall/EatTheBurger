var connection = require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()

// selectAll()
// insertOne()
// updateOne()

var orm = {
  all: function(cb) {
    let queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      } else cb(res);
    });
  },
  create: function(burger_name,cb){
    var queryString="INSERT INTO burgers (burger_name) VALUES(?)";
   
    connection.query(queryString, burger_name, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });

  },
  otherthing: function() {}
};

module.exports = orm;
