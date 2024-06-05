       //JavaScript Object Methods***

//recall:
//Object methods are actions that can be performed on objects.
//A method is a function definition stored as a property value.

             //Accessing Object Methods**
  //  You access an object method with the following syntax:

          //objectName.methodName()
//If you invoke the fullName property with (), it will execute as a function:
             
//Example
 //const name = person.fullName();

 //Using JavaScript Methods**
         //1.The Object.assign():
// method copies properties from one or more source objects to a target object.

 // Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
console.log(person1);

            //2.The Object.create()
//The Object.create() creates an object from an existing object.
//Syntax: Object.create(object, properties)
//object above must be an existing object and properties	Optional they are descriptor of properties to be added or changed:

// Create an Object:
const pers = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(pers);
man.firstName = "Peter";
console.log(man);

/*
Related Methods:
Object.assign() copies properties from a source object to a target object.

Object.create() creates an object from an existing object.

Object.fromEntries() creates an object from a list of keys/values.
*/

              //3.JavaScript Object.fromEntries()**
 //The fromEntries() method creates an object from a list of key/value pairs.
 //Example
 const fruits = [
   ["apples", 300],
   ["pears", 900],
   ["bananas", 500]
 ];
 
 const myObj1 = Object.fromEntries(fruits);
 console.log(myObj1);
 //Syntax: Object.fromEntries(iterable)
 //Parameters:
//Parameter	Description
 //iterable	Optional.An iterable array or map.

             //4.Object.defineProperties()**
 //The Object.defineProperties() method adds or changes object properties.
  
 //Example
//Add properties:

// Create an Object:
const personna = {
  firstName: "John",
  lastName: "Doe"
};

// Add Properties
Object.defineProperties(personna, {
  language: {value: "en"},
  year: {value: "Hello"}
});
console.log(personna);

/*
Related Methods:
Object.defineProperty() adds or changes one property.

Object.defineProperties() adds or changes many properties.


Object.getOwnPropertyNames() returns the property names of an object.

Object.getOwnPropertyDescriptor() returns the descriptor of a property.

Object.getOwnPropertyDescriptors() returns the descriptors of all properties.

*/

//syntax:Object.defineProperty(object , property, descriptor)

//Parameters: explanation
//Parameter	Description
//object	Required.The object.
//object	Required.The property name.
//descriptor	Required.A descriptor of the properties to be added or changed:
/*
value: value
writable : true|false
enumerable : true|false
configurable : true|false
get : function
set : function
*/
          //5.Object.defineProperties()**
 //works same as Object.defineProperty() but this can add or change many

           //6.Object.getOwnPropertyNames()**
//returns the property names of an object.

//Example
// Create an Object
const personne = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get Properties
let props = Object.getOwnPropertyNames(personne);
console.log(props);// ['firstName', 'lastName', 'age', 'eyeColor'] it  returns properties as an array on property names

//Syntax
//Object.getOwnPropertyNames(object)
//Parameter	Description
//object	Required.An iterable object.

         //7.Object.getOwnPropertyDescriptor()**
//returns the descriptor of a property.
//Example
// Create an Object
const personage = {
  firstName: "Hannah",
  lastName: "Lavender",
  age: 50,
  eyeColor: "blue"
};

// Get Properties
let descriptor = Object.getOwnPropertyDescriptor(personage, "lastName");
console.log(descriptor.value);

//Syntax
//Object.getOwnPropertyDescriptor(object);

     //Object.getOwnPropertyDescriptors()**
     //returns the descriptors of all properties.
  //Example
     // Create an Object
     const person7 = {
       firstName: "John",
       lastName: "Doe",
       age: 50,
       eyeColor: "blue"
     };
     
     // Get Properties
     let descriptors = Object.getOwnPropertyDescriptors(person7);
     console.log(descriptors);

     //return object containing the proprty discrptors or property names

     



