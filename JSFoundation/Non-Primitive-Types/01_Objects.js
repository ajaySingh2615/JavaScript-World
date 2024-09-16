let username = {
  firstName: "Ajay",
  isLoggedIn: true,
};

username.firstName = "Thakur";
username.lastName = "Singh";

console.log(username["firstName"]);
console.log(username.lastName);
console.log(username);
console.log(typeof username);
