//for in vs for of
  //recall object is a set of key value pair
   //example
   const myObject = {
      id: 0,
      name: 'Sam',
      tel: 112
   };
   //in the above object id name and tel are properties while 0 sam and 112 are values
     //back to our loops 
      //for in loop
      /*
      for (variable in object) {
        //execute code
      }
      //the above is a general sythax for for in loop
      */

      //example 
       for (let subObject in myObject) {
        console.log(subObject);
       }//this show properties
       //to see the values reference the object
       for (let subObject in myObject) {
        console.log(myObject[subObject]);
       }//this is how to access values

       //for of iterate in a collection of values such as an array
       /*
       //general syntax
       for (variable of iteratable) {
        executa code
       }
       */
      //example 

      const digits = [0,1,2,3,4,5,6,7,8,9];

      for (let digit of digits){
        console.log(digit);
      }//here it will loop though the array and log all values of an array

      //conclusion for in is for objects and for of is for an array

      //The JavaScript Switch Statement
      //Use the switch statement to select one of many code blocks to be executed.

      //Syntax
 switch(expression) {
          case x:
            // code block
            break;
          case y:
            // code block
            break;
          default:
            // code block
        }
 //This is how it works:
 /*
 The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/

//example

/*
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:
*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//The result of day will be: agiven day you are on