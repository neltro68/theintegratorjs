const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    try{
        console.log('record api');
        res.send('record api');
    } catch (err){
        console.log(err);
    }
});

module.exports = router;