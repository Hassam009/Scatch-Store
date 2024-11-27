const express = require("express");
const upload = require("../config/multer-config");
const router = express.Router();
const productModel = require("../models/product-models");

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    let {
      name,
      price,
      discount,

      bgcolor,
      panecolor,
      textcolor,
    } = req.body;

    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,

      bgcolor,
      panecolor,
      textcolor,
    });

    req.flash("success", "Product created Successfully");
    res.redirect("/owners/admin")
    res.send(product);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
