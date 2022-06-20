/**
 * default value
 */
function createCarousel(options) {
	options = options || {};
	var margin = options.margin || 0;
	var center = options.center || false;
	var navElement = options.navElement || 'div';

	// ..some code
	return {
		margin,
		center,
		navElement,
	};
}

createCarousel();
