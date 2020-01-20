var connection=require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()

// selectAll()
// insertOne()
// updateOne()

var orm={
all: function(cb){
let queryString="SELECT * FROM burgers";
connection.query(queryString,function(err,res){
    if (err) {throw err;}
    else cb(res);
});


},
otherthing: function(){

},

};

module.exports= orm;