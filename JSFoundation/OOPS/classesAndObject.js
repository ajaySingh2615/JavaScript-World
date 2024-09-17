let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 23);
// console.log(john);

// prototype and prototype chain
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.moblie = function () {
  return `Custom method ${this}`;
};

let myArr = [1, 2, 3];
// console.log(myArr.moblie());

// classes
class Vehical {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehical {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine..`;
  }
  brewCoffee() {
    // complex calculations
    return `brewing coffee`;
  }
  pressStartButton() {
    const startMessage = this.start();
    const brewMessage = this.brewCoffee();
    return `${startMessage}\n${brewMessage}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.pressStartButton());

// Polymorphism
class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguin can't fly";
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static methods

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCal = new Calculator();
// console.log(Calculator.add(2, 3));

// Getters and Setters

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);
emp.salary = -60000;
