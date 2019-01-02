function showDressMiniGame(characterName, clothes, success){
    console.log()
    return function() {
        return new Promise((resolve, reject) => {
            initDressMinigame(characterName, clothes, (selectedClothing) => {
                success(selectedClothing);
                resolve("Success");
            });
        }).then(() => {
            return true;
        });
    };
};

function initDressMinigame(characterName, clothes, success) {
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

    function triggerClothingUpdate(selectedClothingIdx) {
        let clothing = clothes[selectedClothingIdx];
        let overlay = directory + wearSubDirectory + "/" + character["Outfit"]["Clothes"].Images[clothing];
        $(".js-chosen-outfit").attr("src", "img/characters/" + overlay);
    }

    function hookEvents() {
        $(".js-left-arrow").on("click", () => {
            if (selectedClothingIdx > 0) {
                selectedClothingIdx -= 1;
                triggerClothingUpdate(selectedClothingIdx);
            }
            if (selectedClothingIdx == 0)
                $(".js-left-arrow").addClass('disabled');

            $(".js-right-arrow").removeClass('disabled');
        });

        $(".js-right-arrow").on("click", () => {
            if (selectedClothingIdx < clothes.length){
                selectedClothingIdx += 1;
                triggerClothingUpdate(selectedClothingIdx);
            }
            if (selectedClothingIdx == clothes.length - 1)
                $(".js-right-arrow").addClass('disabled');

            $(".js-left-arrow").removeClass('disabled');
        });

        $_("#select-button").on("click", () => {
            let clothing = clothes[selectedClothingIdx];
            if (typeof(clothing) == "undefined") {
                throw new Error("Something went wrong - there are not selected clothing, selectedClothingIdx = " + selectedClothingIdx + ", but array contains " + clothes.length + "elements.");
            }

            $_("#dress-minigame").remove();
            success(clothing);
        });
    }

    function updateClothing(defaultClothing) {
        const bodyType = "default";

        let image = character["Outfit"]["Body"].Images[bodyType]

        $('.js-dress-minigame-character').attr('style', antiFlickeringStyle + "background-image: url(img/characters/" + imageDirectory + image)

        triggerClothingUpdate(0);
    }

    $('#dress-minigame').show()
    updateClothing(clothes[0]);
    hookEvents();
};