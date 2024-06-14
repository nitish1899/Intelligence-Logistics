const mongoose = require('mongoose');

const vehicleServiceProviderSchema = new mongoose.Schema({
    vendorFirmName: { type: String, required: true },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    pincode: { type: String, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model('VehicleServiceProvider', vehicleServiceProviderSchema);