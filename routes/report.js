const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    try{
        console.log('report api');
        res.send('report api');
    } catch (err){
        console.log(err);
    }
});

module.exports = router;