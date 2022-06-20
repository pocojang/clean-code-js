/**
 * Closure
 */
someElement.addEventListener(
	'click',
	debounce(handleClick, 500),
);

someElement.addEventListener(
	'click',
	throttle(handleClick, 500),
);
