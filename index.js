'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) throw err
    console.log('Conection to db successful')
    app.listen(config.port, () => {
        console.log(`Running in port ${config.port}`)
    })
})