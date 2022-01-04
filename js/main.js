$(function () {
    $('.doors-button').on('click', function(event) {
        $('.doors-button').not(this).removeClass('active').next().slideUp(150);
        $(this).toggleClass('active').next().slideToggle(150)
    });
    $('.tab-btn').on('click', function() {
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        $('.tab__item').removeClass('active');
    });
    $('.partitions-tab-button').on('click', function() {
        $('#partitions-tab').addClass('active');
    });
    $('.walls-tab-button').on('click', function() {
        $('#walls-tab').addClass('active');
    });
    $('.doors-tab-button').on('click', function() {
        $('#doors-tab').addClass('active');
    });
    $('.feedback-slider-wrap').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.burger').on('click', function() {
        $('.burger').toggleClass('active');
        $('.top-header-menu').toggleClass('active');
        $('body').toggleClass('scroll-lock');
    })
})