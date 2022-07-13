const express = require('express');
const { Mongoose } = require('mongoose');

require("dotenv").config();
require('./db')



const userRouter = require('./routes/user')

const placeRouter = require('./routes/placesData')

const app = express()

const PORT = process.env.PORT || 3200

app.use(express.json())

app.use('/api/user/',userRouter,placeRouter)

// app.use('/api/user/',placeRouter)

//var database


app.listen(PORT,() => {
    // Mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true},(error,result)=>{
    //     if(error) throw error
    //     database=result.db("placesData")
                
    //         })
    // }

    console.log(`app is running on port${PORT}`)
})