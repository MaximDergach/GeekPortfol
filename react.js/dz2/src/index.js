import $ from 'jquery'

$('#exemple')
	.html('Hello wep-developer & teamLeader')
	.css({
		'background':'red',
		'color': 'white',
		'fontSize': '22px',
		'padding': '15px',
		'marginTop': '40px',
		'border':'2px solid green'
	})
function example() {
	const foo = () => 'bar'

	console.log(foo())

	const arr1 = [1, 2, 3]

	const arr2 = [...arr1, 4, 5, 6, 7]//...спред оператор
}
console.log(example.toString())

import createDiv from './createDiv'

const el = createDiv('Hello Max!!!' + '\n click me ')

document.body.appendChild(el)