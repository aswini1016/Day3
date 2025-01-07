// Prompting the user to enter values for a, b, and c
let a = parseInt(prompt("Enter the value for a:"));
let b = parseInt(prompt("Enter the value for b:"));
let c = parseInt(prompt("Enter the value for c:"));

// Using switch statement to find the greatest value
let greatest;

switch (true) {
    case (a >= b && a >= c):
        greatest = a;
        break;
    case (b >= a && b >= c):
        greatest = b;
        break;
    default:
        greatest = c;
        break;
}

console.log("The greatest value is: " + greatest);
