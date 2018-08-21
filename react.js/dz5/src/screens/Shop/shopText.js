import React, { Component } from 'react'
import ShowImg from './ShowImg/showImg'

class ShopText extends Component{

	render() {

		return(
			<div className="container">

				<div className="logo"></div>
				<div>
					<img className="image"/>
				</div>
				<h1>Тут Название товара</h1>

					
				<span className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quis, ea libero quam! Sit laborum esse blanditiis recusandae! Natus iure temporibus, dolore. Molestiae, eos ad modi recusandae assumenda facilis iste.
				</span>

					<ShowImg />
			</div>
		)
	}
}
export default ShopText