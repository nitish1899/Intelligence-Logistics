const mongoose = require('mongoose');

const consumerSchema = new mongoose.Schema({
    gSTIN: { type: String, required: true },
    compayName: { type: String, required: true },
    website: { type: String, required: true },
    kYCVerified: { type: Boolean },
    aadharNumber: { type: String, required: false },
    pANNumber: { type: String, required: false },
    cINNumber: { type: String, required: false },
    permissibleItems: { type: Array },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Consumer', consumerSchema);