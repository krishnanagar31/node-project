var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
	var pagedata={title:"signup",pagename:"signup/index"}
	res.render("layout",pagedata);
});


router.post("/registration",function(req,res){
	console.log(req.body);
	obj=req.body;
	var pagedata={title:"signup",pagename:"signup/registration",data1:obj}
	res.render("layout",pagedata);


});

module.exports=router;