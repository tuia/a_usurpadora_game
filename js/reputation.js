const reputation = {
	update(characterId, value) {
		if (typeof(storage.reputation[characterId]) == "undefined")
		    storage.reputation[characterId] = 0;

		storage.reputation[characterId] += value;
	},

	get(characterId) {
		return storage.reputation[characterId]
	}
}

function notifyReputationChanged(characterId) {
    addNotification({
        characterId: characterId,
        format: "Reputation updated with %%."
    });
}