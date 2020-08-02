const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    try{
        console.log(req.files);
        console.log('report api');
    } catch (err){
        console.log(err);
    }
});

module.exports = router;