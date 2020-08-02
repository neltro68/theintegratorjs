const express = require('express');
const Sales = require('../models/Sales');
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const from = req.body.from;
        const to = req.body.to;
        if (from && to)
        {
            let sales = await Sales.find({ "last_purchase_date": { "$gte": new Date(from), "$lte": new Date(to) } });
            res.send(sales);
        } else {
            res.send({error: "missing parameters - from: date & to: date"});
        }
    } catch (err){
        console.log(err);
    }
});

router.get('/:date', async (req,res) => {
    try{
        const date = req.params.date;
        if (date)
        {
            let sales = await Sales.find({ "last_purchase_date": new Date(date) });
            res.send(sales);
        }
    } catch (err){
        console.log(err);
    }
});

module.exports = router;
