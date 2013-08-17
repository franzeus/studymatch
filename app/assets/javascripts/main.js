function toggleModal(show) {

	var modalObject = $('.modal');
	var body = $('body');

	if (show) {

		// If already on the page, then only update size
		if (modalObject.length) {

			var modal = modalObject;

		// Create and append modal to body
		} else {
			var modal = $('<div class="modal"></div>');
			body.append(modal);
		}

		var windowObj = body[0];

		modal.css({
			width: windowObj.innerWidth,
			height: windowObj.innerHeight
		});

	// Remove modal
	} else {
		modalObject.remove();
	}

};

function toggleNavigation() {

	var navObj = $('.nav'),
		className = 'slideTop';

	navObj.toggleClass(className);

	toggleModal(navObj.hasClass(className));
};

function hideNavigation() {
	toggleModal(false);
	$('.nav').removeClass('slideTop');
};

function bindDocumentEvents() {

	/* Bind click and tap event for mobile collapse navigation */
	var menuIcon = $('.menuIcon');
	menuIcon.on('click', function(e) { toggleNavigation(); e.stopPropagation(); });	

	/* Vote - submit on li click */
	var chooseList = $('.chooseList');
	chooseList.on('click', 'li', function() {
		$(this).find('input[type="radio"]').prop('checked', true);
		var form = $(this).closest('form');
		form.submit();
	});

};

$(document).ready(function() {
	bindDocumentEvents();
});

$(document).on('page:load', function() {
	hideNavigation();
	bindDocumentEvents();	
});

$(document).on('page:restore', function() {
	hideNavigation();
});