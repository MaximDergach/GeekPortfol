const path = require('path')	//модуль из библиотеки нод path
const distPath = path.resolve(__dirname, 'dist')
module.exports = {
	entry: './src/index.js',//описываем точку входа
	/*watch: true,*/
	devServer: {
		port: 8080,//можно и по умолчанию порт оставить
		contentBase: distPath,
		open: true//открывает браузер автоматом
		/*proxy: {
			'/api': 'http://localhost:3000'
		}*/
	},
	output: {
		path: distPath,//абсолютный путь к деректории в которой должны лежать билды
		//склеиваем переменной dirname с директорией dist
		filename:'main.js'//имя бандла js
	},

	module: {
		rules: [
		{
			test: /\.js$/,//выбираем все вайлы js
			exclude: /node_modules/,//исключение
			use: {
				loader: 'babel-loader',//загрузчик
				options: {
					presets: ['env']
				}
			}
		},
			{
				test: /\.css$/,
				use: [
				'style-loader',
				'css-loader'
				]
			},
			{
				test: /\.(png|jpg)/,
				use: ['file-loader']
			}
	   ]
	}
	
}