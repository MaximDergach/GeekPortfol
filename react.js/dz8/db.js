const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/geekbrains-db')

const User = mongoose.model('User', {//колекция...модель дб
	name: String,
	age: Number
})

module.exports = {
	User
}