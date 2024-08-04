//Javascript String Methods
console.log("Hello".slice(1,3)); //will cut a portion of string "el"
console.log("Hello".split('')); // split the characters and return them into an array ['H','e','l','l','o']
console.log("Hello".charAt(4)); //return 'o'
console.log("Hello".replace('llo','y')); //replace agiven part of string with new characters
console.log("Ha ".repeat(7)); //repeat string number of times
console.log("Hello".toUpperCase()); //change string to uppercase letters
console.log("HELLO".toLowerCase()); //to lowercase letter
console.log("Hello".padStart(8,'My '));//push my at the start of string "Hello" ,the number is specifying the last length of resultant string
console.log("Hello".padEnd(8,'My ')); //push my at the end of string "Hello" ,the number is specifying the last length of resultant string
console.log("Hello".startsWith('H')); //check if the string "Hello" starts with "H" and return a boolean value
console.log("Hello".endsWith('x')); //check if the string "Hello" ends with "x" and return a boolean value
console.log("Hello".includes('x')); //check if the string "Hello" contains "x" and return a boolean value
console.log("Hello".indexOf("l")); //return the first index of l in string "Hello"
console.log("Hello".lastIndexOf('l'));//return the last index of l in string "Hello"

console.log("Hello".search('e')); //return the index of the character 'e'
console.log(" Hello ".trim()); //remove padding of the string " Hello "
console.log(" Hello".trimStart());
console.log("Hello ".trimEnd());
console.log("Hello".concat(' World!'));
console.log("Hello".substring(2,4));
console.log("Hello".match(/[A-Z]/g));//to learn it after all

//More comprehensive string Methods

/*
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

//The charAt() method returns the character at a specified index (position) in a string:

//Example
let text = "HELLO WORLD";
let char = text.charAt(0);//H

//The at() method returns the character at a specified index (position) in a string.
//ES2022 introduced the string method at():

//Examples
//Get the third letter of name:

const name1 = "W3Schools";
let letters = name1.at(2);

//Get the third letter of name:

const name4 = "W3Schools";
let letter = name4[2];

/*
Note
The at() method is a new addition to JavaScript.
It allows the use of negative indexes while charAt() do not.
Now you can use myString.at(-2) instead of charAt(myString.length-2).
*/

//Property Access [ ]
//Example
let texte = "HELLO WORLD";
let charct = text[0];
/*
Note
Property access might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/
