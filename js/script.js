// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    // AOS.init();

});

$(document).ready(function () {

    // Scroll Fix Header

    $(window).scroll(function () {
        if($(this).scrollTop() > 30){
            $('.header').addClass('header-fixed')
        }else{
            $('.header').removeClass('header-fixed')
        }
    });

    // Click Open Nav Mobile

    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed");
        $(".links-head").toggleClass("back");
    });

    // Slider Owl

    $('#sliderWelcome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#sliderClient').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:false,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});