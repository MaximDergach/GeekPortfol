import React, { Component } from 'react'
import ShowImg from './ShowImg/showImg'

class ShopText extends Component{

	render() {

		return(
			<div className="container">

				<div className="logo"></div>
				<div>
					
				</div>
				<h1>Тут Название товара</h1>
					<ShowImg />
					
				<span className="content">
				Видео карты ноутбуки и много всякого
				</span>

					
			</div>
		)
	}
}
export default ShopText