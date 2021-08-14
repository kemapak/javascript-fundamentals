# Identifiers, Literals, Expressions, Statements and Comments

JavaScript has similar concepts as other strongly typed and scripting languages.

> Note: **Never omit semicolons** ";" end of a statement if you want to avoid unexpected behavior or errors. Only exception to this rule is end of curly braces "}".

## Definition of terms
- Identifier => Name (variables, constants, function, classes, methods)
- Literal => Value (String, Number, Boolean, Object, Collections)
- Expression =>  phrases
- Statement => sentences

## Core lexicon
- A **literal** is a value. Could be primary type, or an object type.

```
	"Hello";
	1;
	true;
	[1, 'two', 3];
	{name: Kem, lastName: Apak}
```

- A **variable** or a **constant** is a symbolic name for a value **(Identifier)**. When a program needs to retain a value for future use, it assigns the value to (or “stores” the value in) a variable.

``` 
// Depending where it is defined in global or functional scope. Do not use it!
var x = 1; 

// Depending where it is defined in global scope. Do not use it!
y = 2; 

// Depending where it is defined in local scope. Use this!
let z = 'Hello World!'; 

// Not a variable, a constant. Depending where iti is defined in local scope. Use this!
const PI = 3.1415; 

// A defined but not initialized variable.
let notDefined;  
```

- An **expression** is a code that can be evaluated to produce a value.
```
	let value = 1 + 2;
	
	// Expression, a variable is assigned a function.
  let calculateSalary = function(salary, percentIncrease) {
      return salary * percentIncrease;
  }
```

- A **statement** does not have a value but alter the state.
```
	if (x > y) {
  
  }
	
	// Statement, does not return a value until it is invoked.
	function calculateSalary(salary, percentIncrease) {
		return salary * percentIncrease;
	}
```

- A **function** is a parameterized, named, a reusable block of code.

```
   // Function declaration (A statement)
   function add(numberOne, numberTwo) {
	    return numberOne + numberTwo;
   }
   
   // Functin expression (An expression)
   let add = function(numberOne, numberTwo) {
	   return numberOne + number Two;
	 }  
```

- A **method** is a function of an object.

```
	class person {
			
			name;
			#ssNumber; // Private!
			
			static MESSAGE = {
				hello: 'Hello folks! my name is'
			}
			
			constructor(name, ssNumber) {
			  this.name = name;
			  this.#ssNumber = ssNumber;
			}
			
			sayHello() {
				console.log(person.Message.hello + this.name);
			}
	}
```

- A **control structure** is **conditionals** and **loops**.

```
	if (jane.iq > joe.iq) {
		console.log('Jane is smater then Joe!');
	}
	
	for(let index = 0, numberOfPeople = 100; index < numberOfPeople; peopleIndex++) {
		people[index].sayHello();
	}
```

## Reserved Words

Reserved Words
Like any language JavaScript reserves certain identifiers for use by the language itself.

### Currently used reserved words.

|          |          |         |            |        |        |       | 
| :---:    | :---:    | :---:   | :---:      | :---:  | :---:  | :---: |
| as       |	 const	    | export  | get	       | null   | 	target | void  |
| async	   | continue | extends |	if         | of     |	this	   | while | 
| await	   | debugger | false	  | import     | return |	throw  |	 with  | 
| break    |	 default  | finally | in	         | set    | true   | yield |
| case     | delete   | for     | instanceof | static	| try    |	 catch |
| 	do       | from     | let	    | super     	 | typeof |	class  | else  |
| 	function |	 new      |	switch  |	var        |        |        |       |	

### For future use reserved words.

|       |            |            |         |         |           |        |
| :---: | :---:      | :---:      | :---:   | :---:   | :---:     | :---:  |
| enum  | 	implements | 	interface	| package	| private	| protected	| public |


## Comments

There are two (actually three) types of comments in JavaScript.

> Best code does have minimal amount of comments, the code should be self documented. The variable, function, method, and class names should be self explanatory. It is OK if they are long. The exception to this rule is API documentation and comments.

> Avoid checking in commented code into your repository, unless it is going to live for a short time.

- A **line comment** is a single line comment. Try to put the line comments as the name indicates above a statement. Only use it end of a line if it is very short.

```
	// This is a line comment.
	
	// TODO: Kem remove the end of line, line comment!
	Let a = 1; // Avoid using it end of a line!
```

- A **block comment** is a multi line comment. It used to describe a complex code, if the code is not clear. It could be used in refactoring complex code.

```
/*
 This is block comment!.
 Can span multiple lines or single line.
 */
```

- A **documentation comment** is a block comment with one minor difference. There is an additional asterisks "*" at the beginning. It is used for documenting classes, public methods. This is not JavaScript standard but it is widely used in other languages as well. We called it JS Doc, similar to JavaDocs.

```
/**
 This is a person class.
 
 @param {String} name. The name of the person.
 @throws Error "Not a human" exception.
 @returns nothing if the instance is not an alien!
 @example
 let kem = new Person('Kem');
 @see {@link https://jsdoc.app}
 */
 class Person {
 
	 name;
	 
	 constructor(name) {
		 if (!name) {
			 throw Error("Not a human");
		 }
		 
		 this.name = name;
	 }
 }
```
