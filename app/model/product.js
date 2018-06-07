var connect= require("../config/connect");
var config=require("../config/db");

module.exports.insert=function(obj,cb){

connect.init(function(err,client){

	var db=client.db(config.dbname);
	db.collection("product").insert(obj,cb)
});
};

module.exports.find=function(cb){

	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("product").find().toArray(cb);
});
};