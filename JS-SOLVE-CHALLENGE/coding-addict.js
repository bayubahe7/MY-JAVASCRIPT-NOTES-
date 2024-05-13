


//1.challenge: find the longest word in the string
function longestWord (string){
  let longestWord = '';
  const words = string.split(' ');
  for (let word of words){
    if (word.length > longestWord.length) {
      longestWord = word;
    }

  }
return longestWord;
}
console.log(longestWord('Peter is going to marry Ambroissie')); //Ambroissie
console.log(longestWord('merry melody family choir official')); //official
console.log(longestWord('it is not easy to learn coding and accomplish it')); //accomplish
//the above method if two words are of the same length will return the first one only

//2.challenge: capitalize the first letter of each word

function capitalizeFirstLetter (stringa){
  let words = stringa.split(' ');
  
  words = words.map((word) => {
   //let firstLetter = word.slice(0,1);
   //let restOfWord = word.slice(1);
   //firstLetter = firstLetter.toUpperCase();
   //return `${firstLetter}${restOfWord}`;
   return word.charAt(0).toUpperCase()+word.slice(1);
  });

return words.join(' ');

}
console.log(capitalizeFirstLetter('my journey in coding is in the middle of the way'));
console.log(capitalizeFirstLetter('the code you write to day must be pushed today on github'));
