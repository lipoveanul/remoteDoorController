const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { User } = require('../models/user/userModel');
const { authValidationSchema } = require('../app_config/schemas/validation/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');


//Authentification route
router.post('/', async (req, res) => {
    const {error} = Joi.validate(req.body, authValidationSchema);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(token);
})

module.exports = router;