var express=require("express");
var router=express.Router();


router.use("/",require("./home"));
router.use("/about",require("./about"));
router.use("/signup",require("./signup"));
router.use("/contact",require("./contact"));
router.use("/login",require("./login"));
router.use("/logout",require("./logout"));

module.exports=router;