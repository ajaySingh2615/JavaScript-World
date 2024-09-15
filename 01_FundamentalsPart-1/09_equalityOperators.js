const prompt = require("prompt-sync")();

const age = 18;

if (age === 18) console.log("You just become an adult");

const favourite = Number(prompt("What's your favourite number:"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("23 is a amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 7 or 23");
}
