var Person = require("./Person.js");

let person;
person = new Person("John", "john@example.com", "35");
console.log(person.getPerson());

module.exports = Person;