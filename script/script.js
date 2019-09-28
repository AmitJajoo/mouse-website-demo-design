//dynamic navbar toggler
$(document).ready(function() {
    $(".nav-icon").click(function() {
        $("#navbarNav").collapse('toggle');
        $("#navbarNav").addClass("animated zoomIn");
    });
});
