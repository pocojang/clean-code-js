/**
 * 유사 배열 객체
 */
function generatePriceList() {
	return arguments.map((arg) => arg + '원');
}

generatePriceList(100, 200, 300, 400, 500, 600);
