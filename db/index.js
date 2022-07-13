const express = require('express');
const app = express();
// const place = require('../model/place')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/auth-app',{

useNewUrlParser: true,
useUnifiedTopology: true,
//useCreateIndex: true
}).then(()=>{
    console.log("out db is connected")
}).catch((err)=> console.log(err));

