function getElements() {
	const result = {
		title: document.querySelector('.title'),
		text: document.querySelector('.text'),
		value: document.querySelector('.value'),
	};

	return result;
}

function getDateTime(targetDate) {
	let month = targetDate.getMonth();
	let day = targetDate.getDate();
	let hour = targetDate.Hours();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;
	hour = hour >= 10 ? hour : '0' + hour;

	return;
}

function genRandomNumber(min, max) {
	const randomNumber = Math.floor(Math.random() * (max + 1) + min);
}
