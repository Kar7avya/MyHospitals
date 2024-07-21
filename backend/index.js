// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const userRoutes = require("./routes/userRoutes");
// const path =require("path");
// const bcrypt = require ("bcrypt");
// const LoginSchema=require("./Model/LoginSchema");


// app.set('view engine','ejs');

// app.get("/",(req,res)=>{
//   res.render("login");
// });

// app.get("/",(req,res)=>{
//   res.render("SignUp");
// });


// const dbConnect = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/MyCrudApp");
//     console.log("Database Connected");
//   } catch (error) {
//     console.log("error in db connection");
//     console.log(error);
//   }

//   // create account on mongodb atlas
// };
// app.use(express.urlencoded((extended:false)));
// app.use(express.json()); //helps me to convert the request into json format
// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.use("/users", userRoutes);
// app.listen(4005, () => {
//   dbConnect();
//   console.log("server started on port 4005");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcrypt");
const LoginSchema = require("./Model/LoginSchema");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("SignUp");
});

// Database connection
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyCrudApp");
    console.log("Database Connected");
  } catch (error) {
    console.error("Error in DB connection", error);
  }
};

app.use("/users", userRoutes);

// Start server
app.listen(4005, () => {
  dbConnect();
  console.log("Server started on port 4005");
  
});

module.exports = dbConnect;
