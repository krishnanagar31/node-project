var express=require("express");
var router=express.Router();

var category=require("../model/category");

router.get("/",function(req,res){

	category.find(function(err,result){

	var pagedata={title:"admin view_category",pagename:"admin/adminviewcategory",data:result}
	res.render("admin_layout",pagedata);
		});
	});



module.exports=router;
