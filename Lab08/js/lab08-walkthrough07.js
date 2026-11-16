// Exercise 8.7 – Arrays
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<h2>Days of the week</h2><table border='1'><tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i].length < 4 ? daysOfWeek[i] : "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr></table>");

document.write("<h2>Calendar – month starts on Sunday</h2>");
document.write("<table border='1' cellpadding='8'><tr>");
for (var d = 0; d < daysOfWeek.length; d++) document.write("<th>" + daysOfWeek[d] + "</th>");
document.write("<th>Sat</th></tr><tr>");
for (var blank = 0; blank < 0; blank++) document.write("<td></td>");
for (var date = 1; date <= 30; date++) {
    document.write("<td>" + date + "</td>");
    if (date % 7 === 0 && date !== 30) document.write("</tr><tr>");
}
for (var empty = 0; empty < (7 - (30 % 7)) % 7; empty++) document.write("<td></td>");
document.write("</tr></table>");
