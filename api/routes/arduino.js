const express = require('express');
const router = express.Router();
const arduinoUtils = require('../service/arduinoService');
const arduinoSchema = require('../app_config/schemas/validation/arduino').arduinoSchema;
const auth = require('../middleware/auth');
const Joi = require('joi');

router.post('/', auth, async (req, res) => {
    let result = Joi.validate(req.body, arduinoSchema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
    }
    else {
         await arduinoUtils.openButton(req.body);
        res.status(200).send({message: "State saved"});
    }
});

module.exports = router;