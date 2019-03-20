const mongoose = require('mongoose');
const { userSchema } = require('../../app_config/schemas/userSchema');
const { registerValidationSchema } = require('../../app_config/schemas/validation/user');
const Joi = require('joi');

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    return Joi.validate(user, registerValidationSchema);
}

module.exports = {
    validate: validateUser,
    User
}