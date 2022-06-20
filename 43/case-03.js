/**
 * Object Lookup Table
 */
function getUserType(type) {
	const USER_TYPE = {
		ADMIN: '관리자',
		INSTRUCTOR: '강사',
		STUDENT: '수강생',
	};

	return USER_TYPE[type] || '해당 없음';
}
