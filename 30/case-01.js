function helloWorld(message) {
	if (!message) {
		return 'Hello! World';
	}

	return 'Hello! ' + (message || 'World');
}

function helloWorld(message) {
	return 'Hello! ' + (message || 'World');
}
