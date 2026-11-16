// Exercise 9.4 – Simple event handling
var btn = document.getElementById("testButton");
var img = document.getElementById("mainImage");
if (btn) {
    btn.addEventListener("click", simpleHandler);
}
if (img) {
    img.addEventListener("mouseover", function () {
        img.className = "makeItGray";
    });
    img.addEventListener("mouseout", function () {
        img.className = "makeItNormal";
    });
}
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (!content || !btn) return;
    if (btn.innerHTML.trim() === "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        window.setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        window.setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}
