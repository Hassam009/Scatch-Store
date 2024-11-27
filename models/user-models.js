const mongoose=require("mongoose");
const userSchema=mongoose.Scheme({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type: Array,
        default:[]
    },

    // isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },

    contact:number,
    picture:String,
})
module.exports= mongoose.model("user", userScehma);
