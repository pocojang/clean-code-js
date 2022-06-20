/**
 * 배열 고차 함수 => 체이닝
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ['2000', '1000', '3000', '5000', '4000'];

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
	const isOverList = priceList.filter(isOverOneThousand);
	const sortList = isOverList.sort(ascendingList);

	return sortList.map(suffixWon);
}
