/**
 * JavaScript의 배열은 객체다
 */
const arr = [1, 2, 3];

if (arr.length) {
	console.log('배열 확인');
}

if (typeof arr === 'object') {
	console.log('배열 확인');
}
