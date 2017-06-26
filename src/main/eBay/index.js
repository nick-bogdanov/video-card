const Nightmare = require('../../../nightmare')
const fs = require('fs-extra')
const _ = require('lodash')
const Log = require('../lib/logger')
const { app } = require('electron')
const filesDir = `${app.getPath('documents')}/scrabber/`
const log = new Log(filesDir)

class EBay {
    constructor(ipc, createWindow) {
        this.ipc = ipc
        this.link = 'https://f.ua/shop/dlya-avtomobilya/'
        this.items = []
        this.init()
    }

    init() {
        this.ipc.on('start-parse', (event) => {
            console.log(event)
        })
    }
}

module.exports = EBay