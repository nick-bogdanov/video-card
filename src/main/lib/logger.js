let log = require('electron-log')
const fs = require('fs-extra')

class Log {
    constructor(filesDir) {
        this.filesDir = filesDir
        this._init()
    }

    _init() {
        log.transports.file.level = 'info'
        log.transports.file.format = '{h}:{i}:{s}:{ms} {text}'

        // Set approximate maximum log size in bytes. When it exceeds, 
        // the archived log will be saved as the log.old.log file 
        log.transports.file.maxSize = 5 * 1024 * 1024

        // Write to this file, must be set before first logging 
        log.transports.file.file = this.filesDir + '/log.txt'

        // fs.createWriteStream options, must be set before first logging 
        log.transports.file.streamConfig = { flags: 'w' }

        // set existed file stream 
        log.transports.file.stream = fs.createWriteStream(this.filesDir + '/log.txt')
    }

    info(message) {
        log.info(message)
    }
}

module.exports = Log