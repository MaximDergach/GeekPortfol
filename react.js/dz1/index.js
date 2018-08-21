const fullName = [ 'Maxim'+' '+ 'Dergach' ]
	console.log(fullName)
const [ firstName, lastName ] = fullName

console.log(lastName +' '+ firstName +' '+fullName)
//--//
function calSpeed({distanse, time, maxSpeed = 100, callback }) {
	const speed = distanse / time

	if (speed > maxSpeed) {
		console.log('Скорость что то высока')
	}
	callback(speed)
}
const numb1 = parseInt(Math.round(Math.random() * 100))
const numb2 = parseInt(Math.round(Math.random() * 100))
console.log(numb1 + ' / ' + numb2)
calSpeed({	numb1: `${numb1}`,
 			numb2: `${numb2}`, 
 			callback: function(speed) {
 				console.log(speed)
 			}})