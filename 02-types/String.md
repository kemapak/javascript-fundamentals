# String
In JavaScript text is represented by Strings. There is no character type, only a string with length of 1. In JavaScript you can think strings as character arrays. There are many methods for you to work with strings.

One of the most important part of JavaScript mastery is learning and understanding String properties and methods.

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

> Note: Most string methods operates on 16-bit values, not characters.

_For example_:
```
let love = '💙'; // '\ud83d\udc99'.
let loveLength = love.length; // 2. This is very important!
```

> However for/of loop or the spread operator `...` iterate on characters.

## String Literals
String literals are specified by `'` (single quote), `"` (double quote) and <code>`</code> (back quote) characters.

_For example_:
```
let one = 'This is a string.';
let two = "This is a another string.";
let three = `This is another string.`;
```

You can wrap them in each other without escaping them (`\` the escape character)

_For example_:
```
let one = "Sally's coat.";
let two = '<div id="123">Some Text</div>';
let three = `She said "Hello!"`;
```

You can use `\` the escape character at end of the line to write multiple lines.

_For example_:
```
let longText = 'abcdef \
    	ghijkl \
    	mnopqrst';
```

A better way is to use <code>`</code> (back quote) character for multiple lines

_For example_:
```
let longText = `abcdef
                ghijklm
                nopqrst`;
```

The <code>`</code> (back quote) character is also used for templating strings as well.

_For example_:
```
let firstName = 'Kem';
let hello = `Hello ${firstName}, welcome to JavaScript.` // Hello Kem, welcome to JavaScript.
```

the variable firstName is replaced in the string with `${firstName}`

**It is best practice to use single quotes for strings** and **back quote for long and template strings**. It is recommended using double quotes for the **The HTML, XML and JSON properties** in JavaScript. Since double quotes must be used for these types of files. We will also take advantage of wrapping them without worry with single quotes.

_For example_:
```
let markup = '<div id="123">Some Generic Container.<div>';
```

You can also use the `\` escape character.

_For example_:
```
let name = 'O\'Mally';
```

You can escape character with escape sequences. Like new line, tabs, unicode characters, etc.

_For example_:
```
let love = '\ud83d\udc99'; // '💙'.
```

### Escape Characters

| Sequence              | Character Represented                          |
| :---                  | :---                                           |
| `\0`	                  | The NUL character (\u0000)                     |
| `\b`	                  | Backspace (\u0008)                             |
| `\t`	                  | Horizontal tab (\u0009)                        |
| `\n`	                  | Newline (\u000A)                               |
| `\v`	                  | Vertical tab (\u000B)                          |
| `\f`                  |	 Form feed (\u000C)                            |
| `\r`	                  | Carriage return (\u000D)                       |
| `\"`	                  | Double quote (\u0022)                          |
| `\'`                  | 	Single quote (\u0027)                          |
| `\\`                  | 	Backslash (\u005C)                             |
| `\xnn, \unnnn, \u{n}` |	Unicode characters (`n` is hexadecimal number) |

### Working With Strings

> String methods work on 16-bit values, not characters!

String manipulation and operations are vital to any programming language. JavaScript has many powerful methods, properties, literals as well as regular expressions to work with strings.

**Strings are immutable so all the methods below returns a new string instead of changing the original**. In other words you will see the new string is usually assigned to variable or an object property.

> Note: `<>` is used for required parameters `{}` is used for optional parameters

We are going to use the sample string below in our examples.
```
let message = 'Hello World!';
```

#### Conditional Operators
You can compare strings with conditional operators. Very important to note that two strings are equal and only equal if they consist of exactly same sequence of 16-bit values.

```
=== // Strict equal (value and type).
!== // Strict not equal (value and type).
==  // Equal (Value, operator will do type casting for you '5' == 5 is true)
!=  // Not Equal (Value, operator will do type casting for you '5' != 5 is false)
<   // Less than.
<=  // Less than or equal.
>   // Greater than.
>=  // Greater than or equal.
```

#### Length Operator
Length or size of the string is a property not an operator.

_For example_:
```
let size = message.length; // 12
```

[see tests](/test/string.test.js)

#### Concatenation
You can join to string with `+` operator or `concat()` method.

_For example_:
```
let longMessage = message + ' Good morning!';
let longMessage = message.concat(' Good morning!');
```

#### Partials
Getting or changing parts of a string.

_For example_:
```
/* 
 * String.prototype.substring({startIndex}) or String.prototype.substring({startIndex}, {endIndex})
 * It will return any new string between the indexes.
 * If an end index is provided it will return until the end index.
 * If only a startIndex is provided it returns rest of the string. (indexes start from 0).
 * Negative indexes are not allowed.
 * If no parameter is provided the method returns the original strings.
 */

let hello, world, ll, noChange;

hello = message.substring(0, 5);  // 'Hello'.
world = message.substring(6, 11); // 'World'.
hello = message.substring(5, 0);  // 'Hello'.
world = message.substring(11, 6); // 'World'.
world = message.substring(6);     // 'World!'.
ll = message.substring(2, 4);     // 'll'.
noChange = message.substring();   // 'Hello World!', returns the original string.
```

```
/*
 * String.prototype.slice(startIndex) or String.prototype.slice(startIndex, {endIndex})
 * It will return any new string between the indexes very similar to substring. 
 * However the position of the endIndex must be greater than the startIndex inlike substrings.
 * If only a startIndex is provided it returns rest of the string. (indexes start from 0).
 * In addition it does accept negative numbers as indexes, which goes from right to left.
 * If no parameter is provided the method returns the original strings.
 * If no parameter is provided the method returns the original strings.
 */

let hello, world, ll, noChange;

hello = message.slice(0, 5);       // 'Hello'.
world = message.slice(6, 11);      // 'World'.
hello = message.slice(5, 0);       // ''.
world = message.slice(11, 6);      // '';
hello = message.slice(0, -7);      // 'Hello'.
world = message.slice(6, -1);      // 'World'.
world = message.slice(-6, -1);     // 'World'.
world = message.slice(6);          // 'World!'.
world = message.slice(-6);         // 'World!'.
ll = message.slice(2, 4);          // 'll'.
noChange = message.slice();        // 'Hello World!', returns the original string.
```

#### Character Arrays
Strings are character arrays, in other words we can use associative arrays to get characters in strings.

_For example_:
```
let h = message[0]; 					   // 'H' the first character in our string.
let undefinedCharacter = message[20]; // Will return undefined.
```

#### Search, location index
We can find the location or indexes of characters or substring in strings. Remember that all indexes start from 0 in JavaScript.

_For example_:
```
/*
 * String.prototype.indexOf(<character or substring>, {startIndex}); returns the index number if found,
 * -1 otherwise.
 */

let indexOfL, indexOfLl;

indexOfL = message.indexOf('l');        // 2, third character in our message string.
indexOfL = message.indexOf('l', 3);     // 3, fourth character in our message string. 
indexOfL = message.indexOf('l', 4);     // 9, tenth character in our message string.
indexOfL = message.indexOf('l', 10);    // -1, no more 'l's.
indexOfL = message.lastIndexOf('l');    // 9, tenth character in our message string. 
indexOfL = message.lastIndexOf('l', 8); // 3, fourth character in our message string. 
indexOfL = message.lastIndexOf('l', 2); // 2, third character in our message string.
indexOfL = message.lastIndexOf('l', 1); // -1, no more 'l's.

indexOfLl = message.indexOf('ll'); // 2 start index of 'll' in our message string.
```

_For example_:
```
/*
 * String.prototype.charAt(<index>); returns the character (16-bit) at the index of the string.
 * If index is larger than the string length it return an empty string ''.
 */
let character;

character = message.charAt(6);  // 'W'.
character = message.charAt(20); // '', returns empty string.
```

_For example_:
```
/*
 * String.prototype.charCodeAt(<index>); returns the character code in the given index of the string.
 * If the index is larger than the string length it returns not a number NaN.
 * If the character code is larger than 0xFFFF 65535 UTF-15 returns the first part. If you want the 
 * full value use codePointAt method.
 */
let characterCode;

characterCode = message.charCodeAt(6);  // 87, the character code for 'W'.
characterCode = message.charCodeAt(20); // NaN.
```

_For example_:
```
/*
 * String.prototype.codePointAt(<index>); returns the full unicode point value.
 * If the index is larger than the string length it returns undefined.
 */
let characterCode;

characterCode = message.codePointAt(6);  // 87, the character code for 'W'.
characterCode = message.codePointAt(20); // undefined.
```

_For example_:
```
/*
 * String.prototype.startsWith(<character or substring>, {startIndex}); return true if found, false otherwise.
 */

let isLlFound;

isLlFound = message.startsWith('ll');    // false.
isLlFound = message.startsWith('ll', 2); // true.
```

_For example_:
```
/*
 * String.prototype.endsWith(<character or substring>, {startIndex}); return true if found, false otherwise.
 */

let isLlFound;

isLlFound = message.endsWith('ll');    // false.
isLlFound = message.endsWith('ll', 4); // true.
```

_For example_:
```
/*
 * String.prototype.includes(<character or substring>, {startIndex}); return true if found, false otherwise.
 */

let isLFound;

isLFound = message.includes('l');     // true.
isLFound = message.includes('l', 4);  // true.
isLFound = message.includes('l', 10); // false.
```

#### Padding and Trim
JavaScript has methods that will trim the empty characters or pad a string with any character.

_For example_:
```
/*
 * String.prototype.trim(); trims begining and the end of the string.
 * String.prototype.trimStart(); or String.prototype.trimLeft(); trims the begining of the string.
 * String.prototype.trimEnd(); or String.prototype.trimRight(); trims the end of the string.
 */
let paddedMessage = '  ' + message + '  '; // '  Hello World!  '.
let trimdedMessage;

trinmedMessage = paddedMessage.trim();      // 'Hello World!' trims both the left and right.
trinmedMessage = paddedMessage.trimStart(); // 'Hello World!  ' trims the begining.
trinmedMessage = paddedMessage.trimLeft();  // 'Hello World!  ' trims the begining.
trinmedMessage = paddedMessage.trimEnd();   // '  Hello World!' trims the end.
trimmedMessage = paddedMessage.trimRight(); // '  Hello World!' trims the end.
```

_For example_:
```
/*
 * String.prototype.padStart(<target length of the string> {, padding character}); 
 * adds padding to the beginning of a string.
 * String.prototype.padEnd(<target length of the string> {, padding character}); 
 * adds padding to the end of string. 
 * target length is the desired total length of the string. If the target length is less than
 * the current length of the string, returns to current string without padding.
 * If an optional padding character parameter is provided pads that character to the string otherwise
 * pads with blank character ' ' (not empty string).
 */
let paddedMessage, messageLength;

messageLength = message.length;            // 12.
paddedMessage = message.padStart(2);       // 'Hello World!', desired length than the current length.
paddedMessage = message.padStart(14);      // '  Hello World!'.
paddedMessage = message.padStart(14, '-'); // '--Hello World!'.
paddedMessage = message.padEnd(2);         // 'Hello World!', desired length than the current length.
paddedMessage = message.padEnd(14);        // 'Hello World!  '.
paddedMessage = message.padEnd(14, '*');   // 'Hello World!**'.

// An easier way to deal with target length could be by using String.prototype.length property.
paddedMessage = message.padEnd(message.length + 3, '?'); // 'Hello World!???'.
```

#### Repeat
You can create copies of a string by the repeat method.

_For example_:
```
/*
 * String.prototype.replace(<times>);
 * adds the string as many times as specified in the <times>. If 0 is provided for <times> or no <times>
 * parameter is provided, an empty string '' is returned. If a negative number is provided a Range Error
 * is thrown. If a non numeric number is provided a Reference Error is thrown. If a positive decimal number
 * is provided the number is floored and the result string is returned.
 */
let dash = '-';
dash.repeat(3); // '---'.
dash.repeat(0); // ''.
dash.repeat();  // ''.
```

#### Replacement
Replaces a substring with another if found. It does not modify the original string as strings are immutable in JavaScript.

_For example_:
```
/*
 * String.prototype.replace(<source substring>, <target substring>); returns the modified string,
 * if the source substring is found and replaces with target substring. 
 * Can be used in removing source substring if the target is set to 
 * empty string.
 */
let replacedMessage;

replacedMessage = message.replace('o', '');   // 'Hell World!'.
replacedMessage = message.replace('ll', 'y'); // 'Hey World!'.
```

#### Tranformation
A string can be easily transformed to uppercase or lowercase by building String methods.

_For example_:
```
/*
 * String.prototype.toLowerCase(); returns all lower case version of the string.
 * String.prototype.toUpperCase(); returns all upper case version of the string.
 */
let lowerCaseMessage, upperCaseMessage;

lowerCaseMessage = message.toLowerCase(); // 'hello world!'.
upperCaseMessage = message.toUpperCase(); // 'HELLO WORLD!'.
```

#### Split
Strings in JavaScript are character arrays and be split into substrings, by the split method. You can use this to find word count, and many other use cases.

_For example_:
```
/*
 * String.prototype.split(<split subtring or character>); returns an arrays of splitted substrings.
 * If no parameter is provided the entire string is returned as an array. 
 * If empty string is provided the all the characters in the string is returned as an array.
 */
let normalizedMessage, messageWordsCollection, messageArray, characterArray;

normalizedMessage = message.replace('!', '');          // 'Hello World'.
messageWordsCollection = normalizedMessage.split(' '); // [ 'Hello', 'World' ].
messageArray = message.split();                        // [ 'Hello World!' ].
characterArray = message.split('');                    // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o',  'r', 'l','d', '!'].
```

#### Template Strings
Template strings are a very powerful feature that you will most probably use quite often.
It uses back quote <code>`</code> character for defining string literals and uses ```${<expression>}``` for JavaScript expressions, it could be variable or a function. As mentioned above you can also use it for multi line strings.

_For example_:
```
let firstName = 'Kem';
let message = `Hello {$firstName}!, welcome to JavaScript!`;
let longMessage = `This is a long multi line message... 
    line continues...
    and continues...
    finally ends!`
```

#### Pattern Matching (RegExp, Regular Expressions)
`RegExp` is an object type. It is used for string manipulation. It has a complex set of patterns and a set of APIs that works within.

A regular expression literal is defined within opening and closing `/` forward slash.

_For example_:
```
let pattern = /JavaScript/;
```

It could be followed by one or more letters modifying the parameters.
1. `i` case insensitive.
2. `g` global.

_For example_:
```
 let sosPattern = /sos/gi;
```

---
[Go back to types](README.md)

[Go back to ToC](../README.md)
