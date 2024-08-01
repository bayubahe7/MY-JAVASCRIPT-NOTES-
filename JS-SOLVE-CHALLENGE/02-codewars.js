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
  