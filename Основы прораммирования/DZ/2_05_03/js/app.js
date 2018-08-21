	function playGuess2() {
		var answer = parseInt(Math.random() * 100);
		
		var number = document.getElementById("numberGuess").value;
var i = 0;
		while (i < 5) {
			if (number > answer) {
				document.getElementById("scoreAnswer").innerHTML = "<div><p>Mnogo</p></div>" 
			} else if (number < answer) {
				document.getElementById("scoreAnswer").innerHTML = "<div><p>Malo</p></div>"
			} else {
				document.getElementById("scoreAnswer").innerHTML = "<div><p>WINER</p></div>"
			}


			document.getElementById("numberGuess").value = "";
			i++;
			
		}
	alert(answer)	
	}

function nextGuess() {
	
}	










/*		while(true) {
			var userAnswer = prompt("Введите число от 0 до 100, для выхода нажми q")
			if (userAnswer == "q") {
				break;
			}
			userAnswer = parseInt(userAnswer);

			if (userAnswer > answer) {
				alert("Ваше число слишком большое");

			} else if (userAnswer < answer) {
				alert("Ваше число слишком маленькое")
			} else if (userAnswer == answer) {
				alert("Вы угадали число " + answer);
				break;
			} else{
				alert("Необходимо ввести число");
			}
		}*/


		function playPuzz() {
			var score = 0;

			var answer = document.getElementById("userAnswer1").value;
			answer = answer.toLowerCase();
			if (answer == "капуста") {
				score++;
			} 

			document.getElementById("userAnswer1").value = "";

			answer = document.getElementById("userAnswer2").value;
			answer = answer.toLowerCase();
			if (answer == "петух") {
				score++;
			}

			document.getElementById("userAnswer2").value = "";

			var answer = document.getElementById("userAnswer3").value;
			answer = answer.toLowerCase();
			if (answer == "сфинкс") {
				score++;
			} 

			document.getElementById("userAnswer3").value = "";

			var answer = document.getElementById("userAnswer4").value;
			answer = answer.toLowerCase();
			if (answer == "замок") {
				score++;
			} 

			document.getElementById("userAnswer4").value = "";

			document.getElementById("result").innerHTML = "<b><i>Вы угадали " + score + " загадок</i></b>"

			score = 0;

		}
/*var question;

function userAnswer(question, answer) {

	var total = 0;



	if (question == "капуста") {
		total++;
		alert("Правильно, э-э-э +1")
	} else {
		alert("Не угадал, у-у-у +0")
	}		
	question = prompt("Не ездок, а со шпорами,Не будильник, а всех будит.")
	if (question == "петух" || question == "петушок") {
		total++;
		alert("Правильно, к-у-к-а-р-е-к-у +1")
	} else {
		alert("Не угадал,кут-куда +0")
	}
}
*/
/*		question = prompt("Лысый кот");
		question = question.toLowerCase();
		if (question == "сфинкс") {
			total++;
			alert("Правильно, М-я-я-я-у +1")
		} else {
			alert("Не угадал, фыр-фыр-фыр +0")
		}*/



/*				question = prompt("Зимой и летом одним цветом");
		
		if (question == "елка" || question == "ёлка" || question == "ель" || question == "ёлочка") {
			total++;
			alert("Правильно, дин-дон +1")
		} else {
			alert("Не угадал, бедолаго +0")
		}*/



/*
		alert("Молодец правельных ответов " + total)
		alert("КОНЕЦ")
		document.write("Правельных ответов " + total)*/