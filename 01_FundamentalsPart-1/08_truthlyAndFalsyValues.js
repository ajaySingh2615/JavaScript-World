console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("mike"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should have a job!");
}

let hight;
if (hight) {
  console.log("Hey, Height is defined");
} else {
  console.log("Height is not defined");
}
