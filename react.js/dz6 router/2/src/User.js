import React from 'react'

const User = (props) => (
	<React.Fragment>
		{console.log(props)}
		<main>
			Hello, {props.match.params.user}!
		</main>
	</React.Fragment>
)
export default User
