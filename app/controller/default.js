var express=require("express");
var router=express.Router();

router.use("/",require("./home"));
router.use("/about",require("./about"));
router.use("/signup",require("./signup"));
router.use("/contact",require("./contact"));

module.exports=router;