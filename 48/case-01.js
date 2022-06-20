/**
 * 직접 접근 지양하기
 * 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱
 */
// 직접 접근 지양
const model = {
	isLogin: false,
	isValidToken: false,
};

// model에 대신 접근
function setLogin(bool) {
	model.isLogin = bool;
	serverAPI.log(model.isLogin);
}

// model에 대신 접근
function setValidToken(bool) {
	model.isValidToken = bool;
	serverAPI.log(model.isValidToken);
}

// model에 직접 접근 X
function login() {
	setLogin(true);
	setValidToken(true);
}

// model에 직접 접근 X
function logout() {
	setLogin(false);
	setValidToken(false);
}

someElement.addEventListener('click', login);
