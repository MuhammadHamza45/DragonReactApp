(function ($) {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,            
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    });
})(jQuery);
