// Q5
// let no = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let no3 = [];

// for method
// for (i = 1; i <= no.length; i++) {
//   no2 = 2 ** i;
//   no3.push(no2);
// }
// console.log(no);
// console.log(no3);

// foreach method
// no.forEach((power) => {
//   no3.push(2 ** power);
// });
// console.log(no);
// console.log(no3);

// map method
// let no2 = no.map(function (acc) {
//   return 2 ** acc;
// });

// console.log(no);
// console.log(no2);

// -------------------------------------------------

// Q6
// let no = [1, 2, 3, 4, "ali", 5, 6, "ehab"];

// let no2 = no.map(function (n) {
//   if (n % 2 === 0) {
//     return "even";
//   } else if (isNaN(n)) {
//     return "N/A";
//   } else if (n % 2 !== 0) {
//     return "odd";
//   }
// });
// console.log(no);
// console.log(no2);

// --------------------------------------------------

// Q7
let no = [2, 3, 4, 5, 6, 15, 8, 9, 10, 30];
let no2 = no.map(function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Fizz Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
});

console.log(no);
console.log(no2);
