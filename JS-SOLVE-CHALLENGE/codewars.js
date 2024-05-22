//challenge one reverse this two words //world and //word
//Complete the solution so that it reverses the string passed into it.
/*
//'world'  =>  'dlrow'
//'word'   =>  'drow'
function solution(str){
  let reversed = str.split('').reverse().join('');
   return reversed;
 }
 
 console.log(solution('world'));//dlrow
 console.log(solution('word'));//drow

 //convert number to reversed array of digits //35231 => [1,3,2,5,3]
 let n = 35231;
 let arrayI = n.toString();
 let arrayReversed = arrayI.split('').reverse();
 let answer = arrayReversed.map(value => parseInt(value));
 console.log(answer);// [1, 3, 2, 5, 3]

 //recall map method take every value in the array and save it back in the parameter you give it and then push it into new array
 //map filter and forEach method works on arrays

 const arr = [1,3,5,8];
 let sum = 0;
 for (let i = 0; i < arr.length; i++){
  sum += arr[i];
 }
 console.log(sum);//17


 //this is how you can loop through the array and do summation of all the number in the loop


 const stringb = 'hope';
 let stringstat = stringb.slice(0,1);
 let stringbremain = stringb.slice(1);
 const result = stringstat.toUpperCase()+stringbremain;
 console.log(result);//Hope


 //the above is how i changed hope starting letter to capital letter

arr.forEach((value) =>{
 console.log(value);
});


//recall filter method let for example in arr we want to remain with odd number
console.log(arr.filter( value => value%2 === 1));
//the above function with take every value in the arr and save it back in the value parameter as an argument and return values only which are not divisible by 2 in new array

//challenge filter  the number that are not visible by 2
//example 
const divisor = 2;
const arrayx = [1,2,3,4,5,6]; 

console.log(arrayx.filter((value) => value % divisor === 0));
*/
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.


Hint: Don't forget to check for bad values like null/undefined
*/
/*
function countSheeps(sheep) {
  let count = 0;
   for (let i=0; i < sheep.length; i++){
    if (sheep[i] === true) {
      count++;
    } else {
      count;
    }
   }
   return count;
 }
 //Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//Solution
function findAverage(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0; //for the note condition above
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}
*/

/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Note: this kata uses strict construction
*/
/*

//answer

function century (year) {
  let century = Math.ceil(year / 100); //Math.ceil () take number and round it up to the nearest number
  return century;
}
*/

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/


//solution
/*
function points(games) {
  let totalPoints = 0;
  for (let game of games) {
    const [x,y] = game.split(":").map(Number); //For each game, we split the game string into our team's score (x) and the opponent's score (y) using split(":") and convert them to numbers using map(Number).
    if (x > y) {
      totalPoints += 3;
    } else if (x === y){
      totalPoints += 1;
    } else {
      totalPoints;
    }
  }
  
  return totalPoints;
}
*/

/*

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

//solution
/*
function booleanToString(b){
  let result = "";
  if (b === true || b === false) {
   result += b.toString();
  }
  return result;
}
*/

//or 

/*
function booleanToString(b){
  if (typeof b == 'boolean') {
    return String(b);
  }
}

*/
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9
*/
/*
function squareSum(numbers){
  let summation = 0;
    for (let i = 0; i < numbers.length; i++){
     summation += numbers[i] ** 2;
    }
     return summation;
  }
  console.log(squareSum([1, 2, 2]));

  */
 /*

  //Convert boolean values to strings 'Yes' or 'No'.
  //Solution

  function boolToWord( bool ){
    if (bool === true){
      return 'Yes';
    } else if (bool === false){
      return 'No';
    }
  }

  */

  /*
  Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/
//solution

//my answer
/*

function areYouPlayingBanjo(name) {
  if(name.charAt(0) === 'R'|| name.charAt(0) === 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
//or this from other person

*/

/*
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
*/
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

*/

// solution

//my answer
/*
function sum (numbers) {
  "use strict";
let sum = 0;
for (let number of numbers) {
  if (numbers.length !== 0){
    sum += number;
  } else {
    sum;
  }
}
  return sum;  
};
*/
/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/

//my answer

var min = function(list) {
  if (list.length === 0) {
    throw new Error("Array is empty");
  }
  let minimum = list[0];
  for (let i = 1; i < list.length; i++) {  // Corrected typo here
    if (minimum > list[i]) {
      minimum = list[i];
    }
  }
  return minimum;
}

var max = function(list) {
  if (list.length === 0) {  // Added empty array check here
    throw new Error("Array is empty");
  }
  let maximum = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maximum < list[i]) {
      maximum = list[i];
    }
  }
  return maximum;
}

// Example usage:
const numbers = [3, 5, 1, 8, -2, 7];
console.log(min(numbers)); // Output: -2
console.log(max(numbers)); // Output: 8




