let num1 = 10;
let num2 = 3;
let num3 = "10";
let value1 = true;
let value2 = false;
let Age = 18;

/* ARITHEMATIC OPERATORS */
/* 1) Addition */
var result = num1 + num2;   //Add both numbers
console.log("num1 + num2 = ", result);  //Output: 13

/* 2) Subtraction */
var result = num1 - num2;   //Subtract number two from number one
console.log("num1 - num2 = ", result);  //Output: 7

/* 3) Multiplication */
var result = num1 * num2;   //Multiply both numbers
console.log("num1 * num2 = ", result);  //Output: 30

/* 4) Division */
var result = num1 / num2;   //Divide both numbers
console.log("num1 / num2 = ", result);  //Output: 3.3333

/* 5) Modulus */
var result = num1 % num2;   //Divide both numbers and gives the remainder
console.log("num1 % num2 = ", result);  //Output: 1

/* 6) Exponentiation */
var result = num1 ** num2;  //
console.log("num1 ** num2 = ", result); //Output: 1000

/* ASSIGNMENT OPERATORS */
/* 1) = */
result = num1;  //Assign the value of second variable to first variable
console.log("Value of num1 is assigned to result: ", result);   //Output: 10

/* 2) += */
num1 += num2;   //Add number two to number one and update number one
console.log("num1 = num1 + num2 ", num1);   //Output: 13

/* 3) -= */
num1 -= num2;   //Subtract number two from number one and update number one
console.log("num1 = num1 - num2", num1);    //Output: 10

/* COMPARISION OPERATORS */
/* 1) == */
var result = num1 == num3;  //Compares only values, ignores type
console.log(result);    //Output: true

/* 2) === */
var result = num1 === num3; //Compares both value and type
console.log(result);    //Output: false

/* 3) != */
var result = num1 != 5; //Checks if the values are different, ignores type
console.log(result);    //Output: true

/* 4) !== */
var result = num1 !== num3; //Checks if the values or type is different
console.log(result);    //Output: true

/* 5) > */
var result = num1 > num2;   //Check if first value is greater than second
console.log(result);    //Output: true

/* 6) < */
var result = num1 < num2;   //Check if first value is less than second
console.log(result);    //Output: false

/* 7) >= */
var result = num1 >= num2;  //Check if first value is greater than or equal to second value
console.log(result);    //Output: ture

/* 8) <= */
var result = num1 <= num2;  //Check if first value is less than or equal to second value
console.log(result);    //Output: false

/* LOGICAL OPERATORS */
/* 1) AND */
var result = value1 && value2;  //True if both conditions are true
console.log(result);    //Output: false

/* 2) OR */
var result = value1 ||  value1; //Ture only if one condition is true
console.log(result);    //Output: true

/* 3) NOT */
var result = !value1;   //Reverse the boolean value
console.log(result);    //Output: false

/* TERNARY OPERATOR */
var result = (Age >= 18) ? "Eligible to vote" : "Not Eligible to vote";
console.log(result);

/* UNARY OPERATORS */
/* 1) Increment Operator */
var result = num1;
console.log(result++);  //Post-increment: Prints 10, then become a 11
console.log(result);

var result = num1;
console.log(++result);  //Pre-increment: Becomes 11 first, then prints 11

/* 2) Decrement Operator */
var result = num1;
console.log(result--);  //Post-decrement: Prints 10, then become a 9
console.log(result);

var result = num1;
console.log(--result);  //Pre-increment: Becomes 9 first, then prints 9