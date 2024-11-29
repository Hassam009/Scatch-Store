const mongoose=require("mongoose");
const userSchema=mongoose.Scheme({
    fullname:String,
    email:String,
    password:String,
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],

    // isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },

    contact:number,
    picture:String,
})
module.exports= mongoose.model("user", userScehma);
