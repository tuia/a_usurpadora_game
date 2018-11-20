/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/


function displayUpdateStats() {
    var element = "<div class='update-stats'>Updating your stats</div>";
    $_("body").append(element);
    setTimeout(function(){
        $_(".update-stats").remove();
    }, 1000);
}

function updateLucianoSuspicion(suspicionCounter) {
    if (typeof(storage.luciano) == 'undefined')
        storage.luciano = {
            dialog_suspicion: 0
        };

    storage.luciano.dialog_suspicion += suspicionCounter;

    var currentSuspicion = storage.luciano.dialog_suspicion;
    var text = "";
    if (currentSuspicion < 10 )
        text = "looking relaxed";
    else if (currentSuspicion >=10 && currentSuspicion < 25)
        text = "slightly irritated";
    else if (currentSuspicion >=25 && currentSuspicion < 30)
        text = "looking confused";
    else
        text = "looking suspicious";

    $_('#minigame-status').text("Luciano is " + text);
}

function showLucianoSuspicionCounter() {
    var element = "<div id='minigame-status' class='minigame-status'></div>"
    $_("body").append(element);
	updateLucianoSuspicion(0);

	return true;
}

function hideLucianoSuspicionCounter() {
	$_("#minigame-status").remove();

	return true;
}

function lucianoIsSuspicious() {
    return storage.luciano.dialog_suspicion >= 30;
}