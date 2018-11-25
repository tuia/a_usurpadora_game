const reputation = {
	update(characterId, value) {
		if (typeof(storage.reputation) == "undefined")
			storage.reputation = {};

		if (typeof(storage.reputation[characterId]) == "undefined")
		    storage.reputation[characterId] = 0;

		storage.reputation[characterId] += value;
	},

	get(characterId) {
		if (typeof(storage.reputation) == "undefined")
			return undefined;

		return storage.reputation[characterId]
	}
}

function notifyReputationChanged(characterId) {
    notificationQueue.push({
        characterId: characterId,
        format: "Reputation updated with %%."
    });
}