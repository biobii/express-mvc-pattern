const Model = require('@models/Model')

class UserModel extends Model {
  async get(limit = 2) {
    console.log('limit: ' , limit)
    // return await this.DB.select().from('users')
  }

  async create(user) {
    return await this.DB.insert(user).into('users')
  }
}

module.exports = new UserModel