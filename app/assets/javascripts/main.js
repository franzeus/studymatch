function toggleModal(show) {

	var modalObject = Zepto('.modal');
	var body = Zepto('body');

	if (show) {

		// If already on the page, then only update size
		if (modalObject.length) {

			var modal = modalObject;

		// Create and append modal to body
		} else {
			var modal = Zepto('<div class="modal"></div>');
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

	var navObj = Zepto('.nav'),
		className = 'slideTop';

	navObj.toggleClass(className);

	toggleModal(navObj.hasClass(className));
};

function hideNavigation() {
	toggleModal(false);
	Zepto('.nav').removeClass('slideTop');
};

function bindDocumentEvents() {

	/* Bind click and tap event for mobile collapse navigation */
	var menuIcon = Zepto('.menuIcon');
	menuIcon.on('click', function(e) { toggleNavigation(); e.stopPropagation(); });	

	bindVotePageEvents();
};

Zepto(document).ready(function() {
	bindDocumentEvents();
});

Zepto(document).on('page:load', function() {
	hideNavigation();
	bindDocumentEvents();	
});

Zepto(document).on('page:restore', function() {
	hideNavigation();
});