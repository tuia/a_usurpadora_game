/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/


function displayUpdateStats() {
    var element = $("<div>");
    element.addClass("update-stats");
    element.text("Updating stats...");
    $("body").append(element);
    setTimeout(function(){
        $(".update-stats").remove();
    }, 1000);
}