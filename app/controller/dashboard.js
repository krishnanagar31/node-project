var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
	var pagedata={title:"admin dashboard",pagename:"admin/dashboard"}
	res.render("admin_layout",pagedata);
});


module.exports=router;