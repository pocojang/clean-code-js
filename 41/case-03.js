/**
 * Shorthand Properties
 * Concise Method
 * ES2015+
 */
const firstName = 'poco';
const lastName = 'jang';

const person = {
	firstName: 'poco',
	lastName: 'jang',
	getFullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};
