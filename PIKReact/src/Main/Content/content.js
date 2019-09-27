import React, { Component } from 'react'

const sum = (1500 +' руб.')
const compensation = (1000 +' руб.')
const styleBlueColor = {'color': '#7aa9f9'}
class Content extends Component{
	render(){
		return(
			<artical>
				<span className="close"></span>

				<h1>Подписания договора и оплата</h1>

				<h2>
				  Общая сумма оплаты в адрес ООО"ПИК Аренда": <span style={styleBlueColor}>{ sum }</span>
				</h2>

				<p>
				  Размер гарантированной компенсации "ПИК Аренда"<br/>
				  при условии собюдения договора:<span style={styleBlueColor}>{ compensation }</span>
				  <span className="curcleQues">?</span>
				</p>

				<p>
				  После оплаты вам необходимо оплатить первый месяц аренды <br/>напрямую по 
				  ресвизитам собственника
				</p>
			
			</artical>
		)
	}
}

export default Content