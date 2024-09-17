const person = {
  name: "Mike",
  greet() {
    console.log(`Hi, i am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "eleven" });
boundGreet();

// bind, call and apply
