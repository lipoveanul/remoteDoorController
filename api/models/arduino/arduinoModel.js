const mongoose = require('mongoose');
const arduinoSchema = require('../../app_config/schemas/arduinoSchema').arduinoSchema;

let arduinoModel = mongoose.model('deviceList', arduinoSchema);

async function updateButton(data) {
    let result = await arduinoModel.updateOne({deviceName: "remoteController"}, {
        $set: {
            isButtonPressed: data.isButtonPressed
        }
    });
}
async function find() {
    return await arduinoModel.findOne({deviceName: "remoteController"});
}

module.exports = {
    updateButton,
    find
}