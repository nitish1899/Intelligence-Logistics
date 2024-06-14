const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleNumber: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})