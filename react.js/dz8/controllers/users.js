const { User } = require('../db')

class UsersController {
  static async getUsers() {//так как запросы асинхонные используем async
	return await User.find()	//т.т User.find() не возможно будет исполльзовать в другм месте
  }

	static async createUser(name, age) {
	       const user = new User({
			name,
			age
		})

		await user.save()

		return true
	}

	static async  deleteUser(_id) {
	   await User.deleteOne({
			_id
		})
	}
}

module.exports = UsersController