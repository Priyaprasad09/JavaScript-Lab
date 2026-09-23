
/*
    Lab Assignment 1
    Demonstration of External JavaScript
*/

// Console methods
console.log("External JavaScript is working!");

console.info("This is an information message.");

console.warn("This is a warning message.");

console.error("This is an error message.");

// User information
let userName = "Priya Prasad";
let course = "Computer Science Engineering";
let college = "Symbiosis Institute of Technology";

// Display welcome message
document.getElementById("welcomeMessage").innerHTML =
    "Welcome, " + userName + "!";

// Function to display user information
function displayUserInfo() {

    let userDetails =
        "Name: " + userName + "<br>" +
        "Course: " + course + "<br>" +
        "College: " + college;

    document.getElementById("userInfo").innerHTML = userDetails;

    console.log("User information displayed successfully.");
}