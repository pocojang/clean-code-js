/**
 * 경계 다루기 (min-max)
 *
 * 1. 최소값와 최대값을 다룬다
 * 2. 최소값와 최대값 포함 여부를 결정해야한다 (이상-초과 / 이하-미만)
 * 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.
 */
function genRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
