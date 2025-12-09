/* USE OF 'BREAK' IN FOR LOOP */
for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;  //stop the loop completely when i becomes 5
    }
    console.log(i);
}

/* USE OF 'CONTINUE' IN FOR LOOP */
for(let j = 1; j <= 10; j++){
    if(j === 5){
        continue;   //skip printing 5
    }
    console.log(j);
}

/* WHEN & WHEN NOT TO USE 'BREAK' */

// Use When:
// 1) When you need to stop a loop immediately after a condition is met.
// 2) When you have found the required result and continuing the loop is unnecessary.
// 3) Useful in search operations, menu options, or infinite loops to exit safely.

// Not Use When:
// 1) When loop completion is important for correct logic.
// 2) When stopping early can cause the incomplete calculations or skipped data.
// 3) When it makes the code harder to read or creates unexpected exits.

/* WHEN & WHEN NOT TO USE 'CONTINUE' */

// Use When:
// 1) When you want to skip specific iterations but keep the loop running.
// 2) Useful for filtering out invalid data, skipping empty values, or ignoring certain cases.
// 3) Helps avoid deeply nested if-else blocks.

// Not Use When:
// 1) When skipping iterations can lead to missed processing that's required.
// 2) When overused, as it can make loops harder to understand.
// 3) When the logic can be written more clearly without it.