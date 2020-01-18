var connection=require("connection.js");

// selectAll()
// insertOne()
// updateOne()

selectAll()
insertOne()
updateOne()

var orm={
selectAll: function(cb){
let queryString="SELECT * FROM burgers";
connection.query(queryString,function(req,res){
    if (err) {throw err;}
    else cb(res);
});


},
otherthing: function(){

},

};

module.exports= orm;