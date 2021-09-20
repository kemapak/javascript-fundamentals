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

console.log(f()); // 1
console.log(f()); // 2
console.log(f()); // 3


