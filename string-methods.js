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
