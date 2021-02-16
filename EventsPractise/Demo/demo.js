/*work with emploie details like 
  gender details 
  departem
  basic salary 
  calculate the total salary ot the employee like totalsal= basicsal+ pf+ hra
  where
  pf is 12 % of  basic sal

  hra is 24% of basic salary
*/

let dept;

let gender = "Male";

var foo = 45;
var bar = '' + foo;

console.log(bar);
console.log(typeof (bar));

console.log("Gender is :" + gender);

let basic_Salery = 200;
let pf = 12 * 200 / 100;
let hra = 24 * 200 / 100;

let Total = basic_Salery + pf + hra;

console.log(`Total Salery is : ${Total} Gender is "${gender}" `);