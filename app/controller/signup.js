var express=require("express");
var router=express.Router();
var mongo=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";

router.get("/",function(req,res){
	var pagedata={title:"signup",pagename:"signup/index"}
	res.render("layout",pagedata);
});


router.post("/",function(req,res){
	console.log(req.body);
	mongo.connect(url,function(err,client){

	var db=client.db("project");
	console.log(req.body);
	db.collection("user").insert(req.body,function(err,result){
		console.log("---------",result);
		res.redirect("/login");
	});

	});

	});

module.exports=router;