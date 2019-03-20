const Joi = require('joi');

const registerValidationSchema = {
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(10).max(255).required()
}

const authValidationSchema = {
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(10).max(255).required()
}

module.exports = {
    registerValidationSchema,
    authValidationSchema
}