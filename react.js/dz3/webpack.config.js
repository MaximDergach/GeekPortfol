const path = require('path')

const ENTRY_FILE_PATH = path.resolve(__dirname, 'src', 'index.js')//исходящие данные
const OUTPUT_PATH = path.resolve(__dirname, 'dist')//входящие

module.exports = {
	entry : ENTRY_FILE_PATH,
	devServer: {
		port: 3030,
		contentBase: OUTPUT_PATH,//директория выдача контента
		open: true
	},
	output: {
		path: OUTPUT_PATH,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react', 'stage-2']
					}
				}
			}
		]
	}
}