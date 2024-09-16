"use strict";

// function declaration
function calcAge1(birthAge) {
  return 2037 - birthAge;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthAge) {
  return 2037 - birthAge;
};

const age2 = calcAge2(1991);
console.log(age2);

// arrow functions

const calcAge3 = (birthAge) => 2037 - birthAge;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  return 65 - age;
};

console.log(yearsUntilRetirement(1991));
