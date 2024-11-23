const mongoose = require("mongoose");

const ownerSchema = mongoose.Scheme({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  // contact: number,
  picture: String,
  gstin: String
});
module.exports = mongoose.model("owner", ownerScehma);
