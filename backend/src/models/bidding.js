const mongoose = require('mongoose');

const biddingSchema = new mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
    quotePrice: { type: Number, required: false },
    counterPrice: { type: Number, required: false },
    revisedPrice: { type: Number, required: false },
    success: { type: Boolean }
});

module.exports = mongoose.model('Bidding', biddingSchema);
