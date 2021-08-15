# Numbers & Math Static Class

## Number
JavaScript represents numbers by 64-bit floating-point format. 

> Note: JavaScript uses 32-bit integer for array indexing and bitwise operators.

When a number directly appears in JavaScript it is called “number literal”.

JavaScript numbers do represent real numbers (integers and decimal numbers). 

### Properties
- Number.EPSILON
- Number.MAX_SAFE_INTEGER
- Number.MAX_VALUE
- Number.MIN_SAFE_INTEGER
- Number.MIN_VALUE
- Number.NEGATIVE_INFINITY
- Number.NaN
- Number.POSITIVE_INFINITY

### Methods
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

### Integers 
JavaScript syntax for Integer numbers `[digit]`. _For example_: `3, 357, 33`

### Hexadecimal, Octal and Binary Numbers
JavaScript can represent numbers in  base 10, base 16 (0X, 0x, Hexadecimal), base 8 (0O, 0o, Octal) and base 2 (0B, 0b, binary).

- Hexadecimals numbers 0…9,A…F (0…15). _For example_: `OXFF = 255`
- Octal (0…7). _For example_: `0O66 = 54`
- Binary (0, 1). _For example_: `0B10 = 2`

### Floating Point Numbers
JavaScript syntax of Real number `[digits][.digits][(E|e)[(+|-)]digits]`

_For example_:
`3.14, 6.666e66, -3.572-12`

JavaScript floating numbers cannot represent fully the decimals of decimal numbers.
_For example_:
```
let x = .3 - .2; // 0.1
let y= .2 - .1; // 0.1
(x === y) // Returns false!
```

### Long Numbers
Separator in Numeric Literals (ES2020)
“_” underscore is used to break long numbers.

_For example_: 
```
let billion = 1_000_000_000; 
let goodBytes = 0XFE_AB_CD_6B;
```

### Arithmetic in Numbers
- `+` Addition
- `-` Subtraction
- `*` Multplication
- `/` Division
- `%` Modulo (Reminder after division)
- `**` Exponentiation (_For example_: `2 ** 3 = 8`)

> Note: Zero and Negative Zero is equal.

_For example_:
```
let zero = 0; 
let negativeZero = -0;
(zero == negativeZero) // Returns true;

( 1 / zero == 1 / negativeZero) // Returns false; (infinity !== - infinity)
```

> To check is a variable is not a number use `Number.isNaN(value)`, you cannot use `value === Number.NaN`

> Do not use old global Math methods or properties; always use Number.method or Number.properties.


### BigInt (ES2020)
JavaScript there is a new numeric value BigInt represent 64-bit integers. You use “n” as a postfix.
_For example_: `12345n`

> You can use any arithmetic operator with BigInt, but you cannot mix it with Int. _For example_: `12345n + 123` is not allowed.

> On the other hand; comparison operators are allowed. _For example_: `2n > 1`

You can also use BigInt with default base 10 numbers as well as, hexadecimal, octal and binary numbers.

> Note: Division operator drops any remainder and rounds down towards zero.

_For example_: `3000n / 997n` is equal to `3n`

## Math Static Class

### Properties
- Math.E
- Math.LN10
- Math.LN2
- Math.LOG10E
- Math.LOG2E
- Math.PI
- Math.SQRT1_2
- Math.SQRT2

### Methods
- Math.abs()
- Math.acos()
- Math.acosh()
- Math.asin()
- Math.asinh()
- Math.atan()
- Math.atan2()
- Math.atanh()
- Math.cbrt()
- Math.ceil()
- Math.clz32()
- Math.cos()
- Math.cosh()
- Math.exp()
- Math.expm1()
- Math.floor()
- Math.fround()
- Math.hypot()
- Math.imul()
- Math.log()
- Math.log10()
- Math.log1p()
- Math.log2()
- Math.max()
- Math.min()
- Math.pow()
- Math.random()
- Math.round()
- Math.sign()
- Math.sin()
- Math.sinh()
- Math.sqrt()
- Math.tan()
- Math.tanh()
- Math.trunc()

---
[Go back to types](README.md)

[Go back to ToC](../README.md)
