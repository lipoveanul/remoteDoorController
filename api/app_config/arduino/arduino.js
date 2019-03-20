const five = require('johnny-five');
const board = new five.Board();

board.on("ready", () => {
    board.pinMode(13, five.Pin.OUTPUT);
});

module.exports = {
    board
}
