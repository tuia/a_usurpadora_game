
let notificationQueue = [];
let timer = 0;

function format(fmt, ...args){
    return fmt
        .split("%%")
        .reduce((aggregate, chunk, i) =>
            aggregate + chunk + (args[i] || ""), "");
}

let addNotification = (notification) => {
    notificationQueue.push(notification);
    if (timer == 0)
        timer = setInterval(handler, 100);
}

let handler = () => {
    if (notificationQueue.length == 0) {
        clearInterval(timer);
    }

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

        let element = $("<div class='js-update-progress update-stats' style='display: none;'>" + format(metadata.format, character.Name) + "</div>");
        $("body").append(element);
        element.fadeIn(500, () => {
            setTimeout(() => {
                element.fadeOut(500, () => element.remove());
            }, 750);
        });

    }
};
