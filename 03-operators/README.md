# Operators
JavaScript operators work as a part expression.

_For example_:
```
let value = 1;
```
Above the equal operator evaluates 1 and assigns to variable "value".

Similarly mathematical operator evaluates two values.
_For example_:
```
2 + 3; // 5
```

Objects follow a similar pattern.
_For example_:
```
let simpleObject = {
   name: 'John',
   lastName: 'Doe'
}

let emptyObject = {};

let nestedObject = {
   childObject: { 
      value: 'Hello'
   },
   index: 5
}

let anotherObject = new Object();

let tom = new Person('Tom');
```

Arrays are similar too.
_For example_:
```
let collection = [1, 2, 3];

// Array can have multiple type of children. Even undefined members.
let complexCollection = [1, {name: 'Joe'}, true, 'Hello', 5, , , 10];  
```

## Associate Arrays and Dot Notation.
You can access object property with a dot notation or square brackets. This is called associate arrays. This is useful when you want to pass an evaluated value.

_For example_:
```
let book = {
	chapter1: {}, 
	chapter2: {}, 
	chapter3: {}
}

// Dot notation.
book.chapter1 = { title: 'Introduction', content: ' ... '};

// Associate array notation.
book['chapter' + 2] = { title: 'Types', content: ' ... '}; // Evaluates to chapter2.
```

## Conditional Object Property Access (Optional Chaining)
If a property of an object does not exists, you might get an exception thrown or  an undefined value.

You can use an optional chaining operator.
_For example_:
```
let nullValue = null;
nullValue.someProperty; // Will throw Uncaugth Type exception.

nullValue?.someProperty // Will result in undefined.
```

## Function/Method Execution.
You can call a method or function by passing the parameters if any in parentheses.

_For example_:
```
function sayHello(name) {
	if ('string' === typeof name) {
		console.log('Hello ' + name);
	} else {
		console.log('Hello stranger!');
	}
}

// Call the sayHello function.
sayHello(); // Hello Stranger!.
sayHello('Max'); // Hello Max.

class Person {

	#name;
	
	constructor(name) {
		this.name = name;
	}
	
	sayHello() {
		console.log('Hello ' + name);
	}
}

let bill = new Person('Bill');
bill.sayHello(); // Hello Bill.
```

## This
This refers to the object instance it is create. 

> There is an exception to this rule in browsers. This is assigned to the control that fires the event, instead of the object. For example; button click. You can find more information about this and the binding side affects.

## Operator list

| Operator | Operation                     | Execution Order | Example        |
| :---     | :---                          | :---            | :---:          |
| `.`                   | dot                | Left            | `book.chapter` |
| `,`                   | comma              | Left            | `a = 4, b = 2` |
| `-`                   | negate             | Right           | `i = -3;`      |
| `++`                  | increment          | Right           | `i++ or ++j`   |
| `--`                  | decrement          | Right           | `i-- or --j`   |
| `+`, `-`                | add, subtract      | Left            | `i + j`        |
| `*`, `/`, `%`             | multiply, divide, modulus | Left     | `i * j`        |
| `=`                   | assign, equal      | Right           | `i = 5;`       |
| `**`                  | exponentiate       | Right           | `i = 2**2;`    |
| `**=`, `*=`, `/=`, `+=`, `-=` | operate and assign | Right           | `i += 5;`      |
| `+`            | string concat      | Left            | `'a' + 'b'`    |
| `delete` | delete property| Right| `delete book.chapter44;`|
| `typeof`              | type of operator   | Right           | `typeof name;` |
| `instanceof`          | check instance     | Left            | `auto instanceof Car` |
| `void`                | return void        | Right           | `return void();` |
| `in`                  | check property existence | Left      | `'Joe' in team` |
| `!`                   | Logical negate     | Right           | `!crazy`      |
| `&&`, `||`            | Logical and, or    | Left            | `!crazy && fun` |  
| `<`, `<=`,`>`, `>=`         | Compare order      | Left            | `index <= max`  |
| `==`, `!=`              | equal   | Left            | `a != b`        |
| `===`, `!===`           | strict equal       | Left            | `'abc' === value` |
| `?:`                  | ternary            | Right           | `(a > b) ? true : false;` |

## Operator Presendence

In math operations parenthesis `()`, exponentiate `**`, multiplication, division `*, /` and addition, substraction `+, -` and finally equal `=` get priority.

## Overloaded Operators
 
The addition `+` operator both adds numbers and concatenate strings. When used with both numbers and strings, left to right precedence is used to calculate values.

_For example_:
```
	2 + 3; // 5
	2 + '3'; // '23'
	'2' + 3; // '23'
```

In addition to this boolean values are converted to numbers (true 1, false 0).
_For example_:
```
true + true; // 2
```

Null is converted to 0, undefined becomes NaN.

## Equality Operators

 Equal/non-equal `== or !=` compare the values of its operands and if necessary does a type conversion.
 
 The strict equal/non-equal `=== or !==` compare the values of its operands but does not do a type conversion. So usually it is preferred.
 
 _For example_:
 ```
 1 == '1' // true
 1 === '1' // false
 ```
 
## The evil Eval
JavaScript can evaluate strings and executes the contents. This is considered a security loophole, since a technical person can possible inject malicious code.

Said that here is how it works.
```
eval('console.log("Hello world!");');
```

---
[Go back to ToC](../README.md)