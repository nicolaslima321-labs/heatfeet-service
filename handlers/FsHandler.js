let fs = require('fs')

const __CLASS__ = 'FsHandler'

module.exports = {

  fileExists (path) {
    return fs.existsSync(path)
  },

  appendData (props) {
    var fs = require('fs')
    fs.appendFile('feetData.txt', props, function (err) {
      if (err) {
        console.log("Failed: ", err)
      } else {
        console.log("Success")
      }
    })
  },

  createDataFile (props) {
    var logger = fs.createWriteStream('feetData.txt', {
      flags: 'a'
    })

    logger.write(props) // append string to your file
    }
}