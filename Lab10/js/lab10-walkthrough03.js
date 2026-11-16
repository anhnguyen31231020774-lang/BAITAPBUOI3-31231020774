// Exercise 10.3 – Advanced selectors
$(function () {
    // Step 2: password fields
    //$(":password").css("background-color", "yellow");

    // Step 4: every fourth child element in the form
    $("form :nth-child(4n)").css("background-color", "yellow");

    // Step 5: labels containing the word "word"
    $('label:contains("word")').css("color", "black");
});
