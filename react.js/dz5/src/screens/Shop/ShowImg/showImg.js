import React, { Component } from 'react'

const showbigImg = true

const bigImgStyle = {

	width: '120%',
	height: '110%'
}



const showImg = () => {
		console.log('Проверка')

	 showbigImg ? bigImgStyle : false

	}

class ShowImg extends Component{
//проверка обработчика событий
//потом onclick переделать на картинку
	

	render() {
		return(
			<button onClick={showImg} className='btn-click'>кнопка</button>
		)
	}
}

export default ShowImg