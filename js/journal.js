function journal() {
	const milestones = {
		"Osvaldo": (progress) => {
			let result = ["Osvaldo is a decent young man in love with Paulina."];

			if (progress.wedding) {
				result.push("Osvaldo has really strong feeling towards our heroine, and is ready to marry her, when the time comes.");
				result.push("Though life is hard, it's good to have someone to rely on");
			}
			else {
				result.push("Who knows what feeling he has to her? Is it serious enough to become her husband? Only the time will show.");
			}

			return result;
		}
	}

	if (typeof(storage.journal) == 'undefined')
		storage.journal = {};

	let getCharacterProgress = (character) => {
		if (typeof(storage.journal[character]) == 'undefined')
			return {};
		return storage.journal[character];
	};

	return {
		saveCharacterMilestoneProgress: (character, progress, value) => {
			if (typeof(storage.journal[character]) == 'undefined')
				storage.journal[character] = {};

			storage.journal[character][progress] = value;
		},

		update() {
			let journalHtml = "";
			for (var character in storage.journal) {
				let html = "<h4>" + character + "</h4>";

				this.getCharacterJournal(character).forEach(progressLine => html += "<p>" + progressLine + "</p>");
				journalHtml += html;
			};

			if (journalHtml == "")
				journalHtml = "No records in the journal yet! \n As the progress of the story goes, new records will appear in the journal.";

			$_("#journal-content").html(journalHtml);
		},

		getCharacterJournal: (character) => {
			var progress = getCharacterProgress(character);
			if (typeof(milestones[character]) != 'undefined')
				return milestones[character](progress);
			return [];
		}
	};
}