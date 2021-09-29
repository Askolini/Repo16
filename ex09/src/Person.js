class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        var personInfo = "Name: " + this.name + "," + " email: " + this.email + "," + " age: " + this.age;
        return personInfo;
    }
}
// var personInfo = "Name: " + this.name + "," + " email: " + this.email + "," + " age: " + this.age;
console.log(person.getPerson());

module.exports = Person;
