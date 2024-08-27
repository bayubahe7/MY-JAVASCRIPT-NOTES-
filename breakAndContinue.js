//The break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.
//The Break Statement
//You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
//The break statement can also be used to jump out of a loop:
//Example

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

//In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

