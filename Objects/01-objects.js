/* //introduction

In real life, objects are things like: houses, cars, people, animals, or any other subjects.

A real life car has properties like weight and color:

car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.

Car objects have the same properties, but the //values differ from car to car.

A real life car has methods like start and stop:

car.start(), car.drive(), car.brake(), car.stop().

Car objects have the same methods, but the methods are performed at different times.

*/

//as we know variables are container for data types
//and objects are variables too. But objects contains many values.

//example of variable

let car1 = "Fiat";

//example of object

const car = {type:"Fiat", model:"500", color:"white"};

//we can see that object contain many values: Fiat,500,White

//N.B It is a common practice to declare objects with the const keyword.

//How can we Define a JavaScript Object?

//1.Using an Object Literal:An object literal is a list of name:value pairs inside curly braces {}.
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//Spaces and line breaks are not important. An object initializer can span multiple lines

//example

const person2 = {
  firstName: 'Hannah',
  lastName: 'Miller',
  age: 55,
  eyeColor: 'black'
};
//also we can create an empty object and assign it with values later
//This example creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);

//Note:
//name:value pairs are also called key:value pairs.
//object literals are also called object initializers.


//2.Using the new Keyword not preferred

//This example create a new JavaScript object using new Object(), and then adds 4 properties:

//Example
// Create an Object
const persone = new Object();

// Add Properties
persone.firstName = "Johannes";
persone.lastName = "Paul";
persone.age = 57;
persone.eyeColor = "black";

console.log(persone);

//Note:
//The examples above do exactly the same.But, there is no need to use new Object().For readability, simplicity and execution speed, use the object literal method.

//3.Using an Object Constructor



//**Object Properties**

//The named values, in JavaScript objects, are called properties.

/*
Objects written as name value pairs are similar to:

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl

*/

//Accessing Object Properties
//You can access object properties in two ways:
//1.objectName.propertyName
//Examples
person.lastName;
//2.objectName["propertyName"]
person["lastName"];

//** JavaScript Object Methods **

//Methods are actions that can be performed on objects.
//Methods are function definitions stored as property values.
//Example:
const personel = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
//In the example above, this refers to the "person object":

//this.firstName means the firstName property of person.
//this.lastName means the lastName property of person.

//Always Keep in Mind that In JavaScript, Objects are King.If you Understand Objects, you Understand JavaScript.

//remember objects are container for Properties and Methods.

//Properties are named Values.
//Methods are Functions stored as Properties.
//Properties can be primitive values, functions, or even other objects.

/*
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.
*/

//A primitive value is a value that has no properties or methods.3.14 is a primitive value
//A primitive data type is data that has a primitive value.

/*
JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint
*/
/*
Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
*/
/*
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;
The object x is not a copy of person. The object x is person.

The object x and the object person share the same memory address.

Any changes to x will also change person:

*/
//Example
//Create an Object
const persono = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = persono;

// Change Age in both
x.age = 10;
console.log(persono);

//You will learn a lot more about objects in 02-object-properties.js

