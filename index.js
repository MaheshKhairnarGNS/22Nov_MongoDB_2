//console.log("It Works...");

const express = require('express');
const appObj = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Promise Chain
//1. Function Definition
async function mahiFun() {
    //Every Function return something
    return await mongoose.connect('mongodb+srv://mahigkhairnar:mahi1212@mahigk-courses-mongodbs.pyqc6.mongodb.net/?retryWrites=true&w=majority&appName=mahigk-courses-MongoDBserver');
    }

//2. Function Calling
  mahiFun().then((e)=>{
    console.log('DB Connected');
  }).catch(err => console.log(err));


let port = process.env.PORT || 5000;

appObj.listen(port,()=>{
    console.log('listening on port ' + port);
});