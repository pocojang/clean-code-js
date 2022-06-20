/**
 * age가 20 미만시 특수 함수 실행
 */
function getHelloCustomer(user) {
	if (user.age < 20) {
		report(user);
	} else {
		return '안녕하세요';
	}
}
