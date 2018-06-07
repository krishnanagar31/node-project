
var connect=require("../config/connect");
var config=require("../config/db");


module.exports.findwhere=function(obj,cb){

	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("admin").find(obj).toArray(cb);
});
};