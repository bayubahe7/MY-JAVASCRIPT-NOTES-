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

            //2.