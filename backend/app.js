const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const corsOptions = {
    origin: '*',
    credentials: true
}

mongoose.connect(`
mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@intelligencelogistics.x5vex0i.mongodb.net/?retryWrites=true&w=majority&appName=IntelligenceLogistics
`)

app.use(cors(corsOptions));

app.use(express.json());

http.listen(3000, function () {
    console.log('Service is running');
})


