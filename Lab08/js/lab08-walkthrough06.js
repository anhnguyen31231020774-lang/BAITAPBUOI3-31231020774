// Exercise 8.6 – Built-in JavaScript objects
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("<h2>String objects</h2>");
document.write("<p>stringOne = " + stringOne + "</p>");
document.write("<p>typeof stringOne = " + typeof stringOne + "</p>");
document.write("<p>typeof stringThree = " + typeof stringThree + "</p>");
if (stringOne == stringTwo) document.write("<p>stringOne == stringTwo: true</p>");
if (stringOne == stringFour) document.write("<p>stringOne == stringFour: true</p>");
if (stringOne === stringTwo) document.write("<p>stringOne === stringTwo: true</p>");
if (stringTwo === stringThree) document.write("<p>stringTwo === stringThree: true</p>");
if (stringTwo === stringFour) document.write("<p>stringTwo === stringFour: true</p>");

var dateOne = new Date();
document.write("<h2>Date</h2><p>" + dateOne + "</p>");
document.write("<h2>Math</h2>");
document.write("<p>Math.PI = " + Math.PI + "</p>");
document.write("<p>Math.sqrt(4) = " + Math.sqrt(4) + "</p>");
document.write("<p>Math.random() = " + Math.random() + "</p>");
