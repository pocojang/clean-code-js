function getActiveUserName(user, isLogin) {
	if (isLogin && user) {
		if (user.name) {
			return user.name;
		} else {
			return '이름없음';
		}
	}
}
