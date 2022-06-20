/**
 * Object Lookup Table
 */
function getUserType(type) {
	if (type === 'ADMIN') {
		return '관리자';
	} else if (type === 'INSTRUCTOR') {
		return '강사';
	} else if (type === 'STUDENT') {
		return '수강생';
	} else {
		return '해당 없음';
	}
}
