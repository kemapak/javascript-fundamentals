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

### Array Factory Static Methods `Array.of()` and `Array.from()`
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
## Array Static Method `isArray`
We can check if a value type is array.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

console.log(Array.isArray(collection)); // true;
console.log(Array.isArray({})); // false
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

This method only check values, not references. Therefore if 2 elements that are object types with different references if same will result in a successful search result.

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

## Subarrays

### `slice` Array Method

This method return a subarray of the collection, without changing the original array. It has 2 parameters the start (including) and end (excluding) of the slice. If second parameter is not provided it contains all the elements from the start position to the end. Negative parameters indicate the operation from the end of the array, -1 means the last element.

_For example_:

```
let collection = [1, 2, 3, 4, 5];
let result;

result = collection.slice(0, 2); // [1, 2]
result = collection.slice(2); // [3, 4, 5]
result = collection.slice(0, -1) // [1, 2, 3, 4]
result = collection.slice(-3, -1) // [3, 4]
```

### `splice` Array Method

This method adds and removes elements from an array. **This method modifies the original array.** The first argument is the start (including), the second parameter is the number (length) of elements that will be deleted. If it is not provided all the element from start to the end of the array will be deleted.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

collection.splice(2, 0); // Length is 0, deletes no elements.
console.log(collection); // [1, 2, 3, 4, 5]

collection.splice(2, 2); // deletes [3, 4]
console.log(collection); // [1, 2, 5]

collection.splice(1); // deletes [2, 5]
console.log(collection); // [1];
```

After the 2 parameter any number of arguments will be added to the array from the start position specified by the first argument.

_For example_:

```
let collection = [1, 2, 3, 4, 5];

collection.splice(2, 2, 9, 9, 9); // deletes [3, 4] and adds [9, 9, 9]
console.log(collection); // [1, 2, 9, 9, 9, 5]
```

### `fill` Array Method

This method just like the name indicated fills, initializes and array. First parameter is the value. Second optional parameter is the start position (including). The third optional parameter is the end position (excluding). If only the first parameter is provided the array fills the entire array with the first parameter's value. This method modifies the original array.

_For example_:
```
let collection = new Array(5);

collection.fill('-');
console.log(collection); // ['-', '-', '-', '-', '-']

collection.fill(9, 1, 3);
console.log(collection); // ['-', '9', '9`, '-', '-']
```

## Array Searching and Sorting

### `indexOf` and `lastIndexOf` Array methods

These methods search for element inside an array. If the element is found it returns the index, otherwise it returns `-1`. `indexOf` method searches the array from the beginning and the `lastIndexOf` method like the names indicates searches the arrays from the end. The both methods use `===` strict equal method to search for elements. So unless 2 element which are objects even identical if they have different references the methods will return `-1`.

The second parameter is optional and denotes the search start index.

_For example_:

```
let collection = [1, 2, 3, 3, 5];
let resultIndex;

resultIndex = collection.indexOf(3); // 2
resultIndex = collection.indexOf(6); // -1
resultIndex = collection.indexOf(3, 3); // 3
```

If we want to just compare the values, we need to use the `find` or `findIndex` methods explained earlier in this section.

### `includes` Array Method

This method check if an element is part of an array. It returns true or false.

_For example_:

```
let collection = [1, 2, 3, 3, 5];
let result;

result = collection.includes(5); // true
```


### `sort` Array Method

As the name indicates this method sorts array elements. It does change the original array. By default it first converts and then sorts the elements alphabetically. 

For elements that are objects we need to pass **comparator** method (check design patterns).
- If the first element is larger then then second return 1
- If the first element is smaller then then second return -1
- If the first element is equal to the second element return 0

_For example_:

```
let collection = [1, 5, 3, 2, 4];
collection.sort(); // [1, 2, 3, 4, 5]

let itDepartmentStuff = ... // Assume collection of personel.

itDepartmentStuff.sort( (firstPerson, secondPerson) => {
	if (firstPerson.level > secondPerson.level) {
		return 1;
	}
	
	if (firstPerson.level < secondPerson.level) {
		return -1;
	}
	
	// They are equal.
	return 0;
});
```

### `reverse` Array Method

This method reverses an array, changes the original array.

_For example_:

```
let collection = [1, 2, 3, 3, 5];

collection.reverse(); // [5, 4, 3, 2, 1]
```

## Array to String Conversion

### `join` Array Method

We can easily convert an array to a String using the `join` method. This method is the opposite of String.split(parameter) method. Just like the `split` method we can provide a character as parameter.

_For example_:

```
let collection = [1, 2, 3, 3, 5];
let text;

text = collection.join(); // '1,2,3'
text = collection.join(''); // '123'
text = collection.join('-'); // '1-2-3'
```

### `toString` Array Method

This method is same as the `join` method but does not take parameters.

_For example_:

```
let collection = [1, 2, 3, 3, 5];
let text;

text = collection.toString(); // '1,2,3'
```

# Sets

Sets are collections, there are several major difference with array. Every element in a set is unique. It is not ordered (no indexes). Just like array element can be any type.

## Creation

We can create/instantiate a set by the `new` operator.

_For example_:

```
let exampleSet = new Set();
let memberSet = new Set({name: Joe}, {name: Jane});
```

## `size`
We can get the length of the set by the `size` property.

_For example_:

```
let exampleSet = new Set();
exampleSet.size; // 0

let memberSet = new Set({name: Joe}, {name: Jane});
memberSet.size(); // 2
```

## Adding, Removing Elements

We can use the `add` to add elements to a set. Please note if the element exits it will be ignored, since duplicates are not allowed in sets. If we want to remove an element from our set we can use `delete` method. If `delete` cannot find element to remove it will return false, otherwise if it find the element, it will delete and then will return true. Both these method takes a single parameter.

## Clearing All Elements

We can use the `clear` method to remove all the elements from a set.

_For example_:

```
let memberSet = new Set({name: Joe}, {name: Jane});
memberSet.size(); // 2

memberSet.clear();
memberSet.size(); // 0
```

## Verifying Membership

We can check if variable, value is a member of a set by using `has` method. If it finds the element returns true, otherwise returns false. Set uses strict equal `===` operator to check if an element exists. Therefore checking object will return false unless both objects has same references.

_For example_:

```
let memberSet = new Set({name: Joe}, {name: Jane}, 2, 4);

memberSet.has(2); // true
memberSet.has(5); // false
memberSet.has({name: Joe}); // false, this is object has different reference then the one in our set, so `===` will return false.
```

## Iteration

We can use the `for/of` loops or `forEach` methods same as arrays.

## Array Conversion

We can convert our sets to arrays by using the spread operator `...` or `Array.from` method.

# Maps
Maps are objects with key and value pairs. In other words they are hash maps. They are extremely fast for looking up values, and are used accordingly not only in JavaScript but many programming languages. Most of the Map and Set methods are the same.

## Creation

We can create/instantiate a map by the `new` operator. We can pass key value pairs, we can pass another map, we can pass object entries.

_For example_:

```
let exampleMap = new Map();
exampleMap = new Map(['key01', 1], ['key02, 'sun']);

let copyMap = new Map(exampleMap);

let sampleObject = {key01:, 1, key02: 'sun'};

let objectMap = new Map(Object.entries(sampleObject)); // ['key01', 1], ['key02, 'sun']

```

## `size`
We can get the length of the map by the `size` property.

_For example_:

```
let exampleMap = new Map();
exampleSet.size; // 0

let memberMap = new Map(['x', 1], ['y', 2]);
memberMap.size(); // 2
```

## Adding, Fetching and Removing Elements

We can use the `set` to add elements to a set. Please note if the element key exits its value will be updated. If want to fetch a value we can use `get` passing the key. If we want to remove an element from our set we can use `delete` method. If `delete` cannot find element to remove it will return false, otherwise if it find the element, it will delete and then will return true. These method takes a single parameter.

_For example_:

```
let exampleMap = new Map();
exampleMap.set('key01', 1);
exampleMap.size; // 1

exampleMap.get('key01'); // 1
exampleMap.get('key221'); // undefined

exampleMap.delete('key01'); // true

exampleMap.size; // 0
```

## Clearing All Elements

We can use the `clear` method to remove all the elements from a map.

_For example_:

```
let memberMap = new Map(['x', 1], ['y', 2]);
memberMap.size(); // 2

memberMap.clear();
memberMap.size(); // 0
```

## Verifying Membership

We can check if variable, value is a member of a map by using `has` method. If it finds the elements key returns true, otherwise returns false. 

_For example_:

```
let memberMap = (['Joe', 35], ['Jane', 30]);

memberMap.has('Joe'); // true
memberMap.has('John'); // false
```

## Iteration

We can use the `for/of` loops or `forEach` methods same as arrays. We use `key, value` values when iteration through the `for/of` loop.

_For example_:

```
let memberMap = (['Joe', 35], ['Jane', 30]);

for (let [key, value] of memberMap) {
	console.log(key + ' - ' + value);
}

memberMap.forEach((value, key) =>{
	console.log(key + ' - ' + value);
});
```

## Array Conversion

We can convert our maps to arrays by using the spread operator `...` or `Array.from` method.

---
[Go back to ToC](../README.md)
