const welcomeMessage = (isLogin) => {
	const name = isLogin ? getName() : '이름없음';

	return `안녕하세요 ${name}`;
};
