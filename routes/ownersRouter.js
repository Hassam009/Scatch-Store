const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

//console.log(process.env.NODE_ENV);
//we can set environment varibale by set command in terminal
if (process.env.NODE_ENV === "development")
  router.post("/create", async function (req, res) {
    // res.send("hey its working");
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("You dont have permission to create an ownwer.");
    }

    let {fullname, email, password}=req.body;
    let createdOwner=await ownerModel.create({
        fullname,
        email,
        password,
    });
    res.status(203).send(createdOwner);
  });

router.get("/", function (req, res) {
  res.send("hey its working");
});

router.get("/admin", function(req, res){
  let success=req.flash("success")
  res.render("createproducts", {success});
})
module.exports = router;
