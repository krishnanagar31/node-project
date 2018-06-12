var connect= require("../config/connect");
var config=require("../config/db");

module.exports.insert=function(obj,cb){

connect.init(function(err,client){

	var db=client.db(config.dbname);
	db.collection("category").insert(obj,cb)
});
};

module.exports.find=function(cb){

	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("category").find().toArray(cb);
});
};

module.exports.findwhere=function(obj,cb){

	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("category").find(obj).toArray(cb);
});
};


module.exports.remove=function(obj,cb){
	// console.log(obj);
	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("category").remove(obj,cb);
});
};

module.exports.updatewhere=function(where,obj,cb){
	// console.log("---------",where);
	// console.log("++++",obj);
	connect.init(function(err,client){

	var db=client.db(config.dbname);

	db.collection("category").update(where,{$set : obj},cb);
	// db.collection("product").find(where).toArray(cb);
});
};