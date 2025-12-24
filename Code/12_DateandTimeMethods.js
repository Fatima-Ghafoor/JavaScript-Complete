/* CREATING DATES */

// 1) newDate(): It is used to create a Date object, which represents a specific point in time (date + time) in JavaScript.
// JavaScript does not work with dates directly, it works through the Date object.
const now = new Date(); // Creates a date object with the current date and time (basec on system clock).
const futureDate = new Date(2025, 12, 15);  // Creates a specific date (year, month, day, hour, minute, second)
console.log(futureDate);

/* GET METHODS */

// 1) getFullYear(): Returns the four digit year.
var systemDate = new Date();    // For system date
var dateResult = systemDate.getFullYear();
console.log("System year is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom date
var dateResult = customDate.getFullYear();  // Will add 1900 to 24. For 2024, write 2024.
console.log("Custom year is: ", dateResult);

// 2) getMonth(): Returns the month index (0-11) -> January = 0, December = 11.
var systemDate = new Date();
var dateResult = systemDate.getMonth(); // For system date
console.log("System month is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom date
var dateResult = customDate.getMonth();
console.log("Custom month is: ", dateResult);

// 3) getDate(): Returns the day of the month (1-31).
var systemDate = new Date();
var dateResult = systemDate.getDate(); // For system date
console.log("System day is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom date
var dateResult = customDate.getDate();
console.log("Custom day is: ", dateResult);

// 4) getHours(): Returns the hour (0-23).
var systemDate = new Date();
var dateResult = systemDate.getHours(); // For system time
console.log("System hour is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom time
var dateResult = customDate.getHours();
console.log("Custom hour is: ", dateResult);

// 5) getMinutes(): Returns the minutes (0-59).
var systemDate = new Date();
var dateResult = systemDate.getMinutes(); // For system time
console.log("System minute is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom time
var dateResult = customDate.getMinutes();
console.log("Custom minute is: ", dateResult);

// 6) getSeconds(): Returns the seconds (0-59).
var systemDate = new Date();
var dateResult = systemDate.getSeconds();   // For system time
console.log("System second is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom time
var dateResult = customDate.getSeconds();
console.log("Custom second is: ", dateResult);


// 7) getDay(): Returns the day of the week (0-6) -> Sunday = 0, Saturday = 6.
var systemDate = new Date();
var dateResult = systemDate.getDay();   // For system day
console.log("System day is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom day
var dateResult = customDate.getDay();
console.log("Custom day is: ", dateResult);

// 8) getTime(): Returns timestamp - milliseonds since Jan 1, 1970 (UTC). Useful for calculations & comparisons.
var systemDate = new Date();
var dateResult = systemDate.getTime();   // For system time
console.log("System time is: ", dateResult);
var customDate = new Date(24, 10, 10, 15, 30, 32);  // For custom time
var dateResult = customDate.getTime();
console.log("Custom time is: ", dateResult);

/* SET METHODS */

// 1) setFullYear(): Set the year of the date.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Year Before: ", customDate.getFullYear());
customDate.setFullYear(2018);
console.log("Year After: ", customDate.getFullYear());

// 2) setMonth(): Set the month of the date.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Month Before: ", customDate.getMonth());
customDate.setMonth(7);
console.log("Month After: ", customDate.getMonth());

// 3) setDate(): Set the day (1-31) of the month.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Date Before: ", customDate.getDate());
customDate.setDate(17);
console.log("Date After: ", customDate.getDate());

// 4) setHours(): Set the hour (0-23).
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Hour Before: ", customDate.getHours());
customDate.setHours(22);
console.log("Hour After: ", customDate.getHours());

// 5) setMinutes(): Set the minutes (0-59).
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Minute Before: ", customDate.getMinutes());
customDate.setMinutes(45);
console.log("Minute After: ", customDate.getMinutes());

/* FORMATTING */

// 1) toLocaleString(): Converts date and time to local readable string based on system locale.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Date, Time Format Before: ", customDate);
var formattedDate = customDate.toLocaleString();
console.log("Date, Time Format After: ", formattedDate);

// 2) toDateString(): Converts only the date part to a readable string. Time is excluded.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Date Format Before: ", customDate);
var formattedDate = customDate.toDateString();
console.log("Date Format After: ", formattedDate);

// 3) toTimeString(): Converts only the time part to a readable string. Date is excluded.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log("Time Format Before: ", customDate);
var formattedTime = customDate.toTimeString();
console.log("Time Format After: ", formattedTime);

/* TIMESTAMPS */

// Timestamp is a number that represents a specific moment in time as: Milliseconds passed since 1 January 1970, 00:00:00 UTC.
// 1) Getting the current timestamp: It shows the milliseconds that have passed since 1 Jan 1970 until this exact moment.
var dateResult = Date.now();
console.log(dateResult);

// 2) Timestamp from a Date object: Convert this human-readable date into a number the computer understands.
var customDate = new Date(2024, 10, 10, 15, 30, 32);
console.log(customDate.getTime());

/* COMPARING DATES */

// 1) Using getTime():
const firstDate = new Date(2024, 3, 11);
const secondDate = new Date(2025, 12, 28);
var dateResult = firstDate.getTime() < secondDate.getTime(); 
console.log(dateResult);

// 2) Using IF:
const expiry = new Date(2024, 11, 31);
const today = new Date();

if(today > expiry){
    console.log("Expired!");
}
else{
    console.log("Valid!");
}