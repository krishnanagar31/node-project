var express=require("express");
var router=express.Router();


router.use("/",require("./home"));
router.use("/about",require("./about"));
router.use("/signup",require("./signup"));
router.use("/contact",require("./contact"));
router.use("/login",require("./login"));
router.use("/logout",require("./logout"));
router.use("/user",user_backdoor,require("./user"));


router.use("/admin",require("./admin"));
router.use("/admin/dashboard",admin_backdoor,require("./dashboard"));
router.use("/admin/add_category",admin_backdoor,require("./adminaddcategory"));
router.use("/admin/view_category",admin_backdoor,require("./adminviewcategory"));
router.use("/admin/add_product",admin_backdoor,require("./adminaddproduct"));
router.use("/admin/view_product",admin_backdoor,require("./adminviewproduct"));



function user_backdoor(req,res,next) 
	{
		// console.log(req.session);
		if(!req.session.is_user_logged_in)
		{

		return res.redirect("/login");
		}
		return next();
	}


function admin_backdoor(req,res,next) 
	{
		if(!req.session.is_admin_logged_in)
		{
		res.redirect("/admin");
		}
		next();
	}

module.exports=router;
