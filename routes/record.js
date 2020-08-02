const express = require('express');
const uploadsPath = require('../config/default.json').uploads;
const userSalesService = require('../services/usersalesservice');
const Sales = require('../models/Sales');
const router = express.Router();


router.post('/', (req,res) => {
    try{
        const file = req.files.csv;
        const filename = Date.now() + "-" + file.name;
        file.mv(uploadsPath + filename , function(err,ressult){
            if (err)
                throw err;
            userSalesService.recordCreate(filename);
            res.send({
                sucess: true,
                message: 'File Uploaded!'
            })
        })
    } catch (err){
        console.log(err);
        res.status(500).send('There is server error');
    }
});

module.exports = router;