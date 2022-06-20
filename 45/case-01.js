/**
 * Object.freeze
 *
 * 1. 대중적인 유틸 라이브러리 (lodash)
 * 2. 직접 유틸 함수 생성
 * 3. stackoverflow
 * 4. TypeScript => readonly
 */
const STATUS = Object.freeze({
	PENDING: 'PENDING',
	SUCCESS: 'SUCCESS',
	FAIL: 'FAIL',
	OPTIONS: {
		GREEN: 'GREEN',
		RED: 'RED',
	},
});
