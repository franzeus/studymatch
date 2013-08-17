/**
* Waits the profile image to be loaded and then adds slideIn class to the element
*/
var slideImageIn = function() {

    var profileImage = $('.profileImage');

    profileImage[0].onload = function() {
        profileImage.addClass('slideInRight');
    };
}