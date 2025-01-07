// Prompting the user to enter values for a, b, and c
let a = parseInt(prompt("Enter the value for a:"));
let b = parseInt(prompt("Enter the value for b:"));
let c = parseInt(prompt("Enter the value for c:"));

// Using if-else ladder to find the greatest value
if (a >= b && a >= c) {
    console.log("The greatest value is: " + a);
} else if (b >= a && b >= c) {
    console.log("The greatest value is: " + b);
} else {
    console.log("The greatest value is: " + c);
}
