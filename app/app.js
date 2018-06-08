var express=require("express");
var app=express();
var parser=require("body-parser");
var cookie=require("cookie-parser");
var session=require("express-session");
var flash=require("express-flash");
var cache=require("nocache");
var upload=require("express-fileupload");


// .....all require file code......

app.set("view engine","ejs");
app.set("views","view");

// ......all app set code.....


app.use(parser());
app.use(express.static(__dirname+"/public"));
app.use(cookie());
app.use(session({secret:"jsk123"}));
app.use(flash());
app.use(cache());
app.use(upload());
app.use(function(req,res,next){
	res.locals.session=req.session;
	
	next();
});
app.use(require("./controller/default"));



// ......all app.use code......

app.listen(7575,function() {
	console.log("server runing......")	
});
// ..........all sever start code....
