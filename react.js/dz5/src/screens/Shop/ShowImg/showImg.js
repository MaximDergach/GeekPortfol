import React, { Component } from 'react'
import Child from './img'


//
class ShowImg extends Component{
//проверка обработчика событий

//потом onclick переделать на картинку
		constructor() {
			super();
			this.state = {
				childVisible: false
			}
		}

	render() {
	
		return(
			<div>
				<button onClick={() => this.onClick()} className='btn-click'>кнопка</button>
				{
					this.state.childVisible ? <Child /> : null
				}
					
			</div>//
		)
	}

	onClick() {
    this.setState({ childVisible: !this.state.childVisible 	});
  }
}

export default ShowImg

