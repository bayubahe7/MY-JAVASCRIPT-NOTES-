//8kyu
/*Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
//my answer
function setAlarm(employed, vacation){
    //EMPLOYED,NO VACATION = TRUE ELSE FALSE
      if(employed === true && vacation === false){
        return true;
      } else{
        return false;
      }
    }
//other warriors
const setAlarm = (employed, vacation) => employed && !vacation;//arrow function and not operator

function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false; // not operator and ternary operator
  }
  /*
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

//my answer
function doubleChar(str) {
    // Your code here
    let result = "";
    for (let i = 0; i < str.length; i++){
      result += str[i] + str[i]
    }
    return result;
  }
  //other warriors
  const doubleChar = (str) => str.split("").map(c => c + c).join(""); //played  with array
  
  //8kyu
  /*
  Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
//my answers

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//or
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//very clean version
const goals = (a,b,c) => a + b + c;

//8kyu
/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/
//my proposed answer

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (2 * sonYearsOld))
 }
 