// Exercises 9.5 and 9.6 – Load events and debugging events
var boxClass = "movingDiv";
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    if (divToGet) console.log("div1 content:", divToGet.innerHTML);

    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            console.log("triggered by " + e.target.id, e);
            // Set a breakpoint on the next line to inspect e and e.target.
            e.target.style.backgroundColor = "#ffe393";
        });
        divs[i].addEventListener("mouseout", function (e) {
            e.target.style.backgroundColor = "";
        });
    }
});
