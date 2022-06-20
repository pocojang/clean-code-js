function createElement(type, height, width) {
	const element = document.createElement(type || 'div');

	element.style.height = String(height || 10) + 'px';
	element.style.width = String(width || 10) + 'px';

	return element;
}
