/**
 * void & return
 */
function handleClick() {
	return setState(false);
}

function showAlert(message) {
	return alert(message);
}

function test(sum1, sum2) {
	const result = sum1 + sum2;
}

function testVoidFunc() {
	return test(1, 2);
}

testVoidFunc();
