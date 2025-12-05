let dayNumber = 3;
let dayName;

/* USE OF SWITCH CASE */
switch(dayNumber){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        "Invalid day number!";
}
console.log(dayName);

/* DIFFERENCE BETWEEN IF ELSE & SWITCH CASE */

// 1) Purpose:
// If Else: used for complex conditions - ranges, comparisons, multiple logical operations.
// Switch: used when you are comparing one value against multiple fixed options.

// 2) Syntax Simplicity:
// If Else: becomes lengthy when there are many conditions.
// Switch: is cleaner and more readable for many fixed cases.

// 3) Type of Conditions:
// If Else: support ranges (score > 90), logical operations (&&, ||), complex expressions.
// Switch: only checks strict equality (===) between the expression and each case.

// 4) Readability:
// If Else: use when your conditions are more complex and cannot be simplified.
// Switch: use when you have many options of the same variable.