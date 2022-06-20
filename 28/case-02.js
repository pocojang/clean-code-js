function createElement(type, height, width) {
	const element = document.createElement(type);

	element.style.height = height;
	element.style.width = width;

	return element;
}
