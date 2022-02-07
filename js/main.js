$(function () {
    $('.first-box__bg-slider').slick({
        dots: false,
        arrows: false,
        asNavFor: '.first-box__slider-nav',
        fade: true,
    });
    $('.first-box__slider-nav').slick({
        dots: true,
        arrows: false,
        asNavFor: '.first-box__bg-slider',
    });

    $('.header__media-menu-btn-close').on('click', function (){
        $('.header__media-menu').addClass('header__media-menu-close')
    })
    $('.header__box-btn-media').on('click', function (){
        $('.header__media-menu').removeClass('header__media-menu-close')
    })

})