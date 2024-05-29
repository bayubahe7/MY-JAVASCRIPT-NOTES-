/*
JavaScript Rounding Functions
The Math.abs() Method
The Math.ceil() Method
The Math.floor() Method
The Math.round() Method
The Math.fround() Method
The Math.trunc() Method
*/

//The Math.round() method rounds a number to the nearest integer.

console.log(Math.round(2.49)); //2.49 will be rounded down (2)
console.log(Math.round(2.5)); //2.5 will be rounded up (3)

//The Math.abs() method returns the absolute value of a number.
//The absolute value (or modulus) | x | of a real number x is the non-negative value of x without regard to its sign.
//this means that will return non negative number

console.log(Math.abs(-5)); //5

//Math.ceil()The Math.ceil() method rounds a number rounded UP to the nearest integer.

console.log(Math.ceil(0.3)); //1

//The Math.floor() method rounds a number DOWN to the nearest integer.

console.log(Math.floor(0.3)); //0

//floor is the oposite of ceil

//The Math.fround() method returns the nearest 32-bit single precision float representation of a number.

console.log(Math.fround(-2.60));//-2.5999999
console.log(Math.fround(-2.50));//-2.5

//The Math.trunc() method returns the integer part of a number.
//The Math.trunc() method removes the decimals (does NOT round the number).

console.log(Math.trunc(8.76)); //8
console.log(Math.trunc(107.76)); //107


