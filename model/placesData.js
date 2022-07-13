const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
const  placeSchema = new mongoose.Schema({
// _id:mongoose.Schema.Types.ObjectId(),
    id:{
type: Number,
required: true
    } ,
    name:{
        type: String,
        required: true
    },

    // name:String,    
    des1:{
        type: String,
        required: true 
    },
    des2:{
        type: String,
        required: true 
    },
    des3:{
        type: String,
        required: true 
    },
    des4:{
        type: String,
        required: true 
    },
    des5:{
        type: String,
        required: true 
    },

});
module.exports = mongoose.model('placesData', placeSchema,'placesData')