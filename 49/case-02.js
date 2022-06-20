/**
 * Optional Chaining
 */

const js = {
	version: [
		{
			name: '1st & 2nd',
			birth: '1998-10',
		},
		{
			name: '3rd',
			birth: '2000-11',
		},
		{
			name: '5th',
			birth: '2010-07',
		},
	],
	name: {
		pasts: ['Mocha', 'LiveScript'],
		current: 'JavaScript',
	},
	author: 'Brendan Eich',
	birth: '1995-12-4',
	extension: '.js',
	paradigm: ['script', 'object', 'functional'],
};

if (js.version && js.version.length > 0) {
	return js.version[0].name;
}
