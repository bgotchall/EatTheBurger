var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
  res.render("index", hbsObject);
  });  //end of get route
  
  router.post("/api/burgers", function(req, res) {
    burger.create( req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  }); // end of post



});

module.exports=router;