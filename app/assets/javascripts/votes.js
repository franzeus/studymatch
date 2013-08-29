/**
* Waits for the profile image to be loaded and then makes it slide
*/
var slideImageIn = function() {

    var profileImage = Zepto('.profileImage').find('.userImage'),
        timeout = null;

    profileImage.hide();

    /* 
        Because image.onload did not work very well,
        we call a function which checks the image complete state
    */
    var isDoneLoading = function isDoneLoading() {

        if (!profileImage[0].complete) {

            /* Wait a bit, otherwise could get a stackoverflow */
            timeout = setTimeout(isDoneLoading, 50);

        } else {
            clearTimeout(timeout);
            Zepto('.imageWrapper .loading').remove();
            profileImage.show().addClass('slideInRight');
        }
    }();
};

/**
* Binds vote-page specific events
*/
var bindVotePageEvents = function() {
 
    /* Vote - submit on li click */
    var chooseList = Zepto('.chooseList');
    chooseList.on('click', 'li', function() {
        Zepto(this).find('input[type="radio"]').prop('checked', true);
        var form = Zepto(this).closest('form');
        form.submit();
    });

};