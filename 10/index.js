var global = 0;

function outer() {
	console.log(global);
	global = 5;

	function inner() {
		var global = 10;

		console.log(global);
	}

	inner();

	global = 1;

	console.log(global);
}

outer();

function duplicatedVar() {
	var a;

	console.log(a);

	var a = 10;

	console.log(a);


  const str = new String('string')
const num = 123
const bool = true
const nul = null
const und = undefined
const sym = Symbol('sym')

console.log(str instanceof String);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof nul);
console.log(typeof und);
console.log(typeof sym);




const obj = {
  name: 'js',
	spec: 'clean',
}
const arr = [1, 2, 3]
const func = function() {
	return 'function'
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);
