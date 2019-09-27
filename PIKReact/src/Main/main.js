import React, { Component, Fragment } from 'react'
import Content from './Content/content'
import Form from './Form/form'


class Main extends Component {
	render() {
		return(
			<Fragment>
			<section>
				<Content />
				<Form />
			</section>	
			</Fragment>
		)
	}
}

export default Main