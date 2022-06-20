/**
 * Object Lookup Table
 */
function getUserType(type) {
	switch (key) {
		case 'ADMIN':
			return '관리자';
		case 'INSTRUCTOR':
			return '강사';
		case 'STUDENT':
			return '수강생';
		default:
			return '해당 없음';
	}
}
