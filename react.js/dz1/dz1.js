function loop({times = 0, callback = null}) {
	for(let i = 0; i > times; i++) {
		callback(times)
	}
}

callback = function(times){
	console.log()
}