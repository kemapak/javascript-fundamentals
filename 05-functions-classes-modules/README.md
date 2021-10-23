# Functions

Functions are the reusable blocks of code in JavaScript as well as many other languages. They are similar to constructs, procedures. They can accept parameters that act like local variables to functions. 

Since JavaScript is a prototype based language (More on prototypes) functions acted as both classes, methods and functions. This is a bit confusing but today JavaScript has native classes, and has very similar structure to current object-oriented languages.

## Defining Functions
There are two ways we can define a function.

_For example_:
```
function add(numberOneParam, numberTwoParam) {
  return numberOneParam + numberTwoParam;
}
```

### Function Declarations
We can declare a function by the `function` keyword then the function name followed by parenthesis `()`, include 0 or more parameters followed by curly braces `{}` where the code block resides. 

> Note: The curly braces are optional for single line function statements, but I highly recommend avoiding this style of coding that could cause unexpected issues.

_For example_:
The first example can be written as follows, but you should never do this, even it is syntactically legal.
```
// Anti-pattern do not code like this.
function add (numberOneParam, numberTwoParam) return numberOneParam + numberTwoParam;
```

### Function Expressions
Functions can be defined as expressions as well.

- First, by assigning a variable to a function.

_For example_: 
```
const add = function(numberOneParam, numberTwoParam) {
  return numberOneParam + numberTwoParam;
}
```

- Second, if a function is part of a class or object, it is called a method, and we can define it as below.

_For example_: 
```
class MathUtil {

  add: function(numberOneParam, numberTwoParam) {
    return numberOneParam + numberTwoParam;
  }
}
```

- Third, we can use the shorthand notation for defining a method.

_For example_:
```
class MathUtil {

  add(numberOneParam, numberTwoParam) {
    return numberOneParam + numberTwoParam;
  }
}
```

> Note: Constructors are special kind of methods that are used to initialize a class or object instance.

> Note: Also getters and setters are special kind of methods that we can use to get and set class fields.

_For example_:
```
class Person {
	
  #name;
	
  get name() {
    return this.#name;
  }

  constructor(nameParam) {
    this.#name = nameParam;
  }
}
```

- Fourth type of defining a method is we define an anonymous functions. These are called Lambda functions and does not have an identifier, name. We usually use them to pass a function to another function/method.

> Note: In JavaScript we can pass function as parameters to other functions as well.

_For example_:
```
// Sorting array of ojbects.
let items = [
  {
    name: 'Chair',
    quantity: 33
  },
  {
    name: 'Table',
    quantity: 7
  },
];
	
items.sort(function(firstObject, secondObject) {

  // Ignore upper and lowercases.
  let nameA = firstObject.name.toUpperCase(); 
  let nameB = secondObject.name.toUpperCase(); 
  
  if (nameA < nameB) {
		return -1;
  }
  
  if (nameA > nameB) {
		return 1;
  }

  // Names must be equal.
  return 0;
});
```

- Fifth type of defining a function is new to JavaScript, and it is called **Arrow Functions**. It is usually used for Lambda functions or functions with small code blocks. 

_For example_:
```
let add = (numberOneParam, numberTwoParam) => {
  return numberOneParam + numberTwoParam;
}

// If we have a single statement it is OK to ignore the curly braces '{}'.
let add = (numberOneParam, numberTwoParam) => return numberOneParam + numberTwoParam;

// If we have a single parameter we can ignore the paranthesis.
let square = numberParam => return numberParam * numberParam;

// But if we do not have any parameters we must have parenthesis.
let createContainer = () => {
 let container = document.createElement('div');
 container.setAttribute('class', 'container');
 return container;
} 
```

## Function properties
Functions are objects and since we used to use them to create classes there is an interesting behavior of functions. We can add properties to them, either fields or other functions. This technique was used to create a namespaces as well, which should be avoided.

>Note: Use class only all create classes, and do not use functions or objects. Refactor your code is you see these.

## This keyword

In old days we used functions and objects are classes. In that context `this` keyword indicated the reference where the function was invoked. In today's JavaScript this does refer to the class where the method is declared. I would highly recommend using this keyword with classes only to avoid any unexpected issues coming from historical language behaviors.

## Inner Functions

An inner function can access to any variable defined in it parent scope, except `this`.

_For example_:
```
function outer() {
	let value = 5;
	
	function inner() {
		console.log(value); 
	}
	
	inner(); // 5, can access the outer function variables.
}
```

> Note: Arrow functions are the exception here, they can refer to `this` which means the class, object, function or context where they are invoked.

## Function Declaration vs Function Expression
We might ask what is the difference between declaring a function and a function expression. They are very similar and achieve the results. If you declare your function it will be hoisted to the top. In other words, JavaScript engine will treat declared functions to be always defined. So you can refer them even before we declared. On the other hand JavaScript expression are defined when the JavaScript engine renders them. So if refer to them before they are defined you will get an exception. 

Second is the `this` keyword, function expression always treat `this` keyword in the context they are defined. Function declaration either refer to global object (`windows` in browsers and `global` in node), or where the function is invoked or binded.

## Dynamically decoration Classes and Objects
JavaScript has to methods `call` and `apply` where you can bind a generic method  to an object or class. Use of `this` inside the function body refers to the object or class instance it is dynamically binded.

## Binding functions
We can `bind` a function to a class, object or another function by the bind method. This method is more commonly used nowadays compare to `call` and `apply`.

>Note: You cannot bind arrow functions. Arrow functions are bind to the object where they are defined.

## Invoking functions and methods
It is very straight forward to execute or invoke a function or method. 
Use the function name followed by parenthesis and provide the necessary parameters.

_For example_:
```
let result = add(2, 4);
let kem = new Person('Kem');
kem.swim();

// Or with some interesting syntax
(function(a, b) {return a * 2 + b;})(2, 3); 
```

## Function arguments with default values
If we want to provide a default value to a function parameter if the invoker does not provide, we can do it with the following syntax.

_For example_:
```
function add(numberOneParam = 0, numberTwoParam = 0) {
	return numberOneParam + numberTwoParam;
}

add(); // Will return 0.
add(2); // Will return 2.
add(, 3); // Will throw an exception "Uncaught SyntaxError: Unexpected token ','"
add(2, 3); // Will return 5; 
```

## Arbitrary number of function arguments.
Functions can have dynamic number of arguments. 

### Rest
First option is rest. This will enable us to pass any number of arguments. It precedes with 3 dots `...rest`.

> Note: rest must be the last parameter.

_For example_: 
```
function add(firstNumber = 0, ...rest) {
	let total = firstNumber;
	
	for (let numberValue of rest) {
		total += numberValue;
	}
	
	return total;
}
```

### Arguments Object
`arguments` object is an array of the functions parameters. This collection has all the function elements. 

_For example_:
We can write the above function as follows.
```
function add() {
	let total = 0;
	
	for (let parameterIndex = 0, numberOfArgument = arguments.length; parameterIndex < numberOfArguments; parameterIndex++) {
		total += arguments[parameterIndex];
	}
	return total;
}
```

>Note: Arguments object is legacy syntax, use the rest instead.

## Destructing function arguments
We can easily destruct and array or an object parameter passing to a function. This will definitely save us quite a bit time. Just make sure if the parameter structure changes, you update your functions.

_For example_:
```
// By passing objects with out destructuring.
function combineWarehouseAssets(objectOne, objectTwo, newName, new Price) {

    combinedAsset = {
        name: newName,
        price: newPrice,
        quantity: objectOne.quantity + objectTwo.quantity,
        oldNames: [objectOne.name, objectTwo.name]
    };
    
    return combinedAsset;
}

// Invoking function.
let newAsset = combineWarehouseAssets({name: 'roundTable', price: 20, quantity: 12},
                       {name: 'squareTable', price: 21, quantity: 17}, 
                       'table', 21);


// By passing parameterized object with destructuring.
function combineWarehouseAssets({nameOne, priceOne, quantityOne}, {nameTwo, priceTwo, quantityTwo}, newName, newPrice) {
	let combinedAsset = {
	    name: newName,
	    price: newPrice,
	    quantity: quantityOne + quantityTwo,
	    OldNames = [nameOne, nameTwo]
	};
	
	return combinedAsset;
}

let newAsset = combineAssets({nameOne: 'a', valueOne: 1, quantityOne:5},
	{nameTwo: 'b', valueTwo: 1, quantityTwo: 6}, 'c', 2);
```

## Closures
Closures is a very powerful pattern we use in JavaScript. It uses variable scoping and returns an inner function that uses the outer functions variables. Said that we should be very aware of the memory leaks caused by dangling object reference.

_For example_:
```
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
```

# Classes
We can now create classes like in classical Object-Oriented languages in JavaScript.

In modern JavaScript we can define classes with `class`. I personally do not recommend using functions or objects to define classes like old day.

A class can be created by a `class` keyword, a name, optional constructor, public or private fields and methods.

Constructors initialize an instance class, all setting necessary fields and calling necessary methods.

By default, all the properties are public, but we have not private fields and methods, as well as static fields and methods.

Another important point is you do not need to mark your fields and methods with this keyword when defining. You will need it when referencing them.

Private fields and methods are pre-fixed with '#' and only accessible within the instance class or via getters and setters.

If you do not have setters and getters lets' say in our Point class; since JavaScript is a dynamically typed language you can accidentally try to set a property like point.x = 5; but it will not change the private field '#x' instead create another field.

_For example_:
```
class Person {
	#name;
	get name() { 
	  return this.#name;
  }
  
  age = 0;
	
	constructor(nameParam) {
		this.#name = nameParam;
	}
	
	static message = {
		hello: 'Hello everyone ';
	}
}
```

For the [point class](src/Point.js) setters, and getters are named as get x() {...} and set x() {...} so you can set the x and y like point.x = 5; is ok, internally it is updating the private field #x.

You can access x and y like accessing a public field. You cannot access a private method. Keep in mind private methods are not easy to test.

_For example_:
```
let aPoint = new Point(3,4);

let x = aPoint.x; // Using the getter method.
let y = aPoint.y; // Using the getter method.
```

Static methods and fields are marked by the keyword `static'

_For example_:
```
static messageBundle = {
	firstParameterNotANumber: 'First parameter must be a number.',
	secondParameterNotANumber: 'Second parameter must be a number.'
}
```

Keep in mind static properties cannot access the instance classes properties in other word the `this`.

The static methods and fields can be accessed from instance methods or external code but must always pre-fixed with the class name.

_For example_:
```
Point.messageBunle.firstParameterNotANumber
```

# Modules
Having isolation and encapsulation between in our code is critical for building a system easy to maintain and scale. Modular programming help us to create software as the name indicates by groups specialized code; in other words with modules. This approach enables us to not only building our code brick by brick just like Legos, but also isolate issues if and when they happen.

JavaScript did not have any modules for a long time, in Node layer we used a library called CommonJS which has a superb and extremely simple to create and use modules, in parallet with NPM (Node Package Manager) made middle tier JavaScript to be very popular and successful.

We are not going to talk about old way of creating modules using "work arounds" in JavaScript. We are going to talk about how we are going to build and use modules with the latest features of JavaScript and Extremely elegant implementation in Node JS via Common JS for entire software packages.

> Note: JavaScript Classes do provide encapsulation and modularization. As the name indicates for class level.

> Note: JavaScript Objects are used for modularization as well, but with the since we have Classes this should be the preferred way of coding for most of the instances. We can use Objects are page level functionality, or when data will have its own methods. Keep in mind there is not encapsulation with objects.

> Note: Inner functions. closures are also used to achieve encapsulation but these are not the right way to achieve this since we have classes and use private methods in classes.

## Node Modules

In Node and with the help of NPM/Package.json we get all the necessary programs and dependencies in our backend. This is very different in compare to the browser environment where we need to load all the files, dependencies via network. There is no benefit for bundling code in the Node layer to reduce number of requests through the network. In Node each file is an independent module. All the variables, constants, functions, classes defined in a file are private unless they explicitly made public (exported).

We use `require()` function to access the public properties in a Node module.

### Export
Exporting single function of property we just need to add `exports`.

_For example_: 

```
exports.mean = function(numericCollection) {

	if (Nubmer.NaN(numericCollection.length)) {
		throw new Error('Not a numeric collection');
	}
	
	let result = 0;
	
	if (0 === numericCollection.length) {
	 return mean;
	}
	
	let sum = numericCollection.reduce((x, y) => x + y);
	
	result = sum / numericCollection.length;
	
	return result;
}
``` 

Usually we export a single class, object or function. We can do this by setting `module.exports` to the name of the identifier.

_For example_:
```
module.exports = class MathUtil() {
}
```
 
 We could easily assign `module.exports` to the `mean` function we created by the difference is you are explicitly setting the properties in this case `mean` function to be exported. The last example export an entire class (or object, function, or any other property).
 
 I personally prefer to export an object or class instead of exporting functions individually. Also most of the time you might want to export multiple things.
 
 _For example_:
 
``` 
// Exporting single class with multiple functions, properties.
module.exports = {MathUtil};

// Exporting multiple functions, properties.
module.exports = {LineChart, PieChart, AreaChart};
```

### Import

We can import other node modules by calling the `require()` function. If you install the module via NPM (Node package manager) you just pass the name of the module. If you are importing a custom module you refer it to, by its location. Using relative paths would be better since you will deploy your code, and do not know the absolute path. If you want import some methods or properties of a module, you can specify them individually by using destructing assignment.

_For example_:
```
// Build in Node module.
const fs = require('fs');

// NPM installed module.
const server = require('express');

// Custom module. We consume properties with namespace.
const MathUtil = require('./utils/mathUtil.js');

let value = MathUtil.fibonacci(4);

// Importing only some of the methods and properties. 
// We will consume these properties without a namespace.
const {fibonacci, isWholeNumber, PI} = require('./utils/mathUtil.js');

let value = fibonacci(4);
```

## JavaScript Native Modules
In ES6 (ECMAScript 2015) finally JavaScript got modules, with exact same behavior as node. So all the classes, functions, constants, variables defined in a JS file unless it is explicitly exported are private.

Same as node the modules that are imported in a JS module expose their public methods, classes, properties.

The big difference is the syntax. Personally I wish ES6 adapted the exact way of importing and exporting modules just like in Node, but it did not.

> Note: Modules change the scoping in JavaScript in two very important ways. First, all the variables, functions, classes defined inside a module are in module's scope can have `import` and `export` statements for dependency management and exporting public methods, functions, properties. Second, just like JavaScript Classes, JavaScript Modules the code inside them are automatically in **strict mode**.

JavaScript in browsers have global scope or top level scope unless they were explicitly bound to a namespace.

> Note: We can include JavaScript modules in our HTML pages by adding the `type="module"` in script tags.

_For example_:

```
<script type="module" src="index.js"></script>
```

> Note: We can also include older JavaScript files that are not modules as modules within our JavaScript modules.

_For example_:

```
import '../../node_modules/highcharts/highcharts.src.js';
```

> Note: Node does support both Node Modules and Native JavaScript Modules. For now I recommend using the Node modules, until most of the packages change to handle the new syntax.

### Export

To export a function, method, or property in ES6 add `export` keyword before declare it. Alternatively (which I recommend) use `export {functionOne, propertyTwo, ClassThree}` and define your methods, functions and properties as usual.

_For example_:
```
export const PI = 3.141526;

function find(value) {
}

class MathUtil {
}

export {MathUtil, find};
```

Most of the time we do export only one class that has many methods and properties. In this case we use `export default` instead of just `export`. This is much more efficient if we have only one thing to export.

_For example_:

```
Class Person {

	#name;
	#lastName;
	#gender = new set(['male', 'female']);
	#age
	#ss
	
	constructor(...
	
}

export default {Person}
```

> Note: `export` can only with top level objects.

### Import
Very similar to `export` in ES6 we can use `import [name] form 'location\file.js';` keyword to import other modules.

_For example_:

```
import MathUtil from '../util/mathUtil.js;
```

The imported MathUtil is just like defining a constant. It will become a property of the hosting module.

> Note: `import` like `export` can be use from the top level objects.

> Note: ES6 requires fully qualified module names, so it can differentiate modules with same names. _For example_: `'util.js'` is not acceptable, but `'./util.js'` if the file is in the same directory or `'../common/util.js'` if it is somewhere else is OK.

If we want to import multiple function, properties from a module we can use the syntax `import {functionOne, PropertyTwo} from './util.js'`. 

If we want to import all the functions, properties from a module we use the syntax `import * as util from './util.js'`. `util` will be used as a name space for all the functions and properties. _For example_: `util.loader()` if we have a function called `loader` defined in the util module.

We can also import a module that does not export anything but executes some functionality internally. _For example_: telemetry functions. For these types of self contained modules we do not need to specify a name.

_For example_:

```
import '../util/telemetry.js';
```

## Imports and Exports with Renaming
We can rename the names of the modules you are importing. Either because we want to use different names or because of the modules you are importing have the same name. We can use the `as` keyword for rename the imports.

_For example_:

```
import { MathUtil as Math } from '../util/mathUtil.js';
import { Telemetry as Analytics } from '../util/telemetry.js';
```  

## Aggregator modules, re-exports
If we want to create a utility module that includes several utility modules we can do that easily too. Instead of first importing and then exporting we can do it one line.

_For example_:

```

// Combined Util Module.
export { telemetry } from '../util/telemetry.js';
export { mathUtil } from '../util/mathUtil.js';


// Importing combined Util Module.
import {telemetry, mathUtil } from '../util/combinedUtilities.js';
```

## Dynamic imports
In node every imported module is ready when we run our program. In the browser however the modules have go through the internet. Therefore we can use `promises`, `async` and `await` to handle the asynchronous behavior of the web. 

We use `import()` operator to dynamically import modules, it is very similar to a function invocation. The parameter can by dynamically generated as well unlike the static `import` directive.

_For example_:

```
import('../util/mathUtil.js').then(mathUtil => {
	result = mathUtil.fibonacci(value);
});

async fibonacci(value) {
	let mathUtil = await import('../util/mathUtil.js');
	return mathUtil.fibonacci(value);
}
```

## Modules types
Different tools, and different environments impact how we use `modules`. The table below summaries them at time this document is created.

| Type              | Environment| Load Type |
| :---              | :---       | :--- |
| Script            | browsers   |	 async	 |
| CommonJS module   | 	servers	   | sync	|
| AMD module        |	browsers	   | async	 |
| ECMAScript module |	browsers and servers | async |

---
[Go back to ToC](../README.md)
