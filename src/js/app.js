var App = function() {

    return {

        init: function() {
            Barba.Pjax.start();
            new WOW().init();
        },

        toggleClass: function(classToToggle) {
            $(classToToggle).slideToggle();
        },
        openMenuNav: function(e) {
            e.classList.toggle("is-active");
            this.showMenu('.navBar__right');

        },
        showMenu: function(classTo) {
            var effect = 'slide';
            var options = { direction: 'right' };
            var duration = 500;
            $(classTo).toggle(effect, options, duration);
        },

        // On click go to the passed element
        scrollTo: function(elementToGo) {
            $('html, body').animate({
                scrollTop: $(elementToGo).offset().top
            }, 500);
        },

        // Functions to show and hide
        show: function(classTo) {
            $(classTo).show();
        },

        hide: function(classTo) {
            $(classTo).hide();
        },

        checkClassToToggle: function(val, classToCheck) {

            if ($(classToCheck).css('display') === 'none') {
                $(classToCheck).show();

            } else {
                $(classToCheck).hide();

            }
        },


    };
}();
$(document).ready(function() {
    App.init();
});
