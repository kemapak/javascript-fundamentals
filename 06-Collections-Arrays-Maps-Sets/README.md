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

## Queues

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


---
[Go back to ToC](../README.md)
