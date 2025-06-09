//Step 2: If-else Condition
let number = 7;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Step 3: switch statement
let day = 4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}
//Step 4.1: For loop
console.log("\n--- For loop ---");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//Step 4.2: While loop
console.log("\n--- While loop ---");
let i = 1;
while (i <= 5) { 
  console.log(i);
  i++;
}
//Step 4.3: Do...While Loop
console.log("\n--- Do...While loop ---");
let j = 1; 
do {
  console.log(j);
  j++;
} while (j <= 5);
//Step 5.1: Control Flow with break
console.log("--- Loop with break (stops at 3) ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
//Step 5.2: Control Flow with continue
console.log("\n--- Loop with continue (skips 3) ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// Step 6: Scope and Context
let globalVar = "I'm a global variable!";
function scopeExample() {
    // Local Scope (within scopeExample function)
    let localVar = "I'm a local variable!";
    console.log("Inside scopeExample function:");
    console.log("Accessing globalVar:", globalVar); // Accessible
    console.log("Accessing localVar:", localVar);   // Accessible
    // Trying to access a variable declared in another function's local scope (will fail)
    // console.log("Accessing anotherLocalVar (will cause an error):", anotherLocalVar); 
    // Uncommenting the above line will result in a ReferenceError
}

function anotherFunction() {
    let anotherLocalVar = "I'm local to anotherFunction!";
    console.log("\nInside anotherFunction:");
    console.log("Accessing globalVar:", globalVar); // Accessible
    // console.log("Accessing localVar (will cause an error):", localVar); 
    // Uncommenting the above line will result in a ReferenceError
}

// Call the functions to see the output
scopeExample();
anotherFunction();
console.log("\nOutside any function (Global Scope):");
console.log("Accessing globalVar:", globalVar); // Accessible
// console.log("Accessing localVar (will cause an error):", localVar); 
// Uncommenting the above line will result in a ReferenceError
// console.log("Accessing anotherLocalVar (will cause an error):", anotherLocalVar); 
// Uncommenting the above line will result in a ReferenceError

  
