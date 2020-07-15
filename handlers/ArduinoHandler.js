let ArduinoFirmata = require('arduino-firmata')

console.log("[ArduinoHandler@]: Initializing")
var OS = require('os');
var isWindows = OS.platform().includes('win32') || OS.platform().includes('win64')

let arduino = new ArduinoFirmata()

arduino.connect() // use default arduino
arduino.connect((isWindows ? 'COM4' : '/dev/ttyACM0'))

arduino.on('connect', function(){

  console.log("[ArduinoHandler@]: board version" + arduino.boardVersion)
  console.log("[ArduinoHandler@]: " + arduino)

})

console.log("[ArduinoHandler@]: Initialized")

exports.module = arduino