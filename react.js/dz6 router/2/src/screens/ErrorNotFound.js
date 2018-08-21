import React from 'react'

const errorHeaderStyle = {
  color: 'red'
}

const ErrorNotFound = () => (
  <React.Fragment>
    <h1 style={errorHeaderStyle}>Error</h1>
    <main>
      О-О-У что то не работает
    </main>
  </React.Fragment>
)

export default ErrorNotFound