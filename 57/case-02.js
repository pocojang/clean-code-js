/**
 * Arrow Function
 */
const user = {
	name: 'Poco',
	getName: () => {
		return this.name;
	},
	newFriends: () => {
		const newFriendList = Array.from(arguments);

		return this.name + newFriendList;
	},
};

// user.newFriends('Jang', '장')
