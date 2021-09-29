var Person = require("./Person.js");

var person = new Person("John", "john@example.com", "35");
console.log(person.getPerson());

module.exports = Person;