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
<<<<<<< HEAD

// var person = new Person("{name}", "{email}", "{age}");
// console.log(person.getPerson());
=======
// var personInfo = "Name: " + this.name + "," + " email: " + this.email + "," + " age: " + this.age;
console.log(person.getPerson());
>>>>>>> 201a61a62d8fa486a45fd2cec9373265c9a4eb38

module.exports = Person;
