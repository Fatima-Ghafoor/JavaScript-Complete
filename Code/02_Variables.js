/* DECLARING VARIABLES */
/* 1) var */
var FullName = "Sara Ahmed";    //Declare and initialize
console.log(FullName);  //Print the output: Sara Ahmed

FullName = "Aliza Khalid";  //Re-assign the value
console.log(FullName);  //Print the output: Aliza Khalid

var FullName = "Sameer Ali";    //Re-declare (allowed with var)
console.log(FullName);  //Print the output: Sameer Ali

var FirstName;  //Declare
FirstName = "Amna"; //Initialize
console.log(FirstName); //Print

/* 2) let */
let Age = 26;   //Declare and initialize
console.log(Age);   //Print the output: 26

Age = 29;   //Re-assign the value
console.log(Age);   //Print the output: 29

let City;   //Declare
City = "Seoul"; //Initialize
console.log(City);  //Print

//Cannot re-declare the variable with 'let'

/* 3) const */
const StudentName = "Jahanzaib Ali";
console.log(StudentName);

//Cannot re-declare or re-assign the value
//Must be initialize at the time of declaration

/* VARIABLE NAMING RULES */
// 1) Variable names cannot start with numbers.
// 2) Only letters, digits, underscore and dollar is allowed.
// 3) No space allowed in variable names.
// 4) Variables are case-sensitive.
// 5) Cannot use keywords as varible names.