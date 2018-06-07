var connect=require("../config/connect");
var config=require("../config/db");

module.exports.insert=function(obj,cb){

connect.init(function(err,client){

	var db=client.db(config.dbname);
	db.collection("user").insert(obj,cb)
});
};

module.exports.findwhere=function(obj,cb){

	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("user").find(obj).toArray(cb);
});
};