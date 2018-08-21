import expect from 'expect'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import React from 'react'

const increment = () => ({
	type: 'INCREMENT'
})

const decrement = () => ({
	type: 'DECREMENT'
})

const count = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
		  return state + 0.1
		case 'DECREMENT':
		  return state - 0.1
		default:
			return state
	}
}

const store = createStore(count)

const Counter = ({ 
	count, 
	onMinuseBtnClick, 
	onPluseBtnClick 
	}) => (
	<React.Fragment>

		<div>{count}</div>
		<button onClick={onMinuseBtnClick}>-</button>
		<button onClick={onPluseBtnClick}>+</button>

	</React.Fragment>
)

const rootNode = document.getElementById('root')

const render = () => {
	const count = store.getState()
	ReactDOM.render(
		<Counter 
		count={count}
		onMinuseBtnClick={() => store.dispatch(decrement())}
		onPluseBtnClick={() => store.dispatch(increment())}
		/>, 
		rootNode
	)
}	

store.subscribe(render)

render()
