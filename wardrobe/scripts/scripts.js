$(document).ready( function() {

	$('.js-select-clothing').click( function() {
		var imgName = $(this).attr('href'),
			imgPath = 'character/',
			imgFormat = '.png',
			imgUrl = imgPath + imgName + imgFormat;

		$('.js-insert-clothing').attr('src', imgUrl);
		return false;
	});

	$('.js-toggle-zoom').click( function() {
		$(' .js-character').toggleClass('character--zoom-in');
		return false;
	});

});