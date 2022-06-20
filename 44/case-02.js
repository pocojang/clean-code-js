function Person({ name, age, location }) {
	this.name = name;
	this.age = age;
	this.location = location;
}

const poco = new Person({
	name: 'poco',
	age: 30,
	location: 'korea',
});
