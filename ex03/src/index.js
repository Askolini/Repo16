class Person {
    // constructor(message) {
    //     this.message = message;
    // }
    
    static display() {
        var message = "Static method is invoked from Person class";
    }

    show() {
        
    }
}

var message = new Person();
message.show();
module.exports = Person;