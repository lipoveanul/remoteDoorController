const mongoose = require('mongoose');

module.exports.arduinoSchema = new mongoose.Schema({
    isButtonPressed: Boolean,
    deviceName: String,
});