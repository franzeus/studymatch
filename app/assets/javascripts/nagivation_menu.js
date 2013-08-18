/*
* NavigationMenu Object
*/
var NavigationMenu = (function() {

	var navObject = null,
		slideTopAnimationClass = 'slideTop';	

	var bindEvents = function() {
		
		var self = this;
		
		/* Bind click and tap event for mobile collapse navigation */
		var menuIcon = Zepto('.menuIcon');
		menuIcon.on('click', function(e) { NavigationMenu.toggleNavigation(); e.stopPropagation(); });
	};

	return {

		init : function() {

			navObj = this.getNavObject();
			bindEvents();

		},

		toggleNavigation : function() {

			navObj.toggleClass(slideTopAnimationClass);

			toggleModal(navObj.hasClass(slideTopAnimationClass));
		},

		hideNavigation : function() {
			toggleModal(false);
			this.getNavObject().removeClass(slideTopAnimationClass);
		},

		getNavObject : function() {
			return Zepto('.nav');
		}
	}

})();