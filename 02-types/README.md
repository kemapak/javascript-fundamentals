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
There is only one number type that includes integers and floats.

#### Properties
- Number.EPSILON
- Number.MAX_SAFE_INTEGER
- Number.MAX_VALUE
- Number.MIN_SAFE_INTEGER
- Number.MIN_VALUE
- Number.NEGATIVE_INFINITY
- Number.NaN
- Number.POSITIVE_INFINITY

#### Methods
- Number.isFinite()
- Number.isInteger()
- Number.isNaN()
- Number.isSafeInteger()
- Number.parseFloat()
- Number.parseInt()
- Number.prototype.toExponential()
- Number.prototype.toFixed()
- Number.prototype.toLocaleString()
- Number.prototype.toPrecision()
- Number.prototype.toString()
- Number.prototype.valueOf()

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



