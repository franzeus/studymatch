/**
* Waits the profile image to be loaded and then adds slideIn class to the element
*/
var slideImageIn = function() {

    var profileImage = $('.profileImage');

    profileImage[0].onload = function() {
        profileImage.addClass('slideInRight');
        $('.imageWrapper .loading').remove();
    };
}

/**
* Binds vote-page specific events
*/
var bindVotePageEvents = function() {
 
    /* Vote - submit on li click */
    var chooseList = $('.chooseList');
    chooseList.on('click', 'li', function() {
        $(this).find('input[type="radio"]').prop('checked', true);
        var form = $(this).closest('form');
        form.submit();
    });

}