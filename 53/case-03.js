/**
 * 복잡한 인자 관리하기
 */
function createCar({ name, brand, color, type }) {
	if (!name) {
		throw new Error('name is a required');
	}

	if (!brand) {
		throw new Error('brand is a required');
	}
}
