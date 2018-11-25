const progress = {
	update(characterId, milestone, value) {
		if (typeof(storage.progress) == "undefined")
			storage.progress = {};

		if (typeof(storage.progress[characterId]) == "undefined")
		    storage.progress[characterId] = {};

		storage.progress[characterId][milestone] = value;
	},

	get(characterId) {
		if (typeof(storage.progress) == "undefined")
			return undefined;

		return storage.progress[characterId]
	}
}

let nextRun = new Date();

function notifyProgressChanged(characterId) {
    notificationQueue.push({
        characterId: characterId,
        format: "Journal record updated for %%."
    });
}