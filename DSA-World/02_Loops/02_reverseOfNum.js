// reverse a number

function reverseNumber(num) {
  let reversed = 0;

  if (num < 0) return -1;

  num = Math.abs(num);

  while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

function reverseNumberUsingInBuildFunctions(num) {
  let reversed = num.toString().split("").reverse().join();
  return Math.sign(num) * parseInt(reversed);
}

let num = 1234;
let reversedNum = reverseNumber(num);
console.log(reversedNum);
