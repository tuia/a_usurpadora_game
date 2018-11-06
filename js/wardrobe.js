function showWardrobeGame(characterName, clothes, success) {
    function displayBackground(){
        let backgroundDiv = "<div id='wardrobe' class='wardrobe-background'><div id='wardrobe-container' class='container'></div></div>";
        $_("#game").append(backgroundDiv);
    }

    function displayClothes(characterName, clothes, success) {
        let character = characters[characterName];
        if (typeof(character["Outfit"]) == "undefined" )
            throw new Error("Outfit must be defined for character " + characterName);

        if (typeof(character["Outfit"]["Body"]) == "undefined" )
            throw new Error("Outfit.Body must be defined for character " + characterName);

        if (typeof(character["Outfit"]["Clothes"]) == "undefined" )
            throw new Error("Outfit.Clothes must be defined for character " + characterName);

        let directory = character.Directory;

        if (typeof directory == "undefined") {
            directory = "";
        } else {
            directory += "/";
        }

        let image = "";
        let imageDirectory = directory;

        const bodyType = "default";
            
        let bodySubDirectory = character["Outfit"]["Body"]["Directory"];
        if (typeof(bodySubDirectory) == "undefined")
            bodySubDirectory = "body";
        imageDirectory = imageDirectory + bodySubDirectory + "/";
        image = character["Outfit"]["Body"].Images[bodyType];

        clothes.forEach((clothing, idx) => {
            const wearType = clothing;
            
            let overlay;

            let wearSubDirectory = character["Outfit"]["Clothes"]["Directory"];
            if (typeof(wearSubDirectory) == "undefined")
                wearSubDirectory = "clothes";

            overlay = directory + wearSubDirectory + "/" + character["Outfit"]["Clothes"].Images[wearType];
        
            let antiFlickeringStyle = "transition: background-image 1s ease-in-out;";	

            let id = characterName + '-' + clothing;

            let characterHtml = "<div id='" +
            id + 
            "' class='wardrobe-character" +
            "'style='" + 
            antiFlickeringStyle + 
            "background-image: url(img/characters/" + 
            imageDirectory + 
            image + 
            ")'><img src='img/characters/" + 
            overlay + 
            "'></div>";						
            $_("#wardrobe-container").append(characterHtml);
            
            $_("#" + id).on("click", () => {
                $_("#wardrobe").remove();
                success(clothing);
            });
        });
    }

    displayBackground();
    displayClothes(characterName, clothes, success);
};