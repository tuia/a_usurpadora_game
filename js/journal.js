let updateJournalCharacter = (characterId) => {
	let character = characters[characterId];
	if (typeof(character) == "undefined")
		return;

	let journalHtml = "";

	let characterProgress = progress.get(characterId);

	character.Milestones(characterProgress).forEach(progressLine => journalHtml += "<p>" + progressLine + "</p>");

	if (journalHtml == "")
		journalHtml = "No records in the journal for this character yet! \n As the progress of the story goes, new records will appear in the journal.";

	$(".js-journal-content").html(journalHtml);
};

let updateJournalSidebar = () => {
	let sidebarHtml = "";
	let idx = 0;
	for(var characterId in characters) {
		let character = characters[characterId];
		if (progress.get(characterId))
		{
			sidebarHtml += "<a data-journal-character='";
			sidebarHtml += characterId;
			sidebarHtml += "' ";
			sidebarHtml += "class='journal__body__sidebar__item js-journal-character";
			if (idx++ == 0)
				sidebarHtml += " active";
			sidebarHtml += "'>";
			sidebarHtml += character.Name;
			sidebarHtml += "</a>";
		}
	};

	$(".js-journal-characters").html(sidebarHtml);

	$(".js-journal-character").on("click", (e) => {
		let characterId = $(e.target).data("journal-character");
		updateJournalCharacter(characterId);
	});
};

let journal = {
	update: () => {
		updateJournalSidebar();
		$(".js-journal-content").text("Select character");
	}
};