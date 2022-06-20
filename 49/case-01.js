/**
 * Optional Chaining
 */

const js = {
	name: {
		pasts: ['Mocha', 'LiveScript'],
		current: 'JavaScript',
	},
	author: 'Brendan Eich',
	birth: '1995-12-4',
	extension: '.js',
	paradigm: ['script', 'object', 'functional'],
};

if (js) {
	if (js.name) {
		if (js.name.current) {
			return js.name.current;
		}
	}
}

if (js && js.name && js.name.current) {
	return js.name.current;
}
