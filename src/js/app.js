var App = function() {

    return {

        init: function() {
            // Barba.Pjax.start();
            new WOW().init();
            this.carousel();
            this.navBarColor();
            this.loadMore();
        },
        loadMore: function() {
            $(".load").slice(0, 6).show();
            $("#loadMore").on('click', function(e) {
                e.preventDefault();
                $(".load:hidden").slice(0, 3).slideDown();
            });
        },
        carousel: function() {
            var width = $(document).width();
            if (width > 992) {

                $(".owl-carousel").owlCarousel({
                    nav: true,
                    loop: true,
                    autoplay:true,
                });

            }
            if (width < 992) {
                $(".owl-carousel").owlCarousel({
                    items: 1,
                    nav: true,
                    loop: true,
                    autoplay:true,
                });
            }
        },
        // navBarDesktop: function() {
        //     if (!$('body').hasClass('article')) {
        //         $(document).on('scroll', function() {
        //             var width = $(document).width();
        //             var scrollPosition = $(this).scrollTop();
        //             scrollPosition > 10 ? $('.navBar').css({ "background-color": "#F02932" }) : $('.navBar').css({ "background-color": "transparent" });
        //             scrollPosition > 10 ? $('.navBar-social').css({ "background-color": "#fff" }) : $('.navBar-social').css({ "background-color": "rgba(255,255,255,.8)" });
        //         });
        //     }
        // },
        // navBarColor: function() {
        //     var width = $(document).width();
        //     if (width > 992) {
        //         this.navBarDesktop();
        //     }
        // },
        toggleClass: function(classToToggle) {
            $(classToToggle).slideToggle();
        },
        openMenuNav: function(e) {
            e.classList.toggle("is-active");
            this.showMenu('.navBar__menu');

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
