var express=require("express");
var app=express();


// .....all require file code......

app.set("view engine","ejs");
app.set("views","view");

// ......all app set code.....

var parser=require("body-parser");
app.use(parser());
app.use(express.static(__dirname+"/public"));
app.use(require("./controller/default"));

// ......all app.use code......

app.listen(7575,function() {
	console.log("server runing......")	
});
// ..........all sever start code....
