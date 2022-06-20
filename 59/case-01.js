/**
 * Pure Function
 */
let num1 = 10;
let num2 = 20;

function impureSum1() {
	return num1 + num2;
}

function impureSum2(newNum) {
	return num1 + newNum;
}

function pureSum(num1, num2) {
	return num1 + num2;
}

pureSum(10, 20);
pureSum(10, 20);
pureSum(10, 20);
pureSum(30, 100);
pureSum(30, 100);
