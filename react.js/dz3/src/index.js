import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TapeUse from './components/TapeUse'
import Obj from './components/obj'

const data = new Date()

const tapeTeam = [
	{
		id: "fgh2j1h4j9=v32",
		nameSubject: "Вынос мусора",
		nameAutor: "Джо Сотриани",
		artical: `${Obj.a1}`,//создать файл obj.htlm где будет хранится массив обьекта сонтента
		data: `${data}`
	},
	{
		id: "ghn03of3==3kf3",
		nameSubject: "Как тащить в HOTS",
		nameAutor: "Майк Цукенберг",
		artical: `${Obj.a2}`,
		data: `${data}`
	},
	{
		id: "da67das6fa7yhs",
		nameSubject: "Отец Реакта.js",
		nameAutor: "Максим Абрамов",
		artical: `${Obj.a3}`,
		data: `${data}`
	},
	{
		id: "nh38n4Jids=v21",
		nameSubject: "Учёба в GeekBrains",
		nameAutor: "Константин Каплан",
		artical: `${Obj.a4}`,
		data: `${data}`
	}
]

class App extends Component {
	renderTeam = (infoArray) => infoArray.map(info => (
		<TapeUse info={info} key={info.id} />
		))

	render() {
		return (
			<div>
				{
					this.renderTeam(tapeTeam)
				}
			</div>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
