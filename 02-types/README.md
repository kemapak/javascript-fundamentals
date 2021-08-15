# Types

In JavaScript types are divided into 2 categories; primitive types and object types.

## Primitive Types

- Numbers 
- Strings
- Booleans
- Undefined
- Null
- Symbol

Numbers, string and boolean are primitive types but unlike any other language they have wrapper objects that have methods and properties in other words even primitive types do have methods in JavaScript. Only null & undefined primitive types do not have any methods.

### Numbers
There is only one number type that includes integers and floats. To learn more please check [Numbers and Math Static Class](Numbers.md)

### String
There is not character type in JavaScript only Strings. They are character arrays (collections).

### Properties
- String.length

### Methods
- String.fromCharCode()
- String.fromCodePoint()
- String.raw()
- String.prototype.charAt()
- String.prototype.charCodeAt()
- String.prototype.codePointAt()
- String.prototype.concat()
- String.prototype.endsWith()
- String.prototype.includes()
- String.prototype.indexOf()
- String.prototype.lastIndexOf()
- String.prototype.localeCompare()
- String.prototype.match()
- String.prototype.matchAll()
- String.prototype.normalize()
- String.prototype.padEnd()
- String.prototype.padStart()
- String.prototype.repeat()
- String.prototype.replace()
- String.prototype.replaceAll()
- String.prototype.search()
- String.prototype.slice()
- String.prototype.split()
- String.prototype.startsWith()
- String.prototype.substring()
- String.prototype.toLocaleLowerCase()
- String.prototype.toLocaleUpperCase()
- String.prototype.toLowerCase()
- String.prototype.toString()
- String.prototype.toUpperCase()
- String.prototype.trim()
- String.prototype.trimEnd()
- String.prototype.trimStart()
- String.prototype.valueOf()
- String.prototype\[@@iterator]()

### Boolean
The only values boolean value can have are *true* or *false*.

#### Methods
- Boolean.prototype.toString()
- Boolean.prototype.valueOf()

### Symbol
Symbols is a special purpose type enables the definition of language extensions.

#### Properties
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

#### Methods
- Symbol.for(key)
- Symbol.keyFor(symbol)
- Symbol.prototype.toString()
- Symbol.prototype.valueOf()
- Symbol.prototype[@@toPrimitive]

### Undefined and Null 
They are special primitive types (They have no constructor methods, like number, string and boolean)

## Object Types

### Object
An Object is a collection of properties where each property can be a primitive or object type. Each property has a name value.

A special object is called global object. (Window in browsers, and Global in node)
An object is an unordered collection of properties (named value pairs)

### Array
Array is also an object but an ordered collection of properties (named value pairs), which can contain both primitives and objects.

### Set
Set is also an object. Sets represents a set of values.

### Map
Map is also an object. Maps represents a mapping from keys to values. They are also an ordered collection of properties (named value pairs).

### RegExp
RegExp, regular expressions is also an object. Represents textual patterns and enables, sophisticated matching, searching, and replacement operators.

### Date
The Date object represents dates and times. It also supports date calculations.

### Error
Error object represents errors. Raises when executing JavaScript.

### Functions and Classes
Functions and Classes are special types of objects.

---
[Go back to ToC](../README.md)