$( document ).ready(function() {

    // open  navigation list (mobile)

    $(".page-header__bars").click(function(e) {
        e.preventDefault();
        $(".page-header__navigation-list").toggleClass("show");
        $(".page-header__bars i").toggleClass("opacity");
    });

    if (screen.width < 840) {
        $(".page-header__navigation-items").click(function (e) {
            e.preventDefault();
            $(this).children(".page-header__hidden-list").toggleClass("show");
            $(this).find(".arrow").toggleClass("arrow-down ");
            $('.page-header__hidden-list').not($(this).children(".page-header__hidden-list")).removeClass('show');
            $('.arrow').not($(this).find(".arrow")).removeClass('arrow-down');
        })
    }

    if (screen.width >= 840) {
        $(".page-header__navigation-items").mouseover(function(e) {
            e.preventDefault();
            $(this).children(".page-header__hidden-list").addClass("show");
            $(this).find(".arrow").addClass("arrow-down ");
            $('.page-header__hidden-list').not($(this).children(".page-header__hidden-list")).removeClass('show');
            $('.arrow').not($(this).find(".arrow")).removeClass('arrow-down');
        })
        $(".page-header__navigation-items").mouseout(function(e) {
            e.preventDefault();
            $(this).children(".page-header__hidden-list").removeClass("show");
            $(this).find(".arrow").removeClass("arrow-down ");
            $('.page-header__hidden-list').not($(this).children(".page-header__hidden-list")).removeClass('show');
            $('.arrow').not($(this).find(".arrow")).removeClass('arrow-down');
        })

        $(".page-header__navigation-items--1").mouseover(function(e) {
            e.preventDefault();
            $(this).children(".page-header__navigation-name").addClass("yellow");
        })
        $(".page-header__navigation-items--1").mouseout(function(e) {
            e.preventDefault();
            $(this).children(".page-header__navigation-name").removeClass("yellow");
        })
    }


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            840:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })

    $('.logotypes__slider').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots: false,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },
            640:{
                items:3,
                margin:20,
            },
            840:{
                items:4,
                margin:40,
            }
        }
    })

    //open basket popup
    $(".page-header__basket-block").click(function(e) {
        e.preventDefault();
        $(".basket-popup").toggleClass("open-popup");
        $(this).toggleClass("darkGreen");
        $(".callRequest-popup").removeClass("open-popup");
    });

    //open call popup
    $(".page-header__callRequest").click(function(e) {
        e.preventDefault();
        $(".callRequest-popup").addClass("open-popup");
        $(this).addClass("darkGreen");
        $(".basket-popup").removeClass("open-popup");
    });

    $(".close-btn").click(function(e) {
        e.preventDefault();
        $(".callRequest-popup").removeClass("open-popup");
        $(".page-header__callRequest").removeClass("darkGreen");
    });

    //Scroll to up button

    if (screen.width >= 1400) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.scrollTop').fadeIn();
            } else {
                $('.scrollTop').fadeOut();
            }
        });
        $('.scrollTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    }

});