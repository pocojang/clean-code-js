/**
 * default value
 */
const required = (argName) => {
	throw new Error('required is ' + argName);
};

function createCarousel({
	items = required('items'),
	margin = 0,
	center = false,
	navElement = 'div',
} = {}) {
	// ... some code

	return {
		margin,
		center,
		navElement,
	};
}

console.log(
	createCarousel({
		margin: 10,
		center: true,
		navElement: 'span',
	}),
);
