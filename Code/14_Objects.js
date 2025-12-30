/* CREATING OBJECTS */

// 1) First Method: Create Object with properties directly - most common way.
const person = {
    fullName: "Sara Khalid",
    age: 33,
    email: "sara@gmail.com"
};

// 2) Second Method: Create empty Object, then add properties.
const student = {};
student.fullName = "Ayesha Ahmed";
student.age = 25;
student.email = "ayesha@gmail.com";

// 3) Third Method: Using new Object() - exists, but rarely used.
const book = new Object();
book.title = "Atomic Habits";
book.author = "James Clear";
book.pages = 300;

/* ACCESSING PROPERTIES */

// 1) First Method: Do Notation.
console.log(book.author);

// 2) Second Method: Bracket Notation.
// Use-case: Property with spaces, dot notation may break here.
console.log(book["author"]);

/* ADDING & REMOVING PROPERTIES */

// 1) Adding Property:
book.genre = "self-help";   //property can be simply added like this
console.log(book.genre);

// 2) Removing Property:
console.log(book);  //Print object before deleting the property
delete book.pages;
console.log(book);  //Print object after deleting the property

/* OBJECT METHODS */
// An object method is simply a function that is stored as a property inside an object. It allows the object to 'do something' using its own data.

const employee = {
    fullName: "Faiza Nasir",
    age: 29,
    department: "marketing",
    greet: function(){
        console.log("Hello, my name is " + this.fullName);
    }
};
employee.greet();

/* 'THIS' KEYWORD */
// The 'this' keyword refers to the current object that is calling the method. Inside an object method, 'this' gives access to that object's own properties.

const car = {
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    showInfo: function(){
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
};
car.showInfo();

/* NESTED OBJECT */
// A nested object means an object that contains another object inside it. We use nesting when some data belongs together in groups.

const newStudent = {
    fullName: "Zainab Akram",
    year: "first",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};
console.log(newStudent.address.city);

/* OBJECT CLONING */
// Object cloning means, making a copy of an object so changes in the copy don't affect the original.

// 1) First Method: Using Object.assign().
const user = {
    name: "Haroon",
    password: 112233,
    age: 31
};

const userCopy = Object.assign({}, user);
console.log(user);
console.log(userCopy);

userCopy.name = "Faizan";   // Changing the name property of cloned object
userCopy.age = 33;  // Changing the age property of cloned object

console.log(userCopy);

// 2) Second Method: Using spread syntax
const country = {
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia"
};

const countryCopy = {...country};   // Cloning the object

console.log(country);
console.log(countryCopy);

countryCopy.name = "South Korea";   // Changing the name property of cloned object
countryCopy.capital = "Seoul";  // Changing the capital property of cloned object

console.log(countryCopy);

/* OBJECT COMPARISON */
// Objects are compared by reference. Two different objects with the same data are not equal, only references to the same object are equal.

// Example (for NOT EQUAL OBJECTS):
const object1 = { name: "Ayesha" };
const object2 = { name: "Ayesha" };
// They are not equal, because, two objects are only equal if they are the same object in memory, not just because they look the same.

// Example (for EQUAL OBJECTS):
const object3 = { name: "Umer" };
const object4 = object3;
// Here, 'object3' & 'object4' are not two objects, they are two names for the same object.