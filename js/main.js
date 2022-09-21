(function($) {
    "use strict";
    $('.promo-slider').slick({
        centerMode: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        arrows: false,
        adaptiveHeight: true,
        responsive : true,
        autoplay: true
    });
    $('.product-deals-slider').slick({
        centerMode: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true
    });
})(jQuery);