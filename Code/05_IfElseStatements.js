let age = 18;
let score = 85;
let heartRate = 110;
let waterIntake = 1.2;
let sleepHours = 5;
let steps = 3000;
let isMember = true;
let purchaseAmount = 1200;

/* IF...ELSE STATEMENT */
if(age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

/* IF, ELSE IF & ELSE STATEMENT */
if(score >= 90){
    console.log("Grade: A1");
}
else if(score >= 80 && score < 90){
    console.log("Grade: A+");
}
else if(score >= 70 && score < 80){
    console.log("Grade: A");
}
else if(score >= 60 && score < 70){
    console.log("Grade: B");
}
else if(score >= 50 && score < 60){
    console.log("Grade: C");
}
else if(score >= 40 && score < 50){
    console.log("Grade: D");
}
else{
    console.log("Fail");
}

/* IFs & ELSE STATEMENT */
if(heartRate > 100){
    console.log("Warning: High heart rate!");
}
if(waterIntake < 2){
    console.log("Warning: You need to drink more water!");
}
if(sleepHours < 7){
    console.log("Warning: You need more sleep!");
}
if(steps < 8000){
    console.log("Warning: Low activity today!");
}
console.log("Daily health check completed!");

/* NESTED IF STATEMENT */
if(isMember = true){
    if(purchaseAmount >= 1000){
        console.log("You are eligible for 20% member discount!");
    }
    else{
        console.log("You are a member, but you need to spend at least 1000 to get the discount!");
    }
}
else{
    console.log("Only members are eligible for discounts!");
}