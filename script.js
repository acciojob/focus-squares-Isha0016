//your JS code here. If required.
document.querySelectorAll(".square").forEach(function(square) {
    square.addEventListener("mouseenter", function() {
        square.style.backgroundColor = "#6F4E37";
    });

    square.addEventListener("mouseleave", function() {
        square.style.backgroundColor = "#E6E6FA";
    });
});