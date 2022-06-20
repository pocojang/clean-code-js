/**
 * Arrow Function
 */
const user = {
	name: 'Poco',
	getName: () => {
		return this.name;
	},
};

user.getName();
