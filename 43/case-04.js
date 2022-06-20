/**
 * Object Lookup Table
 */
function getUserType(type) {
	return (
		{
			ADMIN: '관리자',
			INSTRUCTOR: '강사',
			STUDENT: '수강생',
		}[type] ?? '해당 없음'
	);
}
