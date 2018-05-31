var express=require("express");
var router=express.Router();


router.get("/",function(req,res){
	var pagedata={title:"login",pagename:"login/index"}
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
	console.log(req.body);
	obj=req.body;
	var pagedata={title:"login",pagename:"login/index",data1:obj}
	res.render("layout",pagedata);


});

module.exports=router;