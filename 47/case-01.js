/**
 * hasOwnProperty
 */
function hasOwnProp(targetObj, targetProp) {
	return Object.prototype.hasOwnProperty.call(
		targetObj,
		targetProp,
	);
}

const person = {
	name: 'hyeonseok',
};

hasOwnProp(person, 'name');

const foo = {
	hasOwnProperty: function () {
		return 'hasOwnProperty';
	},
	bar: 'string',
};

hasOwnProp(foo, 'hasOwnProperty');
