/**
 * default value / default parameter
 */
function createCarousel({
	margin = 0,
	center = false,
	navElement = 'div',
} = {}) {
	// ..some code
	return {
		margin,
		center,
		navElement,
	};
}

createCarousel();
