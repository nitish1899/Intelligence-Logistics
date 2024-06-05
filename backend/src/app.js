const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
    origin: '*',
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());

module.exports = {app};


