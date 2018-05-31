var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017", function(err, client){
	if(err){
		console.log("-------", err);
	}
	else
	{
		var db = client.db('project');
		db.collection("demo").find().toArray(function(err, result){
			console.log(result);
		});	
	}
});