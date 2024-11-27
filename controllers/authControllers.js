const userModel = require("../models/user-models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateTokens");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;
    let user = await userModel.findOne({ email: email });

    if (user)
      return res.status(401).send("You already have an account, please login");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let users = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          //   let token = jwt.sign({ email, id: userModel._id }, "adnklsdgs");
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created SuccessFully");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });
  if (!user) return res.send("Email or Password incorrect");

  bcrypt.compare(password, user.password, function (err, result) {
    if (resutl) {
      let token = generateToken(user);
      res.cookie("token", token);
      res.send("You can login");
    }
    else{
        return res.send("Email or Password incorrect");
    }
  });
};

module.exports.logout=function (req, res){
    res.cookie("token", "");
    res.redirect("/");
}