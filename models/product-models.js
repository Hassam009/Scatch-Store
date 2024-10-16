const mongoose=require("mongoose");

const productSchema=mongoose.Scheme({
    image:String,
    name:String,
    price:Number,
    discount:{
        type: Array,
        default:0,
    },

    bgcolor:String,
    panecolor:String,
    textcolor:String,
})

module.exports= mongoose.model("product", productSchema);
