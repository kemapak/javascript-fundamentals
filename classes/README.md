# Classes

We can now create classes like in classical Object-Oriented languages in JavaScript. 

Constructors initialize an instance class, all setting necessary fields and calling necessary methods. 

```javascript
class Point {

// ...

	constructor(valueX, valueY) {
	
		if ('number' != typeof valueA) {
			throw new Error(Point.messageBundle.firstParameterNotANumber);
		}
		
		if ('number' != typeof valueY) {
			throw new Error(Point.messageBundle.secondParameterNotANumber);
		}
		
		this.#_x = valueA;
		this.#_y = valueY;
	}

// ...

}    
```

By default, all the properties are public, but we have not private fields and methods, as well as static fields and methods. 

Another important point is you do not need to mark your fields and methods with `this` keyword when defining. You will need it when referencing them.

```javascript
class Point {
	
	#_x = 0;
	
	// ...
	
	get x() {
		return this.#_x;
	}
	
	set x(value) {
		this.#_x = value;
	}
	
	// ...
	
	distance = function() {
		return Math.sqrt((this.#_x * this.#_x) + (this.#_y * this.#_y));
	}
	
	// ...
}	
```

Private fields and methods are pre-fixed with '#' and only accessible within the instance class or via getters and setters. Adding the prefix "_" to a private field or method will make it clear and explicit. 

If you do not have setters and getters lets' say in our Point class; since JavaScript is a dynamically typed language you can accidentally try to set a property like `point.x = 5;` but it will not change the private field '#x' instead create another field. 

For the point class setters, and getters are named as `get x() {...} and set x() {...}` so you can set the `x` and `y` like `point.x = 5;` is ok, internally it is updating the private field `#_x`.

```javascript
class Point {
	
	#_x = 0;
	#_y = 0;
	
	get x() {
	    return this.#_x;
	}
	
	get y() {
	    return this.#_y;
	}
	
	set x(value) {
		this.#_x = value;
	}
	
	set y(value) {
		this.#_y = value;
	}
     
    // ...   
}    
```    

You can access x and y like accessing a public field. You cannot access a private method. Keep in mind private methods are not easy to test.

```javascript
let aPoint = new Point(3,4);

aPoint.x = 5;
aPoint.y = 9;
```

Static methods and fields are marked by the keyword `static'

```javascript
static messageBundle = {
	firstParameterNotANumber: 'First parameter must be a number.',
	secondParameterNotANumber: 'Second parameter must be a number.'
}
```

Keep in mind static properties cannot access the instance classes properties in other word the "this". 

The static methods and fields can be accessed from instance methods or external code but must always pre-fixed with the class name.

`Point.messageBunle.firstParameterNotANumber`
