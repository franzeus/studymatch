/**
* Waits the profile image to be loaded and then adds slideIn class to the element
*/
var slideImageIn = function() {

    var profileImage = Zepto('.profileImage');

    var isDoneLoading = function isDoneLoading() {

        if (!profileImage[0].complete) {
            setTimeout(isDoneLoading, 50);

        } else {
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