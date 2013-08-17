/**
* Waits the profile image to be loaded and then adds slideIn class to the element
*/
var slideImageIn = function() {

    var profileImage = Zepto('.profileImage'),
        timeout = null;

    /* 
        Because image.onload did not work very well,
        we call a function which checks the image complete state
    */
    var isDoneLoading = function isDoneLoading() {

        if (!profileImage[0].complete) {

            timeout = setTimeout(isDoneLoading, 50);

        } else {
            clearTimeout(timeout);
            profileImage.show().addClass('slideInRight');
            Zepto('.imageWrapper .loading').remove();
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

}