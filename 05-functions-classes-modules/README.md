# Functions

Functions are the reusable blocks of code in JavaScript as well as many other languages. They are similar to constructs, procedures. They can accept parameters that act like local variables to functions. 

Since JavaScript is a prototype based language (More on prototypes) functions acted as both classes, methods and functions. This is a bit confusing but today JavaScript has native classes, and has very similar structure to current object oriented languages.


## Defining Functions
There are two ways we can define a function.

_For example_:
```
function add(numberOneParam, numberTwoParam) {
  return numberOneParam + numberTwoParam;
}
```

### Function Declarations
We can declare a function by the `function` keyword then the function name followed by parenthesis `()`, include 0 or more number of parameters followed by curly braces `{}` where the code block resides. 

> Note: The curly braces are optional for single line function statements, but I highly recommended to avoid this style of coding that could cause unexpected issues.

_For example_:
The first example can be written as follow, but you should never do this, even it is syntactically legal.
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

- Second, if a function is part of a class or object, it is called a method and we can define it as below.

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

- Fifth type of defining a function is new to JavaScript and it is called **Arrow Functions**. It is usually used for Lambda functions or functions with small code blocks. 

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

In old days we used functions and objects are classes. In that context `this` keyword indicated the reference where the function was invoked. In todays JavaScript this does refer to the class where the method is declared. I would highly recommend using this keyword with classes only to avoid any unexpected issues coming from historical language behaviors.

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
We might ask what is the difference between declaring a function and a function expression. They are very similar and achieve the results. If you declare your function it will be hoisted to the top. In other words, JavaScript engine will treat declared functions to be alway defined. So you can refer them even before we declared. On the other hand JavaScript expression are defined when the JavaScript engine renders them. So if refer to them before they are defined you will get an exception. 

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
function combineAssets({nameOne, valueOne, quantityOne}, {nameTwo, valueTwo, quantityTwo}, newName, newValue) {
	let newAsset = {};
	newAsset.name = newName;
	newAsset.value = newValue;
	newAsset.quantity = quantityOne + quantityTwo;
	newAsset.OldNames = [nameOne, nameTwo];
	
	return newAsset;
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

A class can be create by a `class` keyword, a name, optional constructor, public or private fields and methods.

Constructors initialize an instance class, all setting necessary fields and calling necessary methods.

By default, all the properties are public, but we have not private fields and methods, as well as static fields and methods.

Another important point is you do not need to mark your fields and methods with this keyword when defining. You will need it when referencing them.

Private fields and methods are pre-fixed with '#' and only accessible within the instance class or via getters and setters.

If you do not have setters and getters lets' say in our Point class; since JavaScript is a dynamically typed language you can accidentally try to set a property like point.x = 5; but it will not change the private field '#x' instead create another field.

_For example_:
```
class person {
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

For the [point class](./src/Point.js) setters, and getters are named as get x() {...} and set x() {...} so you can set the x and y like point.x = 5; is ok, internally it is updating the private field #x.

You can access x and y like accessing a public field. You cannot access a private method. Keep in mind private methods are not easy to test.

_For example_:
```
let aPoint = new Point(3,4);

aPoint.x = 5;
aPoint.y = 9;
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
