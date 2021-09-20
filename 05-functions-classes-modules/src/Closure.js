/*
	This example shows how closures work.
*/

let f = function uniqueInteger() {
	let counter = 0;

	function increament() {
		return ++counter;
	}

	return increament;
}();

console.log(f());
console.log(f());
console.log(f());


