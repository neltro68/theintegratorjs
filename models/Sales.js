const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    sales_amount: {
        type: Number,
        required: true
    },
    last_purchase_date: {
        type: Date,
        required: true
    }
});

module.exports = Sales = mongoose.model(sales, UserSchema);