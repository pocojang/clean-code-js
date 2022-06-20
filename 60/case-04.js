const arr = [1, 2, 3, 'A', 'B', 'C'];

function isTypeOf(type) {
	return function (value) {
		return typeof value === type;
	};
}

const isNumber = isTypeOf('number');
const isString = isTypeOf('string');

arr.filter(isNumber);
arr.filter(isString);
