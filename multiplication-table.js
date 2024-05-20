/*
function multiTable (n) {
  let range = 10;
  let result = 0;
  console.log(`Multiplication of ${n}`);
  for (let i = 1; i <= range; i++) {
  result = (i * n);
  console.log(i + "*" + n + "=" + result);
  }
  return result;
}

multiTable(1);
multiTable(2);
multiTable(3);
multiTable(4);
multiTable(5);
multiTable(6);
multiTable(7);
multiTable(8);
multiTable(9);
multiTable(10);
*/

for ( i = 0; i < 11; i++) {
  if(i > 0){
    console.log('...................................');
  }
  for (let n = 1; n < 11; n++) {
    console.log(`${i} x ${n} = ${i} * ${n}`);
  }
}