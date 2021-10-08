# Arrays

Array are collection of values, which are called `element`. They can be of any type, primary or object and be mixed. The position of the element in the collection is called 'index` and they are zero (0) based in JavaScript; in other words the first element's index is 0. The indexes of JavaScript are whole numbers (zero and positive integers)

In JavaScript arrays can be dynamic, they can grow or shrink. 

> Note: Strings are character arrays and the array methods, properties does apply to Strings.

## length
JavaScript arrays size can be determined by the `length` property. Since JavaScript arrays are start from 0 (zero) the length is the largest index + 1.

> Note: Remember in JavaScript array length is not a function but a property of the Array prototype.

_For example_: 

```
let collection = [1, 2, 3];
let size = collection.length; // 3
// JavaScript indexes start from 0.
let firstElement = collection[0]; // 1
```

> Note: If you set the length property of an array it will enlarge the array if it is larger than the current index, if it is smaller than the current index it will delete elements.

_For example_:

```
let collection = [1, 2, 3, 4, 5];
console.log(collection.length); // 5

collection.length = 100; // Enlarge the array.
console.log(collection.length); // 100

collection.length = 2; // Delete 98 elements, [1, 2]

collection.length = 0; // Delete all the elements.
```

## Methods
Arrays have quite a bit number of methods, which we can use, and will use to handle both Node and UI layer code.

// TODO Add link to array methods.

## Creating and Instantiating Arrays
We can create and instantiate arrays in several ways.

### Array Literals
We can create an array by defining with square brackets `[]`.

_For example_:

```
// We can initialize an array without any elements.
let emptyCollection = [];

// Arrays can consist of mixed typed elements even undefined elements, the last element is empty.
let collection = [1, 2, 3, true, {name: 'John Doe'}, 5, 'a', ,];

let size = collection.length = 8;
let lastElement = collection[7]; // Undefined.

// Arrays can consist of other arrays.
let coordinates = [[1, 2], [3, 4], [5, 6]];
```

### Spread Operator
We can use spread operator to include the elements of one array within another array.

_For example_:

```
let shortArray = [4, 5];

// [1, 2, 3, 4, 5, 6, 7]
let longArray = [1, 2, 3, ...shortArray, 6, 7];
```

Spread operator can be used to create a copy/clone of an array.

_For example_:

```
let original = [a, b, c];

// Copy is completely a different array.
let copy = [...original];
```

We can even convert a string to an array.

_For example_:

```
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'p', 't']
let words = [...'JavaScript'];
```

### Array Constructor
We can create arrays with array constructor, it is exactly has the same output with one difference, you can specify initial size of an array compare to creating with a literal.

_For example_:

```
let emptyArray = new Array();

let emptyArraySize10 = new Array(10);
```

Just like the literal arrays creation, the array constructor can create an array with elements, even different types.

_For example_:

```
let collection = new Array(0, 1, 2, 'Hi', {name:'John Doe'}, 5, 6, true);
```

> Note: One side effect or limitation of array constructor is you cannot create and initialize a single element collection.

_For example_:

```
// You cannot create an array with one element value 4, [4].
let collection = new Array(4); // Creates an array of size 4.
```

### Array Factory Methods `Array.of()` and `Array.from()`
Array factory methods are extremely useful when we want to convert a literal (prime or object) to an arrays, or copying/cloning an array. These methods are also very useful when working with `Sets` and `Maps` which we will discuss shortly.

_For example_:

```
let emptyCollection = Array.of(); // [];
let collection = Array.of('Hello World!'); // ['Hello World!']
let smallCollection = Array.of(1, 2, 3); // [1, 2, 3]
```

`Array.of()` factory method can even overcome creating a single value collections, the array constructor can not.

_For example_:

```
let collection = Array.of(4); // [4];
let anotherCollection = new Array(4); // Creates an empty array of size 4.
```

We can easily copy/clone an array like we did with the spread operator.

_For example_:

```
let collection = [1, 2, 3, 4];
let clone = Array.from(collection);
```

We can even provide a function as a second optional parameter to the `Array.from()` factory method to map the values of the new array. 

> Note: Second optional function parameter acts like a map, does not change the size of the array.

_For example_:

```
let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Returns ['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even'].
let evenOddCollection = Array.from(collection, (x) => {let numberType = (0 === x % 2) ? 'Even' : 'Odd'; return numberType;});
```

## Multi Dimensional Arrays

Array elements can be arrays. 

_For example_:

```
let matrix = [[1, 2], [3, 4]];
console.log(matrix[0][1]); // 2
```

## Setting and Reading Array Elements
We can easily assign values, and read the values from array elements.

_For example_:
```
let collection = new Array();

// Set the value of the first element to 1.
collection[0] = 1; 

// 6, read the value and add 5.
let value = collection[0] + 5;

// Loop through the collection and print the values.
for (let index = 0, collectionSize = collection.length; index < collectionSize; index++) {
	console.log(collection[index]);
}
```

> Note: If an array element is not set, when we try to read it we will get `undefined` value.

_For example_:
```
let collection = [1, 2, 3, ,5];

// Undefined we do not have 11 elements, 10 indexed element does not exists.
console.log(collection[10];

// Undefined, even the element is created but not initialized.
console.log(collection[3]);
```

> Note: Arrays are objects, so if you provide a string value, or not a whole number, it will add it as a property to the object.

_For example_:

```
let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// This will add the property `name` to the collection not another element!
collection['name'] = 11;
```

## Sparse Arrays

If array length property is larger then the elements inside an array, we called it sparse array. We can check if an index has an element with the `in` operator. If an index does not have a value set, it will be `undefined`;

_For example_:

```
let collectionOne = [1, 2, , , 5];
let is3rdElementExist = 2 in collectionOne; // false
let is1stElementExist = 0 in collectionOne; // true

let collectionTwo = new Array(100); 
console.log(collectionTwo[2]); // undefined

let collectionThree = [];
colloctionThree[99] = 'The 100th index is the only element';
```

## Stack and Queues

If we want to use an array as a queue, we can utilize the methods below. Lets assume we have array `let a = [1, 2, 3];`

| Method    | Description | Example |
| :---:     | :---        | :---    |
| `push`    | Adds an element to the end of an array, same as `a[a.length] = value`. | `a.push(4);` |
| `pop`     | Removes the last element from an array. | `a.pop()` |
| `unshift` | Adds an element to the beginning of an array. | `a.unshift('k');` |
| `shift`   | Removes the first element of an array and returns the value. | `a.shift(); // Returns 'k'.` |

## Adding and Deleting Array Elements

In the previous examples we saw that we can set an array element value `collection[2] = 357;`, which adds it. Also we saw that setting the length property can delete the elements `collection.length = 0;`.

We can delete an element from an array with the `delete` operator. Please note, this does not remove the index, just deletes the value of that indexed element.

_For example_:

```
let collection = [1, 2, 3];
delete collection[1]; // [1, ,3]
console.log(collection.length); // It is still 3.
```

We will talk about one more method which add, deletes and replaces array element later. Which is called `splice`

## Array Iteration

### `for` Loop

Since arrays indexed we can iterate them using `for` loops.

_For example_:

```
for (let index = 0, collectionSize = collection.length; index < collectionSize; index++) {

	// Skip undefined elements in sparse arrays.
  if (undefined === collection[index]) {
	  continue;
  }
  
  console.log(collection[index]);
}
```

> Note: For static sized arrays it is better to create a max length variable in the initialization section of the for loop. Otherwise, since JavaScript is dynamic, collection.length property will be evaluated for each loop.

### `for/of` Loop
We can also use `for/of` loops. These loop does not use index directly and iterate through the elements of an array show below.

_For example_:

```
for (let element of collection) {

	// Skip undefined elements in sparse arrays.
  if (undefined === element) {
	  continue;
  }
  
	console.log(element);
}
```

If we want to use indexes while using `for/of` loop, we can utilize `entries` method of array.

_For example_:
```
for (let [index, element] of collection.entries()){

	// Skip undefined elements in sparse arrays.
  if (undefined === element) {
	  continue;
  }
  
	console.log(index, element);
}
```

### `forEach` Array Method
We can also use `forEach` method, which we can pass a function as a parameter (Usually an arrow function) that operates on each element of the array.

_For example_:
```
collection.forEach(element => {
	console.log(element);
});
```

> Note: `forEach` method skips empty elements, so we do not need to handle it ourselves.

> Note: The function we use as parameter `forEach` array method has one required parameter **element value** and can optionally accept two more parameters, **index** and **array** itself. 

_For example_:

```
collection.forEach((elementValue, index, collection) => {
	console.log(elementValue + '-' + collection[index]);
});
```

Unless we pass the array and modify it inside our arrow function, `forEach` does not modify the array.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

collection.forEach( x => x * x);

console.log(collection); // [1, 2, 3, 4, 5]
```

### `map` Array Method

`map` method is very similar to `forEach` but it returns a new array and does not modify the original array. Unless we assign the array to itself.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

let resultCollection = collection.map( x => x * x);

console.log(collection); // [1, 2, 3, 4, 5]
console.log(resultCollection); // [1, 4, 9, 16, 25]

collection = collection.map(x => x + 1); // [2, 3, 4, 5, 6]

```

> Note: Just like the `forEach` method, `map` method will skip undefined elements.

### `filter` Array Method
`filter` method returns a subset of the array elements. The function we pass as parameter has to return true or false evaluating each element.

> Note: Just like the `forEach` and `map` method `filter` does not modify the original array and skips the undefined elements.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

let resultCollection = collection.filter(x => x < 3);

console.log(collection); // [1, 2, 3, 4, 5]
console.log(resultCollection); // [1, 2]
```

A handy use of filters is to convert a sparse array to a dense array.

_For example_:

```
let sparse = [1, ,2, , ,3];
let dense = sparse.filter(() => true); // [1, 2, 3]
```

### `find` and `findIndex` Array Methods

The `find` method, stops after the its function parameter find a matching element value. It will return the element value if true, otherwise it will return undefined.

The `findIndex` method is very similar to the `find` method but it returns the index if there is match, otherwise it will return `-1` .

Both methods only find the first occurrence and then stop.

_For example_:

```
let collection = [1, 2, 3, 4, 5];
let result;

result = collection.find(x => x < 3); // 1
result = collection.find(x => x > 5); // undefined

result = collection.findIndex(x => x < 3); // 0
result = collection.find(x => x > 5); // -1
```

### `every` and `some` Array Methods

These methods return true or false depending the result of the function parameter they pass. `every` expects that every element passes the condition inside the function, and `some` expects some elements to pass the condition inside the function parameter.

> Note: Similar to the previous methods `every` and `some` array methods skip undefined elements.

_For example_:

```
let collection = [1, 2, 3, 4, 5];
let result;

result = collection.every(x => x < 3); // false
result = collection.every(x => x < 6); // true

result = collection.some(x => x < 3); // true
result = collection.some(x => x > 5); // false
```

> Note: `every` method iteration stops when the first false result is found. `some` method iteration stops when the first true result is found.

### `reduce` and `reduceRight` Array Methods

As the name indicates these methods apply and logic to its elements and combine them. `reduce` method iterates from the start of the array (first element) and reduceRight` from the end of the array (last element). They both accept an optional initial value parameter that the reduction will start. The function parameter has to parameters to compare the array elements.

_For example_:

```
let collection = [1, 2, 3, 4, 5];
let result;

// Returns the larget element in the collection.
result = collection.reduce((x, y) => (x > y) ? x : y); // 5

// With optional initial value parameter.
result = collection.reduce((x, y) => (x > y) ? x : y, 100); // 100

// Emtpy array.
result = [].((x, y) => (x > y) ? x : y); // Type Error
```

### `flat` and `flatMap` Array Methods

As the name indicates these method flatten multi dimensional arrays. The `flat` method has an optional parameter that indicated flattening level, the default is `1`.

`flatMap` method is the combination of `flat` and `map` methods. `collection.map(functionParam).flat();`. It maps its elements first with the passed function parameter logic. After this it flattens the array.

_For example_:
```
let collection = [[1, 2], [3, [4]]];
let result;

result = collection.flat(); // [1, 2, 3, [4]]
result = collection.flat(2); // [1, 2, 3, 4]
```

## Adding Arrays with 'concat' Array Method and the `...` spread operator

We can easily add to arrays via the spread operator or the concat method.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

result = [...collection, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]

result = collection.concat(6, 7); // [1, 2, 3, 4, 5, 6, 7]
```

> Note: `concat` method is very expensive. Use spread operator or other methods to add an array.

---
[Go back to ToC](../README.md)
