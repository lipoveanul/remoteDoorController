const boardData = require('../app_config/arduino/arduino');
const arduinoModel = require('../models/arduino/arduinoModel');

let board = boardData.board;

async function openButton(data) {
    let remoteState = await arduinoModel.find();
    if (remoteState.isButtonPressed === false && board.isReady === true && data.isButtonPressed === "true") {
        arduinoModel.updateButton(data);
        board.digitalWrite(13, 1);
        setTimeout(() => {
            board.digitalWrite(13, 0);
            arduinoModel.updateButton({isButtonPressed: false});
       }, 1000);

    }
}

module.exports = {
    openButton
}