var express=require("express");
var router=express.Router();

var category=require("../model/category");

router.get("/",function(req,res){
	var pagedata={title:"admin add_caterory",pagename:"admin/adminaddcategory",message:req.flash("msg")}
	res.render("admin_layout",pagedata);
});
router.post("/",function(req,res){
	category.insert(req.body,function(err,result){
		console.log("---------",result);
		req.flash("msg","add category successfully")
		res.redirect("/admin/add_category");
	});

	});

	
module.exports=router;

