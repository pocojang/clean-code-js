/**
 * Callback Function
 */
function confirmModal(message, cbFunc) {
	const isConfirm = confirm(message);

	if (isConfirm && cbFunc) {
		cbFunc();
	}
}

function register() {
	confirmModal(
		'회원가입에 성공했습니다.',
		redirectUserInfoPage,
	);
}

function login() {
	confirmModal(
		'로그인에 성공했습니다.',
		redirectIndexPage,
	);
}
