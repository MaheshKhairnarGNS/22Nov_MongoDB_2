//console.log("It Works...");

const express = require('express');
const appObj = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Promise Chain
//1. Function Definition
async function mahiFun() {
    //Every Function return something
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mahigk-courses-mongodbs.pyqc6.mongodb.net/?retryWrites=true&w=majority&appName=mahigk-courses-MongoDBserver`);
    }

//2. Function Calling
let PromiseObj = mahiFun();

//PO.then().catch()    ------ promise chain

PromiseObj.then((e)=>{
    console.log('DB Connected');
    
    //We can do the next task here
    //1. We have to define schema

    //Lets create the collection/Table

    //Collention Name = Students
    //object.method()
    const Students = mongoose.model('Students', {name : String});

    //Students is a class

    // const student1 = new Students({name:'Rohit'});
    // student1.save().then(() => console.log('Successfully Save'));

    // const student2 = new Students({name:'Shubham'});
    // student2.save().then(() => console.log('Successfully Save'));

    // const student3 = new Students({name:'Tushar'});
    // student3.save().then(() => console.log('Successfully Save'));

  }).catch(err => console.log(err));


let port = process.env.PORT || 5000;

appObj.listen(port,()=>{
    console.log('listening on port ' + port);
});