class Parent {
	parentMethod() {
		console.log('parentMethod');
	}

	parentMethodArrow = () => {
		console.log('parentMethodArrow');
	};

	overrideMethod = () => {
		return 'Parent';
	};
}

class Child extends Parent {
	childMethod() {
		super.parentMethod();
	}

	overrideMethod() {
		return 'Child';
	}
}

new Child().childMethod();
new Child().overrideMethod();
