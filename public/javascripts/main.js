var customScripts = {

    scrollTop: function () {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        // go to anchor when clicked
        $(function () {
            $('a[href*=#]:not([id=scrollUp]):not([class=tabs])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

    },
    loader: function () {

        // check if page is fully loaded
        $(window).load(function () {
            $('#loader').delay(2500).fadeOut(1800);

        });
    },
    toolTips: function () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        })
    },
    init: function () {
        customScripts.scrollTop();
        customScripts.loader();
        customScripts.toolTips();
    }
};
$('document').ready(function () {
    customScripts.init();
});