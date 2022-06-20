/**
 * 배열 고차 함수
 *
 * 1. 원화 표기
 */

const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList) {
	let temp = [];

	for (let i = 0; i < priceList.length; i++) {
		temp.push(priceList[i] + '원');
	}

	return temp;
}
