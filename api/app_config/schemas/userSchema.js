const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
        unique: true

    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id }, config.get('jwtPrivateKey'));
    return token;
}

exports.userSchema = userSchema;
