var express=require("express");
var router=express.Router();

var cate=require("../module/category");
var pro=require("../module/product");



router.get("/",function(req,res){
	
	var pagedata={title:"Home",pagename:"Home/index", category:cate.getAll, product:pro.getAll}
	res.render("layout",pagedata);
});

module.exports=router;