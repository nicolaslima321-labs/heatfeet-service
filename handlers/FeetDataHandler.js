let arduino = require('./ArduinoHandler')

console.log("Handling with feetSensors")


exports.modules = arduino.on('analogChange', function(e) {
  console.log("pin" + e.pin + " : " + e.old_value + " -> " + e.value)
})