const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['Authorization']

  if (!token)
    return res.status(400).json({ status: 400, message: 'Token not provided' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.auth = decoded
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }

  next()
}