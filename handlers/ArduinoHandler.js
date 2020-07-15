console.log("[ArduinoHandler@]: Initializing")

let fsHandler = require('./FsHandler')

console.log(fsHandler)

fsHandler.createDataFile("first-line\n")

let feetProps = []

var OS = require('os');

var isWindows = OS.platform().includes('win32') || OS.platform().includes('win64')

const ArduinoBoard = require('serialport');
const FsHandler = require('./FsHandler');

const Readline = ArduinoBoard.parsers.Readline;

// Be careful with Windows Hosts
const port = new ArduinoBoard((isWindows ? 'COM4' : '/dev/ttyACM0'));

const parser = new Readline();

port.pipe(parser);

parser.on('data', (sensors) => {
  console.log("Received: " + sensors);
  var ldrValue = sensors.split(':');
  console.log("Intensity: " + ldrValue[0]);
  fsHandler.appendData("0,0," + ldrValue[1] +"\n")
})

console.log("[ArduinoHandler@]: Initialized")