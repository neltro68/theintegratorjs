const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5001;

// connect to db
connectDB();

// init middleware
app.use(bodyParser.json());
app.use(express.json({ extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());

// define routes
app.use('/sales/report', require('./routes/report'));
app.use('/sales/record', require('./routes/record'));

app.get('/', (req, res) => {
    res.send(`<h3>End points : </h3>
                <ul>
                <li>
                    /sales/report <br />
                    csv = name of element
                </li>
                <li>
                    /sales/record
                </li>
                <ul>`);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})