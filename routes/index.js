'use strict'

const express = require('express')
const usersController = require('../controllers/users_controller')
const router = express.Router()

router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.createUser)
router.put('/users/:id', usersController.updateUser)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router