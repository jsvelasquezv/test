'use strict'

const User = require('../models/User')

function getUser(req, res) {
    let id = req.params.id
    User.findOne({ id: id }, (err, userStored) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!userStored) return res.status(404).send({ message: `Usuario no existente` })
        res.status(200).send({ user: userStored })
    })
}

function getUsers(req, res) {
    User.find({}, (err, usersStored) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!usersStored) return res.status(404).send({ message: `No existen usuarios` })
        res.status(200).send({ users: usersStored })
    })
}

function createUser(req, res) {
    let user = new User()

    user.id = req.body.id
    user.name = req.body.name,
        user.last_name = req.body.last_name
    user.address = req.body.address
    user.city = req.body.city
    user.state = req.body.state
    user.country = req.body.country
    user.phone = req.body.phone
    user.area_code = req.body.area_code
    user.birthd = req.body.birthd

    user.save((err, userStored) => {
        if (err) return res.status(500).send({ message: `Error al guardar el usuario: ${err}` })
        res.status(200).send({ user: userStored })
    })
}

function updateUser(req, res) {
    let id = req.params.id
    let body = req.body
    User.findOneAndUpdate({ id: id }, body, (err, userUpdated) => {
        if (err) return res.status(500).send({ message: `Error al actualizar el usuario: ${err}` })
        res.status(200).send({ user: userUpdated })
    })
}

function deleteUser(req, res) {
    let id = req.params.id
    User.findOne({ id: id }, (err, userStored) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!userStored) return res.status(404).send({ message: `No existe el usuario` })

        userStored.remove(err => {
            if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
            res.status(204).send({ message: 'Usuario eliminado con exito' })
        })
    })
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}