import React, {Component} from 'react'

class PayForm extends Component{
	constructor(props){
		super(props);
		this.state = {numCards:'', nameCard:'', month:'', year:'', codeSvv: ''};

		this.onnumCardsChange = this.onnumCardsChange.bind(this);
		this.onnameCardsChange = this.onnameCardsChange.bind(this);
		this.onmonthChange = this.onmonthChange.bind(this);
		this.onyearChange = this.onyearChange.bind(this);
		this.oncodeSvvChange = this.oncodeSvvChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(event) {
		console.log(`${this.state.nameCard}, Работает!!!`);
		event.preventDefault();
	}

	oncodeSvvChange(event) {
		this.setState({ codeSvv: event.target.value })
	}

	onyearChange(event) {
		this.setState({ year: event.target.value })
	}

	onmonthChange(event) {
		this.setState({ month: event.target.value })
	}

	onnameCardsChange(event) {
		this.setState({ name: event.target.value })
	}
	onnumCardsChange(event) {
		this.setState({ numCards: event.target.value })
	}
}


export default PayForm