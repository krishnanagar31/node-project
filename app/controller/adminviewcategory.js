var express=require("express");
var router=express.Router();

var category=require("../model/category");
var mongo=require("mongodb");

router.get("/",function(req,res){

	category.find(function(err,result){

	var pagedata={title:"admin view_category",pagename:"admin/adminviewcategory",data:result}
	res.render("admin_layout",pagedata);
		});
	});


router.get("/delete/:id",function(req,res){
	// console.log(req.query);
category.remove({_id:mongo.ObjectId(req.params.id)},function(err,result){
	// console.log(result);
	res.redirect("/admin/view_category");

	});
});




router.get("/update/:id",function(req,res){
	category.findwhere({ _id : mongo.ObjectId(req.params.id)},function(err,result){

	var pagedata={title:"admin update_category",pagename:"admin/admineditcategory",data:result[0]}
	res.render("admin_layout",pagedata);
		});
	});
	
	


module.exports=router;
