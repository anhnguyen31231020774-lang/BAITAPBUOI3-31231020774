// Exercise 10.9 – GET requests
$(function () {
    $("#consume").on("click", function () {
        var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        $("#results").html("<p>Loading cities…</p>");
        $.get(url)
            .done(function (data) {
                var list = $("<ul></ul>");
                $.each(data, function (index, value) {
                    $("<li></li>").text(value.name).appendTo(list);
                });
                $("#results").empty().append(list);
            })
            .fail(function (xhr, status, error) {
                $("#results").text("Could not load city data: " + status + " " + error);
            });
    });
});
