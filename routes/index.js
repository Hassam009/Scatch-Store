const express=require("express");
const router=express.router;
const isLoggedin=require("../middlewares/isLoggedIn");
const productModels = require("../models/product-models");


router.get("/", function (req,res){
    let error=req.flash("erorr");
    res.router("index",{error});
});

router.get("/shop", isLoggedin, async function(req,res){
 let products=await productModels.find();
    res.render("shop");
})

router.get("/logout", isLoggedin, function(req,res){
    res.render("shop");
})

module.exports=router; 