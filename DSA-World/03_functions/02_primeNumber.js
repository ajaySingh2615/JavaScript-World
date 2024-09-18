// prime number

function isPrimeNumber(num) {
  if (num < 2) return false; // 0, 1, and negative numbers are not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

let num = 10;

for (let i = 1; i <= num; i++) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
}
