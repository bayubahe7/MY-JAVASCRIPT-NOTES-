let num = [1,3,5,7,9];
const divEl = document.getElementById('demo');
const ulEl = document.querySelector('#ul-el');
divEl.style.display = "block";
console.log(ulEl);
//const liEl = document.getElementsByClassName('li-ul');
ulEl.innerHTML = `<li class="li-el"> let num = [1,3,5,7,9];</li>`;

ulEl.innerHTML += `<li class="li-el">num.length: ${num.length}</li>`;

 
console.log(num.at(1)); //return the number at index 1 which is 3 in our case
num.push(10); //add 10 in the array at the end of array
console.log(num);
num.pop(); //remove last element in the array
console.log(num);
num.shift(); //remove first element in the array
console.log(num);
num.unshift(); //add  element to the beginning of array
console.log(num);
//num.fill(7); //take the array and fill every element with the number you give it
//console.log(num);
console.log(num.reverse()); //sort in descending order
console.log(num.includes(2));//check if the array contain a specified value and return a boolean value
console.log(num.map(number => number * 2)); //return new array with each element doubled
console.log(num.filter(number => number < 12)); //filter the array and return new array with few numbers according to the set condition.
console.log(num.find(number => number < 12)); // find first match

console.log([1,2,3].indexOf(1)); //checking an index of agiven value in the array
console.log([1,2,4].map((num) => Math.pow(num,2)));
console.log([1,2,5].every((num) => num > 0)); //true
console.log([1,3,5].some((num) => num === 3)); //check if some value is equal to 3 and this is true and return true;

//Syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// currentIndex and arr are optional values

//Array iteration Methods:

//1.forEach
const testArray = [1,2,3];
let total = 0;
testArray.forEach((num) => {
    total += num;
    return total;
});
console.log(total);//6

//2.map

const doubledArr = testArray.map((item) => {
    return item *2;
});
console.log(doubledArr);//[ 2, 4, 6 ]

//3.filter
const filteredArr = testArray.filter((num) => {
    return num < 3;
});
console.log(filteredArr);//[ 1, 2 ]

//4.every

const boolcheck = testArray.every((num) => num > 1);
console.log(boolcheck);//false

//5.some
const boolchecker = testArray.some((num) => num > 1);
console.log(boolchecker);//true

//6.reduce
const totalOfArr = [1,2,3,7,9,8].reduce((total,item) => {
    return total +item;
    },0);
console.log(totalOfArr);//30
//in above function we set total to zero and first item will be at index zero
//but if we haven't set zero the total will initial be first value in the array and the first item will be at index one;
//7.find
const found = [1,2,3,7,8].find((value) => {
    return value === 7;
});
console.log(found); //7 if no value is equal 7 in array will return undefined
//findIndex

//work as find but instead of finding actual value return its index
const foundIndex = [1,2,3,7,8].findIndex((value) => {
    return value === 7;
});
console.log(foundIndex); //return index at which value 7 is at which is index 3 if no value is equal 7 in array will return -1;


//other two important methods
//9. for in 

const posts = {
    'id': 1,
    'title': 'post title',
    'body': 'post body'
}
for (let post in posts) {
    console.log(posts[post]);
}//post is variable we created in loop and save id title and body in it
/*
1
post title
post body
*/

//10. for of 

const numbers = [1,2,4,6,7];
for (let number of numbers) {
    console.log(number); //1,2,4,6,7
}
// above loop through array and save every value in inloop variable number 


