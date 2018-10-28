/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/


function displayUpdateStats() {
    var element = $("<div>");
    element.addClass("modal-test");
    element.css("position", "absolute");
    element.css("left", 50);
    element.css("top", 50);
    element.css("z-index", 99999);
    element.css("font-size", 48);
    element.css("color", "white");
    element.text("Updating stats...");
    $("body").append(element);
    setTimeout(function(){
        $(".modal-test").remove();
    }, 1000);
}