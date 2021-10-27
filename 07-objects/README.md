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

## Prototype
JavaScript uses Prototypal inheritance, in reality it is a Prototype Oriented Programming Language with is very similar to Object Oriented languages especially the latest versions.

In JavaScript Objects, Functions, and Classes inherit from the Prototype object. 

Even most of the time Prototype object contains methods, some time it could also contain fields. 

## Object behaviors
Objects in JavaScript are dynamic and mutable. If you recall from **types** section if passed as a parameter they can updated unlike the primary types. They can also represent static data structures as well.

> Note: Objects can have methods properties as well, but since the introduction of classes this should be avoided if possible and keep Object as pure data structures. Said that there will be always valid cases and exceptions to this rule.

Property Names are String or Symbols. There can only one property with the same name.



---
[Go back to ToC](../README.md)
