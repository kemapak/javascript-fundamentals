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


---
[Go back to ToC](../README.md)
