const express = require('express')
const router = express.Router()
const auth = require('@middleware/JWTMiddleware')
const UserController = require('@controllers/UserController')

router.get('/', auth, UserController.index)
router.post('/login', UserController.login)

module.exports = router