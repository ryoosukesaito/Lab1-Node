const mySum = require("./mySum.js");

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = mySum(...myArr);

// console.log(mySum(...myArr));
console.log(result);

const mySecondArr = myArr.map((n) => n * 2);
console.log(mySecondArr);

let aveSecondArr = mySecondArr.filter(
  (ave) => ave > mySecondArr.reduce((x, y) => x + y) / myArr.length
);
console.log(aveSecondArr);

setTimeout(() => {
  console.log("Goodbye!");
}, 3000);

const Employee = {
  name:"John",
  email: "john.doe@gmail.com",
  department: "Accounting",
  startDate: "2022-12-01"
};

let  {name , email} = Employee;
const Person = {name,email};
console.log(Person);
