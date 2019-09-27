import React, { Component, Fragment } from 'react'
import css from '../style.css'

const logoName = 'Комаров H.K.'

class Header extends Component {
	render() {
		return(
			<Fragment>
				<header>
				  <nav>
				    <img className="logo"/>

				    <span className="logoNameStick logoName">{ logoName }</span>
					
					<div className="passRevers">
					  <div className="pass"><p>Сдать квартиру</p></div>
					  <div className="remove"><p>Снять квартиру</p></div>
					</div>

					<button className="btn btnHead">Выйти</button>

				  </nav>
				</header>
			</Fragment>
		)
	}
}

export default Header