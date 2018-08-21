import React from 'react'

const errorHeaderStyle = {
  color: 'red'
}

const ErrorNotFound = () => (
  <React.Fragment>
    <h1 style={errorHeaderStyle}>Error</h1>
    <main>
      Ooops! Page does not exist!
    </main>
  </React.Fragment>
)

export default ErrorNotFound