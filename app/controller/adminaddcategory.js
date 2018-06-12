var express=require("express");
var router=express.Router();

var category=require("../model/category");
var mongo=require("mongodb");

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


router.post("/update", function(req, res){
	// console.log(req.body);
	// var data = req.body;
	// console.log(data);
	// delete data.id;
	// console.log(data);
	var id= req.body.id;
	delete req.body.id;
	category.updatewhere({_id : mongo.ObjectId(id)}, req.body, function(err, result){
		console.log(result);
		res.redirect("/admin/view_category");
	});

});
	
module.exports=router;

