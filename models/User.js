'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
    id: Number,
    name: String,
    last_name: String,
    address: String,
    city: String,
    state: String,
    country: String,
    phone: String,
    area_code: String,
    birthdate: Date
})

module.exports = mongoose.model('User', userSchema)