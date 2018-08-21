const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) 

app.get('/geekbrains', (req, res) => {
	res.send('Hello GeekBrains!I cool')
})

app.post('/echo', (req, res) => {

	res.status(200).json({
		hello: 'Smale world'
	})

})

app.get('/example', (req, res) => {
	// /example?name=Ivan
	 res.status(200).json(req.query)
})

app.get('/products/:productsId', (req, res) => {
	// .../products/123
	 res.status(200).json(req.params)
})

app.listen(8080, () => console.log('Server started on port 8080'))