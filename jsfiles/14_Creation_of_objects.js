class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Human: " + this.name + ". Age: " + this.age + ". Is happy: " + this.happiness)
    }
}

var alex = new Person("Alex", 22, true);
console.log(alex.name);
console.log(alex.age);
alex.name = "Aleksandr"
console.log(alex.name);
console.log(alex.info())