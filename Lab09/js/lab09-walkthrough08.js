// Exercise 9.8 – Form validation
function init() {
    var form = document.getElementById("sampleForm");
    if (form) form.addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);

function checkForEmptyFields(e) {
    var errorArea = document.getElementById("errors");
    var fields = document.querySelectorAll("#sampleForm input[type=text], #sampleForm input[type=password]");
    var fieldList = [];

    if (errorArea) {
        errorArea.className = "hidden";
        errorArea.innerHTML = "";
    }
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            e.preventDefault();
            fieldList.push(fields[i]);
            fields[i].style.border = "2px solid #c0392b";
        } else {
            fields[i].style.border = "";
        }
    }
    if (fieldList.length > 0) {
        var msg = "The following fields can't be empty: ";
        for (var j = 0; j < fieldList.length; j++) {
            msg += fieldList[j].id + (j < fieldList.length - 1 ? ", " : "");
        }
        if (errorArea) {
            errorArea.textContent = msg;
            errorArea.className = "visible";
        } else {
            alert(msg);
        }
    }
}
