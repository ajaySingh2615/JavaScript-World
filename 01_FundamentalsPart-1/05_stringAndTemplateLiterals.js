const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a" + (year - birthYear) + " years olds ." + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
