function toggleModal(show) {

	var modalObject = $('.modal');

	if (show) {

		// If already on the page, then only update size
		if (modalObject.length) {

			var modal = modalObject;

		// Create and append modal to body
		} else {
			var modal = $('<div class="modal"></div>');
			$('body').append(modal);
		}

		var windowObj = $(window);

		modal.css({
			width: windowObj.width(),
			height: windowObj.height()
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
	menuIcon.tap(function() { toggleNavigation(); e.stopPropagation(); });
	// Todo: onResize: check if > 900 and make nav visible

	$(document).tap(function() { hideNavigation(); });

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