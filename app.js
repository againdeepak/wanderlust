require("dotenv").config();
const AtlasUrl=process.env.MONGOATLAS_URL;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')
const PORT = 3001;
const path = require('path');
const ExpressError = require('./utils/ExpressError.js');
const MongoStore = require('connect-mongo');

// Routes
const listingRouter=require('./routes/listing.js');
const reviewRouter=require('./routes/review.js');
const userRouter=require('./routes/user.js');
const session=require("express-session")
const flash=require('connect-flash');
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require('./models/user.js');
// a better way to define try catch...
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then((res) => {
    console.log("Connect to db")
}).catch
    (err => console.log(err));


async function main() {
    await mongoose.connect(AtlasUrl);
}


const store=MongoStore.create({
    mongoUrl:AtlasUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});
store.on("error",()=>{
    console.log("Error in mongo session store",err);
})
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
    }
}


app.use(session(sessionOptions));
app.use(flash());

//using passport authenication...
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})

app.use('/listings',listingRouter);
app.use('/listings/:id/reviews/',reviewRouter);
app.use('/',userRouter);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})
app.use((err, req, res, next) => {
    let { statusCode = 500, message } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render('listing/error.ejs', { message });
})
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})