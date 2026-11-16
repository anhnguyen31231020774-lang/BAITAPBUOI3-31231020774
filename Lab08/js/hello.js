// Exercises 8.3–8.5: external JavaScript, document.write and console
document.write("<p>this text was written from JS</p>");
var count = 1;
document.write("<p>Count = " + count + "</p>");
count++;
var output = "Count = " + count;
document.write("<p>" + output + "</p>");
console.log("Exercise 8.5 – count:", count);
console.warn("This is a demonstration warning from the browser console.");
// Intentionally triggering a console.error is shown as a commented example:
// console.error("Demonstration error");
