/*
         **JavaScript Object Properties**

An Object is an Unordered Collection of Properties
Properties are the most important part of JavaScript objects.

Properties can be changed, added, deleted, and some are read only.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

          //Accessing JavaScript Properties**
//The syntax for accessing the property of an object is:

// objectName.property
let age1 = person.age;

//or

//objectName["property"]
let age2 = person["age"];

//objectName[expression]
let age3 = person[x];

//are are the same number following variable name is preventing naming conflicts

           //Adding New Properties**
//You can add new properties to an existing object by simply giving it a value:

//Example
person.nationality = "English";

//Deleting Properties
//The delete keyword deletes a property from an object:
delete person.age;
//or delete person["age"];

/*
Note:
The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.
*/

               //Nested Objects**
//Property values in an object can be other objects:

//Example
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
//You can access nested objects using the dot notation or the bracket notation:
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
