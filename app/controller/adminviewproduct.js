var express=require("express");
var router=express.Router();
var product=require("../model/product");
var category=require("../model/category");
var mongo=require("mongodb");

router.get("/",function(req,res){
product.find(function(err,result){

	var pagedata={title:"admin view_caterory",pagename:"admin/adminviewproduct",data:result}
	res.render("admin_layout",pagedata);
		});
	});

router.get("/delete/:id",function(req,res){
	// console.log(req.query);
product.remove({_id:mongo.ObjectId(req.params.id)},function(err,result){
	// console.log(result);
	res.redirect("/admin/view_product");

	});
});




router.get("/update/:id",function(req,res){


	product.findwhere({ _id : mongo.ObjectId(req.params.id)},function(err,result){

			prodata=result[0];

		category.find(function(err,result){


	var pagedata={title:"admin update_product",pagename:"admin/admineditproduct",prodata:prodata,catedata:result}
	res.render("admin_layout",pagedata);

		});

	});

});
	
	


module.exports=router;
