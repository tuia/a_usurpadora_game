function journal() {
	const milestones = {
		"Paulina": (progress) => {
			return ["This is our heroine. What things wait for her in future?"];
		},

		"Mae": (progress) => {
			return ["Paulina's sick mother. Nobody knows what she is sick with, but her health is declining fast", "Will she live to see Paulina happily married?"]
		},

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

	let updateJournalSidebar = () => {
		let sidebarHtml = "";
		let idx = 0;
		for (var character in storage.journal) {
			sidebarHtml += "<div data-journal-character='";
			sidebarHtml += character;
			sidebarHtml += "' ";
			sidebarHtml += "class='sidebar-item";
			if (idx++ == 0)
				sidebarHtml += " active";
			sidebarHtml += "'>";
			sidebarHtml += character;
			sidebarHtml += "</div>";
		}

		$_("#journal-characters").html(sidebarHtml);

		$_(".sidebar-item").on("click", (e) => {
			let character = $(e.target).data("journal-character");
			updateJournalCharacter(character);
		});
	}

	let updateJournalCharacter = (character) => {

		let journalHtml = "";

		journal().getCharacterJournal(character).forEach(progressLine => journalHtml += "<p>" + progressLine + "</p>");

		if (journalHtml == "")
			journalHtml = "No records in the journal for this character yet! \n As the progress of the story goes, new records will appear in the journal.";

		$_("#journal-content").html(journalHtml);
	}

	return {
		init() {
			this.saveCharacterMilestoneProgress("Paulina", "Started", true);
			this.saveCharacterMilestoneProgress("Mae", "Started", true);
		},

		saveCharacterMilestoneProgress: (character, progress, value) => {
			if (typeof(storage.journal[character]) == 'undefined')
				storage.journal[character] = {};

			storage.journal[character][progress] = value;
		},

		update() {
			updateJournalSidebar();
			$_("#journal-content").text("Select character");
		},

		getCharacterJournal: (character) => {
			var progress = getCharacterProgress(character);
			if (typeof(milestones[character]) != 'undefined')
				return milestones[character](progress);
			return [];
		}
	};
}

journal().init();