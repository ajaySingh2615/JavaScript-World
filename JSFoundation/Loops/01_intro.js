/*
Loops
    - while loop
    - do-while loop
    - for loop
    - for/in loop
    - for/of loop
    - for/each loop
*/

// challenge 1
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

// challenge 2
let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

// challenge 3
// for of loop
let nums = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of nums) {
  if (num === 4) break;
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// challenge 4
let teaType = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTea = [];

for (const tea of teaType) {
  if (tea === "herbal tea") continue;
  preferredTea.push(tea);
}
// console.log(preferredTea);

// challenge 5
// for in loop

let citiesPopulation = {
  London: 890000,
  "New York": 840000,
  Paris: 2200000,
  Berlin: 350000,
};

let cityNewPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") break;
  cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);

// challenge 6
// for-each loop

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTea = [];

teaCollection.forEach((tea) => {
  if (tea === "chai") return;
  availableTea.push(tea);
});
console.log(availableTea);
