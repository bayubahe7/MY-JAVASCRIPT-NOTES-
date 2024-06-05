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

/*
DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

//my solution
const stringToNumber = function(str){
  let result = 0;
  if(typeof str === 'string'){
   result = Number(str);
  }
  return result;
}

//other variation

/*
var stringToNumber = function(str){
  return parseInt(str, 10);
}
*/
/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

//solution my answer

//perfect sqaure is a number in which its square root is an integer

var isSquare = function(n){
  let m =  Math.sqrt(n); //square root
  if(Number.isInteger(m) === true) {
    return true;
  } else {
     return false;
  }
 
}

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

//my answer 

function past(h, m, s){
  //converting hours minutes and seconds to millisecond
  const msPerSec = 1000;
  const msPerMin = msPerSec * 60;
  const msPerHour = msPerMin * 60;
  
  //converting given time to milliseconds
  const msInHour = h * msPerHour;
  const msInMin = m * msPerMin;
  const msInSec = s * msPerSec;
  
  //total milliseconds
  const totalMilliSecs = msInHour + msInMin + msInSec;
  return totalMilliSecs;
}

// solution from the other side

function past(h, m, s){
  // Create a Date object for the current date and set its time to the given hours, minutes, and seconds
  const setTime = new Date().setHours(h, m, s);
  
  // Create another Date object for the current date and set its time to midnight (00:00:00)
  const midnight = new Date().setHours(0, 0, 0);
  
  // Calculate the difference in milliseconds between the given time and midnight
  return Math.round(setTime - midnight);
}

// Example usage:
const h = 1;
const m = 30;
const s = 15;
console.log(past(h, m, s)); // 5415000

//7KYU challenge
/*
Discourse (1051)
DESCRIPTION:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

//my solution
function disemvowel(str) {
  let splitedStringArr = str.split('');
  let unvoweledArr = [];
  for (let character of splitedStringArr) {
    if(character === 'a' || character === 'A' ||
       character === 'i' || character === 'I' ||
       character === 'e' || character === 'E' ||
       character === 'o' || character === 'O' ||
       character === 'u' || character === 'U') {
      continue;
    } else {
      unvoweledArr.push(character);
    }
  }
  let resultStr = unvoweledArr.join('');
  return resultStr;
}

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/

//solution

//before answer let learn 'g' global flag and how it is used

/*
Syntax: To create a global regular expression, you can add the global flag g to a regular expression pattern using the following syntax: var regex = /pattern/g; Different approaches to use global regular expression in JavaScript: 


The 'g' flag stands for "global" and is used to specify that a regular expression should perform a global search. This means that the regex engine will search for all occurrences of the pattern in the input string, rather than stopping after the first match.

*/

//answer now
function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U');
 }
 //above answer is similar as:

 /*
 function DNAtoRNA(dna) {
  return dna.replaceAll('T','U');
}
*/
//to reviewed

/*
The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

*/
//solution 7kyu

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  const copy = numbers.slice();
  const smallValueIndex = copy.indexOf(Math.min(...copy));
  copy.splice(smallValueIndex, 1);
  return copy;
}
//to review it later
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/
// assisted answer

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0){ //checks if array is empty
    return[];
  }
  let countPositives = 0;
  let sumNegatives = 0;
  for (i = 0; i < input.length; i++){
    if(input[i] > 0){
      
    countPositives ++;
    } else if(input[i] < 0){
      sumNegatives += input[i];
    } 
  }
  return[countPositives,sumNegatives];
}
/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

*/
//solution
function feast(beast, dish) {
    // Check if the first letter and the last letter of the beast's name
    // match the first letter and the last letter of the dish respectively
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

//8kyu:Grasshopper - Personalized Message
/*
DESCRIPTION:
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

//my solution
function greet (name, owner) {
  let message = "";
  if (name === owner) {
    message = 'Hello boss';
    }
    else{
      message ='Hello guest'; 
    }  
    return message;
}







