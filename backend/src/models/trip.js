const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    pincode: { type: String, required: true, index: true }
});

const packageDetailsSchema = new mongoose.Schema({
    type: { type: String, required: true },
    pickupTime: { type: Date, required: true },
    payloadCost: { type: Number, required: true },
    payloadHeight: { type: Number, required: true },
    payloadWidth: { type: Number, required: true },
    payloadLength: { type: Number, required: true },
    payloadWeight: { type: Number, required: true },
    typeOfStorage: { type: String, required: true },
});

const tripSchema = new mongoose.Schema({
    vehicle: { type: String, required: true },
    from: { type: addressSchema, required: true },
    to: { type: addressSchema, required: true },
    packageDetails: { type: packageDetailsSchema, required: true },
    specialInstruction: { type: String },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "Consumer" }
}, {
    timestamps: true // Automatically add createdAt and updatedAt timestamps
});

// Add compound index on `from.city` and `to.city` if you often query by city
tripSchema.index({ 'from.city': 1, 'to.city': 1 });

module.exports = mongoose.model('Trip', tripSchema);
