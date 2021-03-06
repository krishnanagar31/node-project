var express=require("express");
var router=express.Router();
var user=require("../model/user");


router.get("/",function(req,res){
	var pagedata={title:"login",pagename:"login/index",message1:req.flash("msg1"),message2:req.flash("msg2")}
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
	var u =req.body.username;
	var p =req.body.password;


	user.findwhere({username:u},function(err,result){
		if(result.length==0)
		{	

			req.flash("msg1","Invalid username and password");
			res.redirect("/login");

		}
		else
		{
			var data=result[0];
			if(data.password==p)
			{
		req.session.userid=data._id;
		req.session.fullname=data.fullname;
		req.session.is_user_logged_in=true;
		res.redirect("/user");
		// console.log(req.session);

			}
			else
			{

				req.flash("msg2","Invalid password");
				res.redirect("/login");
			}
		
		}
	});
});
	

	
module.exports=router;