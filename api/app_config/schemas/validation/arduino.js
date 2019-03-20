const Joi = require('joi');

module.exports.arduinoSchema = {
    isButtonPressed: Joi.bool().required(),
    deviceName: Joi.string().required()
}