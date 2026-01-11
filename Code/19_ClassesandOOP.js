/* WHAT IS OOP? */

// Object-Oriented Programming (OOP) is a way of writing code where we build programs using 'objects' that combine data (properties) and behaviour (methods) in one place. Instead of keeping variables and functions separate, OOP groups related things together, making code easier to organize, reuse, and maintain especially in large projects. In simple terms, OOP models real-world things like cars, users, or accounts as objects that "have" data and "do" actions.

/* CLASS DECLARATION */

// Class declaration is a way we define a blueprint for creating objects. A class describes what properties an object will have and what it can do, but it isn't an object by itself. When we "create" objects from a class, those objects are called 'instances'.

class classCar{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }

    start(){
        console.log(`${this.brand} is starting...`);
    }
}

const objectCar = new classCar("Toyota", "Black");  // Object declared
objectCar.start();  // Object initialized

/* CONSTRUCTOR */

// A constructor is a special method inside a class that 'runs automatically when a new object is created'. Its main job is to 'initialize the object's properties' with values, either provided during creation or default ones. Every class can have 'only one constructor', and it makes each object unique while keeping the code organized.

class classPerson{
    constructor(name, age){ // This is a constructor.
        this.name = name;
        this.age = age;
    }

    start(){
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
}

const object1 = new classPerson("Alice", 34);
object1.start();
const object2 = new classPerson("Bob", 32);
object2.start();

/* METHODS */

// Methods are 'functions defined inside a class' that describe the 'behaviour or actions' an object can perform. While the constructor sets up an object's properties, methods allow the object to 'do something' with those properties or interact with the outside world.

class classStudent{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    greet(){    // This is a method.
        console.log(`${this.name} is a student of ${this.year} year!`);
    }
}

const objectStudent = new classStudent("Nawal", "second");
objectStudent.greet();

/* INHERITANCE WITH 'EXTENDS' & 'SUPER' */

class Sports{
    constructor(name){
        this.name = name;
    }

    details(){
        console.log(`${this.name} is a game!`);
    }
}

class Basketball extends Sports{    // Child class extending on parent class 'Sports'
    constructor(name, year){
        super(name);    // Calls constructor of class Sports
        this.year = year;
    }

    time(){
        console.log(`${this.name} matches will take place in year ${this.year}!`);
    }
}

const obj_Basketball = new Basketball("Basketball", 2026);
obj_Basketball.details();
obj_Basketball.time();

/* GETTERS & SETTERS */

// Getters and Setters let us control how properties are read and updated. Instead of accessing a property directly, we use methods that look like normal properties, but they can add validation, formatting, or logic.

// Why use them?
// Protect data from being set incorrectly.
// Automatically compute values when needed.
// Keep code clean but still controlled.

class Student{
    constructor(name, year){
        this._name = name;  // underscore = "private-ish" convention
        this._year = year;
    }

    // Getter
    get name(){
        return this._name.toUpperCase();
    }

    // Setter
    set name(value){
        if(!value){
            console.log("Name cannot be empty!");
            return;
        }
        this._name = value;
    }
}

const obj_Student = new Student("Sara", "Third");
console.log(obj_Student.name);  // Sara (Getter runs)
obj_Student.name = "Aliza";  // Setter runs
console.log(obj_Student.name);  // Aiza

/* STATIC METHODS */

// Static method belong to the class itself, not to the individual objects created from it. We use them for utility or helper functions that don't depend on the data of a specific object.
// We call static methods using the 'class name', not the object.

class MathTools{
    static add(num1, num2){
        return num1 + num2;
    }

    static square(n){
        return n * n;
    }
}

console.log(MathTools.add(3, 6));   // Output: 9
console.log(MathTools.square(4));   // Output: 16

const obj_MathTools = new MathTools();  // Object of class 'MathTools'
// obj_MathTools.add(3, 6); Error: instances can't call static methods

/* ENCAPSULATION */

// Encapsulation means keeping an object's internal data hidden and protected, and allowing access only through controlled methods (like getters, setters, or other functions).
// It does not mean that, nobody can ever see that particular data. But, outside code cannot directly touch or modify the real data.
// The goal is to prevent accidental or wrong changes to important data.

class BankAccount{
    #balance;   // Private property

    constructor(owner, initialAmount){
        this.owner = owner;
        this.#balance = initialAmount
    }

    deposit(amount){
        if(amount <= 0) return;
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const obj_BankAccount = new BankAccount("Sadia", 5000);

obj_BankAccount.deposit(1000);
console.log(obj_BankAccount.getBalance());  // Output: 6000
// obj_BankAccount.#balance = 22000;    // Error: cannot access private field

/* POLYMORPHISM */

// Polymorphism means 'many forms'. In OOP, it allows different classes to have 'methods with the same name' but 'different behaviour', and JavaScript decides which one to run based on the object.

class Animal{
    speak(){
        console.log("This animal is making a sound!");
    }
}

class Dog extends Animal{
    speak(){
        console.log("The dog is barking!");
    }
}

class Cat extends Animal{
    speak(){
        console.log("The cat is meowing!");
    }
}

const obj_Animal = new Animal();
const obj_Dog = new Dog();
const obj_Cat = new Cat();

obj_Animal.speak(); // Output: This animal is making a sound!
obj_Dog.speak();    // Output: The dog is barking!
obj_Cat.speak();    // Output: The cat is meowing!