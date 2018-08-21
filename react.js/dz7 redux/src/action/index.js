import React from 'react'



export default {
	render() {
		return(
const addTodo = text => ({
	type: 'ADD_TODO',//экшин что он должен делать
	text
})

const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

const setFilter = filter => ({
	type:'SET_FILTER',
	filter
})
		)
	}
}