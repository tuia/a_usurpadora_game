$(document).ready( function() {

	// Display default character - still hardcoded
	$('.js-wardrobe-face').attr('src', 'img/characters/' + characters[Object.keys(characters)[0]].Directory + '/body/' + characters[Object.keys(characters)[0]].Outfit.Body.Images.default )
	$('.js-wardrobe-outfit').attr('src', 'img/characters/' + characters[Object.keys(characters)[0]].Directory + '/clothing/' + characters[Object.keys(characters)[0]].Outfit.Clothes.Images.praia )


	// Build Character select
	for (let key of Object.keys(characters)) { 
		if ( typeof(characters[key].Outfit) != 'undefined' ) {
			let option = '<option value="'+ key +'">' + (characters[key].Name) + '</option>';
			$('.js-wardrobe-char-select').append(option)
		}
	}

	// Change character
	$('.js-wardrobe-char-select').on( 'change', function() {

		// Get Selected Character Variables
		var selectedCharacter = $(this).find("option:selected").text()
		for (let key of Object.keys(characters)) {  
			if ( characters[key].Name == selectedCharacter ) {
				var selectedCharacterDirectory = characters[key].Directory
				var selectedCharacterFaces = Object.keys(characters[key].Outfit.Body.Images)
				var selectedCharacterOutfits = Object.keys(characters[key].Outfit.Clothes.Images)
			}
		}

		// Display default selected character
		$('.js-wardrobe-face').attr('src', 'img/characters/' + selectedCharacterDirectory + '/body/' + selectedCharacterFaces[0] + '.png')
		$('.js-wardrobe-outfit').attr('src', 'img/characters/' + selectedCharacterDirectory + '/clothing/' + selectedCharacterOutfits[0] + '.png')


		$('.js-wardrobe-face-select, .js-wardrobe-outfit-select').find('option').remove()

		// Build Face Selected
		for (var i = 0; i < selectedCharacterFaces.length; i++) {
			let imageSource = 'img/characters/' + selectedCharacterDirectory + '/body/' + selectedCharacterFaces[i] + '.png'
			let option = '<option value="'+ imageSource +'">' + (selectedCharacterFaces[i]) + '</option>'

			$('.js-wardrobe-face-select').append(option)
	    }

		// Build Outfit Selected
		for (var i = 0; i < selectedCharacterOutfits.length; i++) {
			let imageSource = 'img/characters/' + selectedCharacterDirectory + '/clothing/' + selectedCharacterOutfits[i] + '.png'
			let option = '<option value="'+ imageSource +'">' + (selectedCharacterOutfits[i]) + '</option>'

			$('.js-wardrobe-outfit-select').append(option)
	    }
	})

	// Change face
	$('.js-wardrobe-face-select').on( 'change', function() {
		let selectedCharacterFace = $(this).find("option:selected").val()
		$('.js-wardrobe-face').attr('src', selectedCharacterFace)
	})

	// Change outfit
	$('.js-wardrobe-outfit-select').on( 'change', function() {
		let selectedCharacterOutfit = $(this).find("option:selected").val()
		$('.js-wardrobe-outfit').attr('src', selectedCharacterOutfit)
	})
	
})