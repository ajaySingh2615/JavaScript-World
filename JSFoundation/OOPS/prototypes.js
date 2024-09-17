let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomHardWare = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);
console.log(`Generic car `, genericCar);
console.log(`Tesla car `, Object.getPrototypeOf(tesla));
