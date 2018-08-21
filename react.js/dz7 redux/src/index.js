import { combineReducers,createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

const addChildren = text => ({
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


const todos = (state = [], action) => {//редюсеры
	switch(action.type) {//принимает состояние и экшин
		case 'ADD_TODO':
		const lastTodo = state[0]

		  return [//на выходе даёт новое состояние
		  {
		  	id: lastTodo ? lastTodo.id + 1 : 0,
		  	text: action.text,
		  	isDone: false
		 },
		  ...state
		  
	  ]
	  case 'TOGGLE_TODO':
	  return state.map(todo => {
	  	if(todo.id !== action.id) return todo

	  	return {
	  		...todo,
	  		isDone: !todo.isDone
	  	} 
	  })
	  default:
	   return state
	}
}

const filter = (state = 'SHOW_ALL', action) => {
	if(action.type === 'SET_FILTER') {
		return action.filter
	}

	return state
}

const rootReducer = combineReducers({//для комбенирование редюсеров
	todos,
	filter
})

const store = createStore(rootReducer)//создаиие истории

//--------------------------------//
const asses = () => {
<div>
	<select name="hero">
	    <option>1</option>
	    <option>2</option>
	    <option>3</option>
	    <option>4</option>
	    <option>5</option>
   </select>
</div>
}
const Todo = ({ text, onClick, isDone }) => (
	<div onClick={onClick} style={{ textDecoration: isDone ? 'line-through' : 'none',
		 color:isDone ? 'grey' : 'black'
	 }}>
		{text}
	</div>
)
//тут 
const TodoList = ({ todos, onTodoClick }) => (
	<div>
		{
			todos.map(todo => (
			<Todo 
				{...todo} 
				key={todo.id}
				onClick={() => onTodoClick(todo.id)}
			/>
			))
		}

	</div>
)

const AddTodoForm = ({ onAddButtonClick }) => {
let input	
let inputName = input
let inputSecondName = input

	return (
		<div>
			<input 
				ref={ref => inputName = ref}
				placeholder='Имя'
			/>

			<input 
				ref={ref => inputSecondName = ref}
				placeholder='Фамилия'
				style={{margin: '10px'}}
	
			/>	

			<button onClick={event =>{
				event.preventDefault()

				onAddButtonClick(inputName.value + ' ' + inputSecondName.value)

				inputName.value = ''
				inputSecondName.value = ''
			}}>
				Добавить ученика
			</button>
		</div>
	)
}


//ага

const App = ({ addChildren, todos, toggleTodo, filter, setFilter }) => (
	<React.Fragment>
		<AddTodoForm 
			onAddButtonClick={addChildren}
		/>

		<TodoList 
					todos={todos}
					onTodoClick={toggleTodo}
				/>


		
		
	</React.Fragment>
)
//ага
const root = document.getElementById('root')

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
		  return todos
		case 'SHOW_DONE':
		  return todos.filter(todo => todo.isDone)
		case 'SHOW_NOT_DONE':
		  return todos.filter(todo => !todo.isDone)
		default:
		  return todos
	}
}

const render = () => {
	const state = store.getState()//текущий стейт
	const { filter } = state
	const todos = getVisibleTodos(state.todos, filter)
	
	ReactDOM.render(
	<App 
		todos={todos}
		filter={filter}
		addChildren={text => store.dispatch(addChildren(text))}
		toggleTodo={id => store.dispatch(toggleTodo(id))}
		setFilter={filter => store.dispatch(setFilter(filter))}
	/>,
	root
	 )
}
console.log()
store.subscribe(render)

render()