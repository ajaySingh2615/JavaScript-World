function makeTea(typeOfTea) {
  return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);
