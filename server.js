const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5001;

// connect to db
connectDB();

// init middleware
app.use(express.json({ extended: false}));

// define routes
app.use('/sales/report', require('./routes/report'))
app.use('/sales/record', require('./routes/record'))

app.get('/', (req, res) => {
    res.send('API Running');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
