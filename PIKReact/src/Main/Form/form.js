import React, { Component } from 'react'
import css from '../../style.css'
import PayForm from './payForm/index.js'

const smallInp = {
	width: '108px',
	height: '5px',
	marginRight: '20px'
}


class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
		numCards:'', 
		nameCard:'', 
		month:'', 
		year:'', 
		codeSvv: '',
		formError: {numCards:'', nameCard:'', month:'', year:'', codeSvv:''},
		numCardsValid: false, 
		nameCardValid: false,
		monthValid: false, 
		yearValid: false, 
		codeSvvValid: false,
		formValid: false
		}
	}

	handleUserInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value}, () => { this.validateField(name, value) });
	}

validateField(fieldName, value) {
	let fieldValidationErrors = this.state.formErrors;
	let numCardsValid = this.state.numCardsValid
	let nameCardValid  = this.state.nameCardValid
	let monthValid = this.state.monthValid
	let yearValid = this.state.yearValid
	let codeSvvValid = this.state.codeSvvValid

	switch(fieldName) {
		case 'numCards':
		  numCardsValid = value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$  /i);
		    fieldValidationErrors.numCards = numCardsValid ? '': 'number is not correct';
		      break;
		case 'nameCard':
		  nameCardValid = value.match(/^([\\w.%+-]+)\\s([\\w.%+-]+)$/i);
		    fieldValidationErrors.nameCard = nameCardValid ? '' : 'name not correct';
		      break;
		case 'month':
		  monthValid = value.match(/^[0,1][0-9](\\d{0})$/i);
		    fieldValidationErrors.month = monthValid ? '' : 'month is not correct';
		      break;
		case 'year':
		  yearValid = value.match(/^[1,2][0][0-9][0-9]$/i);
		    fieldValidationErrors.year = yearValid ? '' : 'year is not correct';
		      break;
		case 'codeSvv':
		  codeSvvValid = value.match(/^[0-9][0-9][0-9]$/i);
		    fieldValidationErrors.codeSvv = codeSvvValid ? '' : 'codeSvv is not correct';
		      break;
		    default:
		      break;

	}
	this.setState({formError: fieldValidationErrors,
				   numCardsValid: numCardsValid,
				   nameCardValid: nameCardValid,
				   monthValid: monthValid,
				   yearValid: yearValid,
				   codeSvvValid: codeSvvValid}, this.validateForm);
}

validateForm() {
	this.setState({formValid: this.state.numCardsValid &&
							  this.state.nameCardValid &&
							  this.state.monthValid &&
							  this.state.yearValid &&
							  this.state.codeSvvValid 
	})
}

	render(){
		return(
			<div>
				
				<form className="form" onSubmit={this.onSubmit}>
				  <label>
				    <input className="inpWidth" required type="text" value={this.state.numCards} 
				    name="numCards" 
				    placeholder="Номер карты" 
				    onChange={this.onnumCardsChange} 
				    /><br/>

				    <input className="inpWidth" type="text" value={this.state.nameCard} 
				    name="nameCard" 
				    placeholder="Имя держателя карты" 
				    onChange={this.handleUserInput}
				    /><br/>

				 <div>  
				    <input style={ smallInp } className="smallInp" value={this.state.month} 
				    type="month" 
				    name="month" 
				    placeholder="Месяц" 
				    onChange={this.handleUserInput}
				    />

				    <input style={ smallInp } className="smallInp" value={this.state.year} 
				    type="year" 
				    name="year" 
				    placeholder="Год" 
				    onChange={this.handleUserInput}
				    />

				    <input style={ smallInp } className="smallInp" value={this.state.codeSvv} 
				    type="text" 
				    name="codeSvv" 
				    placeholder="SVV" 
				    onChange={this.handleUserInput}
				    />



				    <span className="curcleQues">?</span>
				
				</div>
				  </label><br/>
				  <div className="flexH2">
					  <input type="submit" value="Отправить" 
					  	disabled={!this.state.formValid}
					  />
					  <div className="trublH2">
					  <h2>Фактом оплаты вы подписываете<br/>договор аренды</h2>
					  </div>
				  </div>
				  <h3>
					  Защищено сертификатом SSL. Сфйт полностью<br/>
					  отвечает стандартом безопасности Visa и MasterCard
				  </h3>
				    
				<div className="cards">
				  <div className="visaImg"></div>	
				 
				</div>
				</form>

			</div>
		)
	}
}

export default Form