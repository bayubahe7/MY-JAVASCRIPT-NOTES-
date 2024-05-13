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