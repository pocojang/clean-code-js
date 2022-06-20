/**
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList) {
	let temp = [];

	for (let i = 0; i < priceList.length; i++) {
		if (priceList[i] > 1000) {
			temp.push(priceList[i] + '원');
		}
	}

	return temp;
}
