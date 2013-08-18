/**
* Appends modal-div to page's body
* @param {boolean} showIt Whether to show or to hide the modal
*/
function toggleModal(showIt) {

	var modal = null,
		modalClassName = 'modal',
		modalObject = Zepto('.' + modalClassName);

	if (showIt) {

		var body = Zepto('body'),
			windowObj = body[0];

		// If already on the page, then only update size
		if (modalObject.length) {

			modal = modalObject;

		// Create and append modal to body
		} else {
			modal = Zepto('<div class="' + modalClassName + '"></div>');
			body.append(modal);
		}

		modal.css({
			width: windowObj.innerWidth,
			height: windowObj.innerHeight
		});

	// Remove modal
	} else {
		modalObject.remove();
	}

};

/**
* Will be called when document is ready.
* If you want to bind an event handler or init an object,
* do it here
*/
function bindDocumentEvents() {
	NavigationMenu.init();
	bindVotePageEvents();
};

/*
	----------------------------------------
	DOCUMENT READY
	----------------------------------------
*/
Zepto(document).ready(function() {
	bindDocumentEvents();
});

/*
	Because we use turbolink, we have to call certain functions,
	which should be triggered on-document-ready, again
*/
Zepto(document).on('page:load', function() {
	NavigationMenu.hideNavigation();
	bindDocumentEvents();	
});

Zepto(document).on('page:restore', function() {
	NavigationMenu.hideNavigation();
});