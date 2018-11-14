function showWardrobeMiniGame(characterName, clothes, success){
    return function() {
        return new Promise((resolve, reject) => {
            debugger;
            initWardrobeMinigame(characterName, clothes, (selectedClothing) => {
                success(selectedClothing);
                resolve("Success");
            });
        }).then(() => {
            return true;
        });
    };
};

function initWardrobeMinigame(characterName, clothes, success) {
    const antiFlickeringStyle = "transition: background-image 1s ease-in-out;";

    let character = characters[characterName];
    if (typeof(character["Outfit"]) == "undefined")
        throw new Error("Outfit must be defined for character " + characterName);

    if (typeof(character["Outfit"]["Body"]) == "undefined")
        throw new Error("Outfit.Body must be defined for character " + characterName);

    if (typeof(character["Outfit"]["Clothes"]) == "undefined")
        throw new Error("Outfit.Clothes must be defined for character " + characterName);

    if (typeof(clothes) == "undefined" || !clothes.length) {
        throw new Error("clothes were not specified");
    }

    if (typeof(success) != "function") {
        throw new Error("success callback was not specified");
    }

    let directory = character.Directory;
    if (typeof directory == "undefined") {
        directory = "";
    } else {
        directory += "/";
    }

    let bodySubDirectory = character["Outfit"]["Body"]["Directory"];
    if (typeof(bodySubDirectory) == "undefined")
        bodySubDirectory = "body";

    let imageDirectory = directory + bodySubDirectory + "/";

    let wearSubDirectory = character["Outfit"]["Clothes"]["Directory"];
    if (typeof(wearSubDirectory) == "undefined")
        wearSubDirectory = "clothes";

    let selectedClothingIdx = 0;

    function displayBackground() {
        let backgroundDiv = "<div id='wardrobe' class='wardrobe-background'></div>";
        $_("#game").append(backgroundDiv);

        let header = "<div id='wardrobe-header' class='header'>Please select the clothes you want to wear.</div>";
        let container = "<div id='wardrobe-container' class='container'></div>";
        let footer = "<div id='wardrobe-footer' class='footer'><div class='btn btn-choose' id='select-button'>Select</div></div>";

        $_("#wardrobe").append(header);
        $_("#wardrobe").append(container);
        $_("#wardrobe").append(footer);
    }

    function triggerClothingUpdate(selectedClothingIdx) {
        let clothing = clothes[selectedClothingIdx];
        let overlay = directory + wearSubDirectory + "/" + character["Outfit"]["Clothes"].Images[clothing];
        $_("#wardrobe-character-div img").attribute("src", "img/characters/" + overlay);
    }

    function hookEvents() {
        $_("#wardrobe-left-arrow").on("click", () => {
            if (selectedClothingIdx > 0) {
                selectedClothingIdx -= 1;
                triggerClothingUpdate(selectedClothingIdx);
            }
            if (selectedClothingIdx == 0)
                hideLeftArrow();

            showRightArrow();
        });

        $_("#wardrobe-right-arrow").on("click", () => {
            if (selectedClothingIdx < clothes.length){
                selectedClothingIdx += 1;
                triggerClothingUpdate(selectedClothingIdx);
            }
            if (selectedClothingIdx == clothes.length - 1)
                hideRightArrow();

            showLeftArrow();
        });

        $_("#select-button").on("click", () => {
            let clothing = clothes[selectedClothingIdx];
            if (typeof(clothing) == "undefined") {
                throw new Error("Something went wrong - there are not selected clothing, selectedClothingIdx = " + selectedClothingIdx + ", but array contains " + clothes.length + "elements.");
            }

            $_("#wardrobe").remove();
            success(clothing);
        });
    }

    function displayOverlay(defaultClothing) {
        let leftArrowOverlay = "<div id='wardrobe-left-arrow' class='arrow-container hidden'><i class='left-arrow'/></div>";
        let rightArrowOverlay = "<div id='wardrobe-right-arrow' class='arrow-container hidden'><i class='right-arrow'/></div>";
        let characterOverlay = buildCharacterDisplay();

        $_("#wardrobe-container").append(leftArrowOverlay);
        $_("#wardrobe-container").append(characterOverlay);
        $_("#wardrobe-container").append(rightArrowOverlay);

        triggerClothingUpdate(0);
    }

    function buildCharacterDisplay() {
        const bodyType = "default";

        let image = character["Outfit"]["Body"].Images[bodyType];

        let characterHtml = "<div id='wardrobe-character-div' class='wardrobe-character" +
            "'style='" +
            antiFlickeringStyle +
            "background-image: url(img/characters/" +
            imageDirectory +
            image +
            ")'><img src=''></div>";

        return characterHtml;
    }

    function showRightArrow() {
        $_("#wardrobe-right-arrow").removeClass("hidden");
    }

    function showLeftArrow() {
        $_("#wardrobe-left-arrow").removeClass("hidden");
    }

    function hideRightArrow() {
        $_("#wardrobe-right-arrow").addClass("hidden");
    }

    function hideLeftArrow() {
        $_("#wardrobe-left-arrow").addClass("hidden");
    }

    displayBackground();
    displayOverlay(clothes[0]);
    hookEvents();
    showRightArrow();
};