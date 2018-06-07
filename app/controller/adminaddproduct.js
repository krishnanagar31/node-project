var express=require("express");
var router=express.Router();
var product=require("../model/product");
var category=require("../model/category");

router.get("/",function(req,res){
	category.find(function(err,result){

	var pagedata={title:"admin add_product",pagename:"admin/adminaddproduct",message:req.flash("msg"),data:result};
	res.render("admin_layout",pagedata);
	});
});
router.post("/",function(req,res){
	product.insert(req.body,function(err,result){
		console.log("---------",result);
		req.flash("msg","add product successfully")
		res.redirect("/admin/add_product");
	});

	});

	
module.exports=router;
