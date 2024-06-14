const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: { type: String, required: true },
  pin: { type: String, required: true },
  profileImage: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);