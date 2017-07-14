var App = function() {

    return {

        init: function() {
            new WOW().init();
            this.carousel();
            this.loadMore();
        },

        // SHOW 6 AND ADD ALL THE OTHERS, ON CLICK SHOW 3 MORE
        loadMore: function() {
            $(".load").slice(0, 6).show();
            $("#loadMore").on('click', function(e) {
                e.preventDefault();
                $(".load:hidden").slice(0, 3).slideDown();
            });
        },

        // > 992PX SHOW 3 ITEMS < 992PX SHOW 1 ITEM
        carousel: function() {
            var width = $(document).width();
            if (width > 992) {
                $(".owl-carousel").owlCarousel({
                    nav: true,
                    loop: true,
                });
            }
            if (width < 992) {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    loop: true,
                });
            }
        },

        // PASSING AN ELEMENT TOGGLE IT
        toggleClass: function(elementToToggle) {
            $(elementToToggle).slideToggle();
        },

        // ACTIVE EFFECT ON HAMBURGER ADDING CLASS IS-ACTIVE AND CALLING FUNCTION TO SHOW MENU
        openMenuNav: function(e) {
            e.classList.toggle("is-active");
            this.showMenu('.navBar__menu');
            // CONDITION TO FIX THE MENU ALSO ON SCROLL
            if ($('.navBar').css('position') === 'absolute') {
                $('.navBar').css({ "position": "fixed" });
            } else {
                $('.navBar').css({ "position": "absolute" });
            }
        },

        // SLIDE EFFECT FROM RIGHT
        showMenu: function(classTo) {
            var effect = 'slide';
            var options = { direction: 'right' };
            var duration = 500;
            $(classTo).toggle(effect, options, duration);
        },

        // SCROLLING TO THE PASSED ELEMENT
        scrollTo: function(elementToGo) {
            $('html, body').animate({
                scrollTop: $(elementToGo).offset().top
            }, 500);
        },

        // SHOWING PASSED ELEMENT
        show: function(classTo) {
            $(classTo).show();
        },

        // HIDDING PASSED ELEMENT
        hide: function(classTo) {
            $(classTo).hide();
        },
    };

}();

$(document).ready(function() {
    App.init();
});
