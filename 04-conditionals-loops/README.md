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

>> Note: Very important to escape each `case` with a `break` keyword. Otherwise, the JavaScript will check each `case`. We even use `break` in the `default` case.

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

---
[Go back to ToC](../README.md)
