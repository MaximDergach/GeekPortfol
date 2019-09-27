import React from 'recat'

export const validateField = (fieldName, value) => {
	let fieldValidationError = this.state.formError;
	let numCardsValid = this.state.numCardsValid
	let nameCardValid  = this.state.nameCardValid
	let monthValid = this.state.monthValid
	let yearValid = this.state.yearValid
	let codeSvvValid = this.state.codeSvvValid

	switch(fieldName) {
		case 'numCards':
		  numCardsValid = value.match(/^([[\d]{4}+)\s+([\d]{4,})\s+([\d]{4,})\s+([\d]{4,})$/i);
		    fieldValidationError.numCards = numCardsValid ? '': 'number is not correct';
		      break;
		case 'nameCard':
		  nameCardValid = value.match(/^([\w.%+-]+)\s([\w.%+-]+)$/i);
		    fieldValidationError.nameCard = nameCardValid ? '' : 'name not correct';
		      break;
		case 'month':
		  monthValid = value.match(/^[0,1][0-9](\d{0})$/i);
		    fieldValidationError.month = monthValid ? '' : 'month is not correct';
		      break;
		case 'year':
		  yearValid = value.match(/^[1,2][0][0-9][0-9]$/i);
		    fieldValidationError.year = yearValid ? '' : 'year is not correct';
		      break;
		case 'codeSvv':
		  codeSvvValid = value.match(/^[0-9][0-9][0-9]$/i);
		    fieldValidationError.codeSvv = codeSvvValid ? '' : 'codeSvv is not correct';
		      break;
		    default;
		      break;

	}
	this.setState({formError: fieldValidationError,
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