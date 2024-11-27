const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logout}=require("../controllers/authControllers")
const isLoggedIn=require("../middlewares/isLoggedIn")


router.get("/", function (req, res) {
  res.send("hey its working");
});

router.post("/register", registerUser );

router.post("/login", loginUser );

router.post("/logout", logout );

module.exports = router;
