


const Places = require('../model/placesData');
// const express = require('express');
// const app = express();
// const place = require('../model/place')
// const mongoose = require('mongoose');
exports.getData = async (req, res) => {


    Places.find((err, docs) => {
        if (!err) {
            res.send(docs)
            // res.send("list", {
            //     data: docs
            // });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });

    // Places.find((err,result) =>{
    //     if(err) throw err
    //     res.send(result)
    //     console.log("check the response data",result)

    // })
    //res.send(newUser)
}

