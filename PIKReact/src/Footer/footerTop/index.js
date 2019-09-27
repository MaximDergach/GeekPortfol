import React, { Component, Fragment } from 'react'

class FooterTop extends Component{
	render(){
		return(
			<Fragment>
			  <div className="flexCont">
 				<div className="phone">8 800 320-30-23<p>Звонок бесплатный</p></div>
 				

 				<button className="btn">Обратный звонок</button>

 				<div className="question">
				  <div>Задать вопрос</div>
				  <p>Мы всегда на связи</p>
 				</div>
 				<span className="posting"></span>
			  </div>
			</Fragment>
		)
	}
}

export default FooterTop