# Conditionals and Loops

## Conditionals
The conditionals are decision point or branches for your code. Depending on the value of the expression a statement is executed or skipped.

### if and else
`if` and `else` are the most common conditionals used in any programming language, JavaScript is not exception.

In the simplest form a logical expression is evaluated and depending on the result, a statement is executed that changes the state of the program.

_For example_:
```
if (a > b) {
	console.log('a is greather than b.');
}
```

> For single line of statements used in conditionals and loops curly brackets `{}` are not required. Said that I highly recommend never omitting them to avoid unexpected issues. I wasted a week of my life to find a bug related to this.

`if` statements can also have statement when the expression is evaluated to be false. We cover these cases by using `else`.

_For example_:
```
if (a > b) {
   console.log('a is greather than b.');
} else {
   console.log('a is not greather than b.');
}
```

You can have a multiple `if` statements changed using `else if`.

_For example_:
```
let largestNumber;

if (a > b && a !== b) {
	console.log('a is greather than b');
} else if (b > c && b !== c) {
	console.log('a is not greather than b. b is greather than c');
} else {
	console.log('a is not greather than b. b is not greahter than c');
}	
```

> Note: To make your code more testable and achieve a higher code coverage make sure leave out the last conditional statement and set a default value before the if statement starts.

_For example_:
In the below example if none of the cases are true the `alert` variable will never be set.

```
	let alert;
	
	if (a > b) {
		result = 'green';
	else if (a > z)	{
		result = 'yellow';
	} else {
		alert = 'red';
	}
```

Instead you can write the same code will a different approach. If the conditions are not meet at least we have a default value. Thus we can achieve higher code coverage and make your code more testable.
```
	let alert = 'red';
	
	if (a > b) {
		result = 'green';
	else if (a > z)	{
		result = 'yellow';
	} 
```

### switch
`switch` statement is extremely useful if there are multiple branches evaluating the same expression.

The `switch` statement evaluates the expression and check each option in other words `case` values. Also we do have `default` case if none of the `case` match the expression. 

>> Note: Very important to escape each `case` with a `break` keyword. Otherwise, the JavaScript will check each `case`. We even use `break` in the `default` case. `break` will jump end of switch statement.

_For example_:

```
	switch (value) {
		case 5: {
	     ...
	     break;
		}
		case 100: {
	     ...
	     break;
		}
		default:
			...
			break;
	}
```

## Loops
Loops are iterators, repeaters to go over a collection or object.

### while
`while` loop checks the expression and repeats the statements inside itself. Make sure the expression is not always evaluates to true, otherwise you will have an infinite loop.

```
while (conditional expression) {
	// do something while expression is true.
}
```

### do/while
`do/while` loop is very similar to the `while` loop with one major difference. It executes the statements first then checks the conditional expression. In other words this loop will execute at least once.

```
do {
	// do something while expression is true.
} while (conditional expression);
```

### for
`for` loop is the most common and most used loop in JavaScript. It iterates through a collection in its' pure form. It consists of 4 sections.
- Initialization
- Conditional
- Increment
- Loop body/statements

```
	for (let index = 0, numberOfItems = collection.length; index < numberOfItems; index++) {
		// do something while the index is smaller than numberOfItems.
	}
``` 

> Note: Unless your collection is dynamic, make sure you initialize the index, and ceiling index inside the initialization section. Otherwise JavaScript will evaluate the `collection.length` each time it goes through the loop. Even small this will have a performance impact.

> Note: Even though you can initialize the index, ceiling index outside the loop, you should always initialized inside the initialized section, unless you have a very good reason. The scope of the variables when used with left will be within the loop. Otherwise, the variables declared will be relative scope until the code block is executed. This might cause some hard to find errors.

> Note: Even though `for` loop usually used to run through collections it is not always the case. On the other hand `while` and `do/while` loop is usually not used with indexes.

> Note: Avoid as much as possible nested loops. This has an exponential performance impact. Once of my mentors told me "Remember each time you use a nested loop a puppy dies".


---
[Go back to ToC](../README.md)
