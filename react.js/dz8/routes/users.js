const { Router } = require('express')
const { UsersController } = require('../controllers')

const router = Router()

router.get('/', async (req, res) => {//принять запрос
	res.status(200).json({//получить данные
		response: await UsersController.getUsers()//отдать запрос
	})
})

router.post('/', async (req, res) => {//принять запрос
	await UsersController.createUser(req.body.name, req.body.age)
//записать данные
	res.status(200).json({
		response: true //отдать ответ
	})
})

	router.delete('/', async (req, res) => {
	await UsersController.deleteUser(req.body._id)
	
	res.status(200).json({
		response: true
	})
})	

module.exports = router