var express=require("express");
var router=express.Router();
var product=require("../model/product");

router.get("/",function(req,res){
product.find(function(err,result){

	var pagedata={title:"admin view_caterory",pagename:"admin/adminviewproduct",data:result}
	res.render("admin_layout",pagedata);
		});
	});


module.exports=router;
