function mySum(...arrs) {
    let sum = 0;
    for (let arr of arrs) {
      sum += arr;
    }
    return sum;
  };

// function mySum(a, b) {
//   return a + b;
// }

module.exports = mySum;

// console.log(mySum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// export default mySum ;
