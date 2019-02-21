const Model = require('@models/Model')

class UserModel extends Model {

  async get() {
    return await this.DB('users')
  }

  async save(req) {
    //
  }

  async find(email) {
    return await this.DB('users').where('email', email).first()
  }
  
}

module.exports = new UserModel