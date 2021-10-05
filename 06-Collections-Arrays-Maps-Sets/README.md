# Arrays

Array are collection of values, which are called `element``. They can be of any type, primary or object and be mixed. The position of the element in the collection is called 'index` and they are zero (0) based in JavaScript; in other words the first element's index is 0. The indexes of JavaScript are whole numbers (zero and positive integers)

In JavaScript arrays can be dynamic, they can grow or shrink. 

> Note: String are character arrays and the array methods, properties does apply to Strings.

## length
JavaScript arrays size can be determined by the `length` property.

> Note: Remember in JavaScript array length is not a function but a property of the Array prototype.

_For example_: 

```
let collection = [1, 2, 3];
let size = collection.length; // 3
// JavaScript indexes start from 0.
let firstElement = collection[0]; // 1
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
let evenOddCollection = Array.from(collection, (x) => {x = (0 === x % 2) ? 'Even' : 'Odd'; return x;});

```


---
[Go back to ToC](../README.md)
