const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
let cors = require("cors");
app.use(cors());
// const router =require('express').Router()
const { router } = require("./todo/todo.router");

// const dotenv=require('dotenv')
// dotenv.config()
// console.log(process.env.DATABASE_CONNECTION_STRING)
app.use(bodyparser.json());
app.use("/", router);

// const nameValidator=(req,res,next)=>{
//     const name=req.params.name;
//     if(name.length > 10){
//         next(`${name} is notvalid`);
//     }else{
//         res.send(`${name} is valid`)
//     }
// };

// app.get('/name/:name',nameValidator)

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.send(err);
};

// const routeNo =( req,res,next)=>{
//     res.send(`888888`);
//     // next()
// }

const routeNotExist = (req, res, next) => {
  res.send(`${req.path} does not exist`);
};
// app.get('/*',routeNotExist)

// app.use(nameValidator);
app.use(morgan("dev"));
app.use(errorHandler);
app.use(routeNotExist);

module.exports = app;
