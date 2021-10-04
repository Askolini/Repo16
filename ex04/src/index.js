class Pets {
    constructor(name, legs) {    
        this.name = name;
        this.legs = legs;
    }


    walk() {
        var numberOfLegs = dog.name + " is walking on " + dog.legs + " legs";
        return numberOfLegs;
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs);
        
    }

    bark() {
        var dogSay = dog.name + " says WUF-WUF"
        return dogSay;
    }

}

let dog = new Dog("Pujdo", 4);

console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}