var express=require("express");
var router=express.Router();

var cate=require("../model/category");
var pro=require("../model/product");



router.get("/",function(req,res){
	cate.find(function(err,result1){
		pro.find(function(err,result2){


 var pagedata={title:"Home",pagename:"Home/index", category:result1, product:result2}
	res.render("layout",pagedata);
		});
	});
});

module.exports=router;