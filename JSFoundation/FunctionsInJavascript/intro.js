function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

const myTea = makeTea("lemon tea");
// console.log(myTea);

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

function greet() {
  console.log(this);
}

// greet();

const greet1 = () => console.log(this);
greet1();
