const progress = {
	update(characterId, milestone, value) {

		if (typeof(storage.progress[characterId]) == "undefined")
		    storage.progress[characterId] = {};

		storage.progress[characterId][milestone] = value;
	},

	get(characterId) {
		return storage.progress[characterId]
	}
}

let nextRun = new Date();

function notifyProgressChanged(characterId) {
    addNotification({
        characterId: characterId,
        format: "Journal record updated for %%."
    });
}