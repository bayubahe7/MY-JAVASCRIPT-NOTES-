//challenge one reverse this two words //world and //word
//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'
function solution(str){
  let reversed = str.split('').reverse().join('');
   return reversed;
 }
 
 console.log(solution('world'));
 console.log(solution('word'));