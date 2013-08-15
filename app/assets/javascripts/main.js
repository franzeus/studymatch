function toggleNavigation() {
	$('.nav').toggle();
};

function hideNavigation() {
	$('.nav').hide();
};

function bindDocumentEvents() {

	/* Bind click and tap event for mobile collapse navigation */
	var menuIcon = $('.menuIcon');
	menuIcon.on('click', function(e) { toggleNavigation(); e.stopPropagation(); });
	menuIcon.tap(function() { toggleNavigation(); e.stopPropagation(); });
	// Todo: onResize: check if > 900 and make nav visible

	/*
	$(document).click(function() { hideNavigation(); });
	*/
	$(document).tap(function() { hideNavigation(); });

};

$(document).ready(function() {
	bindDocumentEvents();
});