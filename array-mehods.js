let num = [1,3,5,7,9];
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
console.log(num.find(number => number < 12));



