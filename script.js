
function getRandomArbitrary(min, max) {
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getAnswer = function () {
	let userNum = prompt('Загадывание случайного числа от 1 до 100');
	let randomNum = getRandomArbitrary(1, 100);

		const conditions = function(userNum, randomNum) {
		 if (userNum === null) {
			return "Игра окончена";
		}	else if (isNaN(userNum) || userNum === "") {
			return "Введи число!";
		} else if (userNum > randomNum) {
			return "Загаданное число меньше";
		} else if (userNum < randomNum) {
			return "Загаданное число больше";
		} else if (userNum === randomNum) {
			return "Поздравляю, Вы угадали!!!";
		}
	}

	return conditions(userNum, randomNum)
}

alert(getAnswer());
