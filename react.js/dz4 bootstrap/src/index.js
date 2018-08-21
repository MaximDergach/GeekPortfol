import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const apiUrl = 'https://dog.ceo/api/breeds/image/random'
const loadingImageUrl = 'https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif'

class App extends Component {
  state = {
    dogImageUrl: '',
    loading: true
  }

  updateDogImage = async () => {
    this.setState({
      loading: true
    })

    await sleep(3000)

    const { message: dogImageUrl } = await fetch(apiUrl).then(res => res.json())

    this.setState({
      dogImageUrl,
      loading: false
    })
  }

  busyClickHandler = () => alert('Собачка уже загружается.')

  componentDidMount() {
    this.updateDogImage()
  }

  render() {
    const { dogImageUrl, loading } = this.state

    const imageUrl = loading ? loadingImageUrl : dogImageUrl
    const onClickHandler = loading ? this.busyClickHandler : this.updateDogImage

    return <img src={imageUrl} onClick={onClickHandler} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))