function add(num1) {
	return function sum(num2) {
		return num1 + num2;
	};
}

const addOne = add(1);
const addTwo = add(2);
