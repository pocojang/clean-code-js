/**
 * Pure Function
 */

function changeValue(num) {
	num++;

	return num;
}

////////////////////////////////

const obj = { one: 1 };

// 객체, 배열 => 새롭게 만들어서 반환
function changeObj(targetObj) {
	targetObj.one = 100;

	return targetObj;
}

changeObj(obj);

obj;
