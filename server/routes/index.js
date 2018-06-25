var express = require("express");
var router = express.Router();
var path = require("path");
var http = require("http");

router.get("/",function(req,res,next){
	res.render("Home/home");
});

module.exports = router;