import React, { Component, Fragment } from 'react'
import Header from './Header/header'
import Main from './Main/main'
import Footer from './Footer/footer'

class App extends Component {
	render() {
		return(
			<Fragment>	
				<Header />
				<Main />
				<Footer />
			</Fragment>
		)
	}
}

export default App