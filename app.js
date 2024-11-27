const express =require('express');
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");
const ownersRouter=require("./routes/ownersRouter");
const userRouter=require("./routes/userRouter");
const productRouter=require("./routes/productRouter");
const expressSession=require("express-session");
const flash=require("connect-flash");
const indexRouter =require("./routes/index")

require("dotenv").config();

const db=require("./config/mongoose-connection");
const productModels = require('./models/product-models');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);

app.use(flash());


app.set("view engine", "ejs");

app.use("/", indexRouter)
app.use("/owners", ownersRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3000);