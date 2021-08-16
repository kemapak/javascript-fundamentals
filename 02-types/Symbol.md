# Symbol
JavaScript objects defined by unordered key value pairs. Keys were strings, until Symbols introduced. A symbol property guarantees the uniqueness of the the property, and prevents overriding.

## Properties
- Symbol.prototype.description
- Symbol.asyncIterator
- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.match
- Symbol.matchAll
- Symbol.replace
- Symbol.search
- Symbol.split
- Symbol.species
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.unscopables

## Methods
- Symbol.for(key)
- Symbol.keyFor(symbol)
- Symbol.prototype.toString()
- Symbol.prototype.valueOf()
- Symbol.prototype[@@toPrimitive]

_For example_:
```
  // Define an object.
	let Person = {};
	
	let prop = Symbol('name');
	
	Person.prop = 'Kem';
	
	typeof prop; // Symbol.
	console.log(Person.prop); // Kem.
```

---
[Go back to types](README.md)

[Go back to ToC](../README.md)
