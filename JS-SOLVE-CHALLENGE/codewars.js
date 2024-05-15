//challenge one reverse this two words //world and //word
//Complete the solution so that it reverses the string passed into it.

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