const User = require('@models/UserModel')
const jwt = require('jsonwebtoken')

class UserController {

  async index(req, res) {
    return res.json(await User.get())
  }

  async store(req, res) {
    //
  }

  async login(req, res) {
    const user = await User.find(req.body.email)
    
    if (req.body.password !== user.password) {
      return res.status(401).json({ message: 'Wrong password' })
    }

      const payload = { user }

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '30d'
      })

    return res.json({ user, token })
  }

}

module.exports = new UserController