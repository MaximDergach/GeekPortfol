import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({
      count: this.state.count + 1
    }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))