function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, My name is ${this.name}`);
};

let mike = new Person("mike");
mike.greet();
