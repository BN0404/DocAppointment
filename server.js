const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send({
        message: "server is running",
    });
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

