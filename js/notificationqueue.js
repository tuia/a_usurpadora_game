
let notificationQueue = [];

function format(fmt, ...args){
    return fmt
        .split("%%")
        .reduce((aggregate, chunk, i) =>
            aggregate + chunk + (args[i] || ""), "");
}

setInterval(() => {
    if (notificationQueue.length > 0 && nextRun < new Date()) {
        nextRun = new Date();
        nextRun.setSeconds(nextRun.getSeconds() + 2);

        let metadata = notificationQueue.pop();

        let characterId = metadata.characterId;

        let character = characters[characterId];
        if (typeof(character) == undefined) {
            console.error("Unknown character for reputation change: " + characterId);
            return;
        }

        let element = "<div class='js-update-progress update-stats' style='display: none;'>" + format(metadata.format, character.Name) + "</div>";
        $_("body").append(element);
        let bar = $(".js-update-progress");
        bar.fadeIn(500, () => {
            setTimeout(() => {
                bar.fadeOut(500, () => bar.remove());
            }, 1000);
        });

    }
}, 1000);