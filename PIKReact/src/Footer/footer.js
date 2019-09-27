import React, { Component, Fragment } from 'react'
import FooterTop from './footerTop/index.js'
import FooyterBot from './footerBot/index.js'
class Footer extends Component {
	render() {
		return(
			<Fragment>	
				<footer>
					<FooterTop />
					<FooyterBot />
				</footer>
			</Fragment>
		)
	}
}

export default Footer