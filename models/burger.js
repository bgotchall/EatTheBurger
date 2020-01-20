var orm = require("../config/orm.js");

//burger model here

var burger = {
  all: function(cb) {
      orm.all(function(res){
        cb(res);
      })
  },
  create: function(data,cb){
    orm.create(data,function(res){
      cb(res);
    })

  },
  otherthing: function(cb) {}
};

module.exports=burger;