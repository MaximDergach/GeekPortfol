import './example.css'
import avatar from './avatar.png'

function createDiv(body) {
  const div = document.createElement('div')
  const img = document.createElement('img')

  div.innerHTML = body
  div.classList.add('example')

  img.src = avatar

  div.appendChild(img)

  div.onclick = () => console.log(avatar)

  return div
}

export default createDiv
