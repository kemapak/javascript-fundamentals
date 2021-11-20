# Objects & JSON

Objects are the core of JavaScript, we use them to create data structures, represent entities as objects. We see how we use them in from our APIs and how to serialize and pass them to APIs via JSON.

An object is composite data structure that has named properties that are either primitive or object types.

_For example_:

```
{
  name: 'John',
  lastName: 'Doe',
  address: {
	  street: '123 Main Avenue'
	  city: 'San Francisco',
	  zipCode: 94131
  },
  employer: 'CinnamonSoft'
  occupaction: 'Software Architect',
  hobbies: ['smoking', 'reading', 'chess']
}
```

> Note: We need to keep in mind that Functions (Classes), Arrays, Maps, Sets and Dates are all objects.

> Note: top or root level Object in JavaScript is called as we expect `Object`.

## Object behaviors
Objects in JavaScript are dynamic and mutable. If you recall from **types** section if passed as a parameter they can updated unlike the primary types. They can also represent static data structures as well.

> Note: Objects can have methods properties as well, but since the introduction of classes this should be avoided if possible and keep Object as pure data structures. Said that there will be always valid cases and exceptions to this rule.

Property Names are String or Symbols. There can only one property with the same name.

## Creating objects
We can create object via `object literals`, with the `new` operator, `Object.create()` methods.

_For example_:

```
// Object literal.
let car = {
	'engine-type': 'electric',
	type: 'convertable'
	brand: 'Mini',
	'miles per gallon': 140
}

// With new operator.
let emptyObject = new Object(); // {}
let today = new Date();
let collection = new Array();
// Class instances are Objects as well. Classes are Function type, and functions are Objects as well.
let joe = new Person('Joe', 'Doe'); 

// With Object.create() method, we pass the constructor, and its' parameter properties.
let shape = Object.create(shapeConstructor); 

// Creating an object without a parent, without inhering any property.
let rootObject = Object.create(null);

// Creating an empty object, inheriting from `Object.prototype`. This is same as creating and empty object with a literal `{}`.
let anotherEmptyObject = Object.create(Object.prototype);
```

## Prototype
JavaScript uses Prototypal inheritance, in reality it is a Prototype Oriented Programming Language with is very similar to Object Oriented languages especially the latest versions.

In JavaScript Objects, Functions, and Classes inherit from the Prototype object. 

Even most of the time Prototype object contains methods, some time it could also contain fields. 

The top level Object `Object` does not have prototype, so it does not inherit any behavior. But all the object inherit from `Object.prototype`.

_For example_:

```
Object.prototype; // [Object: null prototype] {}
```

Most of the build in and user defined objects to have prototype property. They will inherit their properties from prototype. This link is called **prototype chain**.

In examples in how to create objects demonstrates this. Both **car** and **emptyObject** inherits from `Object.prototype`. The **collection** inherits from `Array.prototype` which inherits from again the root object `Object.prototype`.

When we create an object instance (class, function, array, date, map, set, symbol) with the `new` operator; the `constructor` method sets the value of the prototype property of our object.

## Getting and setting object properties.
We can use the dot `.` notation or square brackets `[]`, associate arrays to get and set object methods if they are accessible and writable. If we have any private properties inside an class for example we cannot access it directly.

Keep in mind associative arrays become very handy when we can to construct these names via expression or iterating through properties.

_For example_:

```
let carBrand = car.brand;
car.brand = 'Mini';

for (let chapter in book) {
 console.log(book.[chapter][title]);
}
```

## Inheritance
In JavaScript when a class, object or function inherits from another class, object or function actually it inherits the properties (fields and methods) to the parent objects prototype object. 

As we mentioned above the prototype chains or links will go through the root to the leaf object. In other words, some of the object properties belong to the current object and some could belong to the parent, grand parent, or grand-grand parent and so on.

Again, I do strongly recommend that you use classes instead of object or functions that mimics classes.

To give an example for the objects to explain the inheritance with is very similar to function and class inheritance.

_For example_:

```
let grandParent = {
	lastName: 'Doe',
	name: 'Jason'
}

// Inherits grandParent prototype object properties.
let parent = Object.create(grandParent);
// Overides the name.
parent.name = 'Joe';
// Has hairColor property just belongs to parent.
parent.hairColor = 'Black';

console.log(parent.lastName); // `Doe`, Inherits from grandParent.
console.log(parent.name); // 'Joe' console.log(parent.hairColor); // 'Black' Inherist from parent.


// Inherits parent prototype object properties.
let child = Object.create(parent);
// Overides the name.
child.name = 'John';
// Has shoeSize property just belongs to child.
child.shoeSize = 7;

console.log(child.lastName); // `Doe`, Inherits from grandParent.
console.log(child.name); // 'John' console.log(child.hairColor); // 'Black' Inherist from parent.
console.log(child.shoeSize); // 7
```

## Error Case for non existent properties

If we query a non existent property of on a defined/existent object we get undefined.

_For example_:

```
let person = {
	name: 'John',
	lastName: 'Doe'
}
let profession = person.profession; // Returns undefined.

let yearOfExperience = person.profession.yearsOfExperiance; // TypeError, undefined or null does not have any properties.
```

We can use several techniques to check if the properties exist and avoid `TypeError`.

_For example_:

```
let person = {
	name: 'John',
	lastName: 'Doe'
}

// We can use short circuiting behavior to check if the property exists.
let yearsOfExperience; // Undefined since it is not initialized.

// Check if the property exists.
if (person && person.profession && person.profession.yearsOfExperience) {
	yearsOfExperince = person.profession.yearsOfExperience;
}

// Or we can use conditional operator to check if the property exists.

// If the properties of the person object does not exist, it will return 'undefined'.
let yearsOfExperience = person?.profession?.yearsOfExperience;
```

> Note: If the property of an object is read-only trying to set fails. In strict mode, these errors are verbose, otherwise they are silent.

## Deleting properties from an object

The `delete` operator removes property from an object.

> Note: `delete` operator cannot remove the inherited properties, but returns `true`.

> Note: `delete` operator throws `ReferenceError` if the property does not exists.

_For example_:

```
let person = {
	lastName: 'Doe'
}

let human = Object.create(person);
human.name = 'John';

console.log(human.lastName); // returns 'Doe'.
console.log(human.name); // returns 'John'.

delete human.name;
delete human.lastName;
console.log(human.lastName); // returns 'Doe'.
console.log(human.name); // returns 'undefined'

delete human.profession; // throws 'ReferenceError'
```

> Note: `delete` operator throws an `TypeError` in strict mode, otherwise returns `false` if it tries to delete a non-configurable property.

_For example_:

```
delete Object.prototype; // Throws 'TypeError` in strict mode, otherwise returns 'false` 
```

## Checking object's properties

### Checking if property exits with `in` operator, hasOwnProperty() method and querying property.

We can check if a property belongs to an object by using `in` property or `hasOwnProperty()` method. The `hasOwnProperty()` method checks only the current objects properties not the inherited ones. 

We can also query the existence of the property, this approach is very much like `hasOwnProperty()` method and only checks the current objects properties not the inherited ones.

_For example_:

```
let person = {
	name: 'John',
	lastName: 'Doe'
}

console.log('name' in person); // true
console.log('weight' in person); // false
console.log('toString' in person); // true, inherited from 'Object'.

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('weight')); // false
console.log(person.hasOwnProperty('toString')); // false, inheried from 'Object'.

console.log(person.name !== undefined)); // true;
console.log(person.toString !== undefined)); // false, inherited from 'Object'.
```

### Checking if a property is enumerable with `propertyIsEnumerable()` method

We can check if a property of an object is enumerable. Please keep in mind that like `hasOwnProperty()` method `propertyIsEnumerable()` method only check the properties of the current object properties not the inherited ones.

_For example_:

```
let person = {
	name: 'John',
	lastName: 'Doe'
}

console.log(person.propertyIsEnumerable('name')); // true
console.log(person.propertyIsEnumerable('toString')); // false, inherited from 'Object'.
```

### Enumerating properties 

We can loop through an objects properties via `for/in` loop, keep in mind the `in` operator shows the inherited properties as long as they enumerable.

_For example_:

```
let parent = {
	name: 'John',
	lastName: 'Doe'
}

let child = Object.create(parent);
child.name = 'Joe';
child.hairColor = 'Black';

for (let prop in child) {

	// Skip the inheritted properties.
	if (!child.hasOwnProperty(prop)) {
		continue;
	}
	
	// Skip methods.
	if ('function' === typeof child[prop]) {
		continue;
	}
	
	console.log(prop); // name, hairColor
}
```

We can also use `for/of` loops to enumerate object properties. 

To do this we will use `Object.keys()` method which return the current objects keys if they are not inherited, not enumerable, and not a Symbol.

We will use `Object.getOwnPropertyNames()` method which also return names of non-enumerable own properties. This will also not return names that are Symbols.

To get the properties whose names are Symbol we will use `Object.getOwnPropertySymbols()` method.

Finally to get all the properties, enumerable, non-enumerable, String and Symbols we will use `Reflect.ownKeys()` method.

_For example_:

```
let parent = {
	name: 'John',
	lastName: 'Doe',
	[Symbol('ssNumber')]: '111-222-3333'
}

let child = Object.create(parent);
child.name = 'Joe';
child.hairColor = 'Black';
child[Symbol('ssNumber')] = '444-555-6666';

for (let key of Object.keys(parent)) {
	console.log(key); // name, lastName
}

for (let key of Object.keys(child)) {
	console.log(key); // name, hairColor
}

for (let key of Object.getOwnPropertyNames(parent)) {
	console.log(key); // name, lastName
}

for (let key of Object.getOwnPropertyNames(child)) {
	console.log(key); // name, hairColor
}

for (let key of Object.getOwnPropertySymbols(parent)){
	console.log(key); // Symbol(ssNumber)
}

for (let key of Reflect.ownKeys(child)){
	console.log(key, ': ', child[key]); // name: Joe, hairColor: Black, Symbol(ssNumber): 444-555-6666
}
```

## Core Object methods that needs to be overridden and implemented.
Some of the core methods an object inherits from `Object.prototype` is not very useful and needs to be implemented by the newly defined object. This is very similar to implementing interfaces in other languages. 

> Note: This is also valid and needed for JavaScript Classes.

### `toString()` method
This method represents the object in string form. Out of the box it is not very useful. For any object that does not override this method it returns `[object Object]`. If we want to create a more meaningful method we need to override `toString()` of the `Object.prototype`.

_For example_:

```
let person = {
	name: 'John',
	lastName: 'Doe'
}

console.log(person.toString()); // [object Object]

let car = {
	brand: 'mini',
	type: 'convertable',
	toString: function() {
	  return 'brand: ' + this.brand + ', type: ' + this.type;
	}
}

console.log(car.toString()); // brand: mini, type: convertable.
```

### `toLocaleString()` method

This method is very similar to `toString()` method. It call `toString()` method internally except for Date and Number type objects. Those object types converts the output to the localized format.

### `valueOf()` method

This method is very similar to `toString()` method as well. It converts the output to a primitive value besides string type. Usually used for Number. Also a date object converts it date to a number.

### `toJSON()` method

This method defines actually `JSON.stringify()` method that is used to serialize the object. The return value is serialized instead the original object. I do not find much use for this method, but it is part of our developer toolbox if needed.

## JSON & Data Serialization

Object serialization is the converting an Object to a String to transport via our API which can be converted back again to an Object to be consumed in the UI or the backend. 

We use two methods to convert an Object to a String `JSON.stringify()` and String to an Object `JSON.parse()`.

_For example_:

```
let person = {
	name: "John",
	lastName: "Doe",
	addresses: [
		{
			type: "home",
			street: "123 Main Street",
			city: "San Francisco",
			zipcode: "12345"
		},
		{
			type: "work",
			street: "456 Work Street",
			city: "San Francisco",
			zipcode: "54321"
		}
	],
	secretId: null
}

// Convert to string.
let payload = JSON.stringify(person);

// Restore JavaScript object.
let data = JSON.parse(payload);
```

JSON stands for JavaScript Object Notation. It is invented by Douglas Crockford in early 2000s, and since then it became the de facto standard for data payload format both in UI, Backend and services.

### JSON Data Types

JSON has very similar a subset of JavaScript data types.

- Number
- String
- Boolean
- Array
- Object
- Null

> Note: If we need to use dates, we can by converting them to ISO-formatted strings using `date.toJSON()` method or we convert the dates to milliseconds in UTC time as use them as Strings. I do recommend the second approach since it will be only numbers. We can use `date.get()` method to get the UTC time in milliseconds for the date.

We will use JSON almost all the time when we are communicating with the APIs in UI or Backend or when we are building services in the Node layer.

## Extended object syntax

These methods are rarely used can be useful in edge cases.

### Adding external variable, properties, symbols to objects

If we have any variables defined we can easily add them to our objects.

_For example_:

```
let name = 'John';
let lastName = 'Doe';

// Regular syntax
let person = {
	name: name,
	lastName: lastName
}

// Shorthand syntax
let person = {
	name,
	lastName
}
```

We can also add dynamically created properties to our objects.

_For example_:

```
const TITLE = 'Title';
let book = {};

// Regular syntax
book[TITLE] = 'JavaScript Fundamentals';

// Shorthand syntax
book {
 [TITLE]: 'JavaScript Fundamentals'
}
```

Also as we before we can add Symbols to our objects.

_For example_:

```
let extension = Symbol('extension');
let spec = {
	sytleColor: '#3355577'
};

// Regular syntax.
spec[extension] = {customStyleColor: '#EEE357`};

// Shorthand syntax.
spec = {
	sytleColor: '#3355577',
	[Symbol('extension')]: {
		customStyleColor: '#EEE357`
	}
};
```

## Spread operator, creating objects by copying objects

We can easily copy object or create aggregate objects from other objects by copying them with spread operator.

_For example_:

```
let identity = {
	name: 'John',
	lastName: 'Doe'
}

let address = {
	street: '123 Main Street',
	city: 'San Francisco',
	zipCode: '12345'
}

let person{ ...identity, ...address};
```

> Note: If the objects have any property with the same name, the last, right most property value overrides the previous ones.

> Note: Spread operator only copies the properties of the actual object, the objects inherited properties. In other words this is a shallow copy.

> Note: Spread operator in objects are not efficient, use with sparsely and with caution.

## Shortcut Property Definitions

In ES6 and further we can define methods in an object as well as a class with shortcut properties.

_For example_:

```
// Long form.
let Person = {
	name: 'John',
	lastName: 'Doe',
	dateOfBirth: '1/1/2000',
	calculateAge: function() {
		return (new Date()).getFullYear() - (new Date(this.dateOfBirth)).getFullYear();
	}
}

// Short form.
let Person = {
	name: 'John',
	lastName: 'Doe',
	dateOfBirth: '1/1/1960',
	getAge() {
		return (new Date()).getFullYear() - (new Date(this.dateOfBirth)).getFullYear();
	}
}
```

We can also use property names in brackets (Like Symbols) or as Strings.

_For example_:

```
let methodName = 'getAge';
let ssNumber = Symbol('ssNumber');
let Person: {
	name: 'John',
	lastName: 'Doe',
	'dateOfBirth': '1/1/1960',
	[methodName]() {
		return (new Date()).getFullYear() - (new Date(this.dateOfBirth)).getFullYear();
	},
	[ssNumber]: '333-555-7777'
}
```

## Accessor properties (getters and setters)

We can use accessors in objects. Again I do highly recommend that to consider JavaScript classes instead of objects. We have private properties in classes and accessors will be more useful.

Accessors are inherited and we can do some data manipulation or check some conditions.

_For example_:

```
let Person = {
	name: 'Default',
	get name() {
		return this.name;
	},
	set name(value) {
		this.name = value;
	}
	lastName: 'Default',
	get lastName() {
		return this.lastName;
	},
	set lastName(value) {
		this.lastName = value;
	}
}

console.log(Person.name, ' ', Person.lastName); // Default Default;

Person.name = 'John',
Person.lastName = 'Doe';
	
console.log(Person.name, ' ', Person.lastName); // John Doe;	
```

---
[Go back to ToC](../README.md)