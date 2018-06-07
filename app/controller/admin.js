var express=require("express");
var router=express.Router();
var admin=require("../model/admin");

router.get("/",function(req,res){
	var pagedata={title:"admin login",pagename:"admin/index",message1:req.flash("msg1"),message2:req.flash("msg2")}
	res.render("admin_layout",pagedata);
});

router.post("/",function(req,res){
	var u =req.body.username;
	var p =req.body.password;

admin.findwhere ({username:u},function(err,result){
		if(result.length==0)
		{	

			req.flash("msg1","Invalid username and password");
			res.redirect("/admin");

		}
		else
		{
			var data=result[0];
			if(data.password==p)
			{
		req.session.userid=data._id;
		req.session.fullname=data.name;
		req.session.is_admin_logged_in=true;
		res.redirect("/admin/dashboard");

			}
			else{

				req.flash("msg2","Invalid password");
				res.redirect("/admin");
			}
		
		}
	});
	});
	

	
module.exports=router;