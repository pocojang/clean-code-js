/**
 * Closure
 */
function log(value) {
	return function (fn) {
		fn(value);
	};
}

const logFoo = log('foo');

logFoo((v) => console.log(v));
logFoo((v) => console.info(v));
logFoo((v) => console.error(v));
logFoo((v) => console.warn(v));
