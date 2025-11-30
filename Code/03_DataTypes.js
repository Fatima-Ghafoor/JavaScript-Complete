/* PRIMITIVE DATA TYPES */
/* 1) String */
let FullName = "Sadia Khan";    //Stores text data
console.log(FullName);

/* 2) Number */
let Age = 33;   //Stores integers and floating-point numbers
console.log(Age);

/* 3) Boolean */
let isStudent = true;   //Stores true or false values
console.log(isStudent);

/* 4) Null */
let Remarks = null; //Stores an intentional empty value
console.log(Remarks);

/* 5) Undefined */
let Section;    //A variable declared but not assigned a value yet
//not-assigned = undefined

/* 6) BigInt */
let BigNumber = 3.141592653589793;  //Stores very large integers beyond number limit
console.log(BigNumber);

/* 7) Symbol */
let UniqueID = Symbol("ID");    //Stores a unique and immutable value (often used as object keys)
console.log(UniqueID);

/* NON-PRIMITIVE DATA TYPES */
/* 1) Object */
let person = {
    fullname: "Sam Locke",
    Age: 18
};

/* 2) Array */
let marks = [10, 20, 30, 40, 50];

/* 3) Function */
function greet(){
    console.log("Hello World!");
}

/* TYPE CHECKING */
/* Checking the data types of values */
console.log(typeof "Hello World!");
console.log(typeof 34);
console.log(typeof 3.141592653589793);

/* Checking the data types of variables */
console.log(typeof FullName);
console.log(typeof isStudent);
console.log(typeof Remarks);    

/* TYPE CONVERSION */
/* Implicit Conversions */
let result = "5" + 10;  //String + Number -> Number is converted to string
console.log(result);    //Output: 510

let resultTwo = "10" - 5;   //Number - String -> String is converted to number
console.log(resultTwo); //Output: 5

let resultThree = true + 2; //Boolean conversion in arithematic
console.log(resultThree);   //Output: 3

/* Explicit Conversions */
let num = Number("123"); //Converts string to number
console.log(num);   //Output: 123

let str = String(456);  //Converts number to string
console.log(str);   //Output: "456"

let bool = Boolean(0);  //Converts value to boolean
console.log(bool);  //Output: false