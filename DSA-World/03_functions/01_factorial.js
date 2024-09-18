// factorial of a num

function factorialOfANumber(num) {
  let result = 1;

  while (num > 0) {
    result *= num;
    num--;
  }

  return result;
}

let result = factorialOfANumber(5);
console.log(result);
