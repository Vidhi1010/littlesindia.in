$(function() {
    var shrinkHeader = 93;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.main-navigation').addClass('shrink');
        } else {
            $('.main-navigation').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    };

    //// NAVIGATION CLOSE ANIMATION /////
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
    });


    //// Home Page Touch Slider /////
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');

    });

    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });


    //// OWL Slider /////    
    $("#owl-demo").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    ////new

    $('.owl-carousel').each(function() {
        $(this).owlCarousel({
            autoPlay: false,
            navigation: true,
            stopOnHover: true,
            singleItem: true,
            autoHeight: false,
            autoWidth: true,
            items: 6,
            loop: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            afterMove: function(elem) {
                $('.wmg-close').trigger('click');
            }
        });
    });

    $("#owl-demo_1").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_2").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_3").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_4").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_5").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_6").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_7").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $("#owl-demo_8").owlCarousel({
        autoPlay: false,
        navigation: true,
        stopOnHover: true,
        singleItem: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        afterMove: function(elem) {
            $('.wmg-close').trigger('click');
        }
    });

    $('.wmg-close').click(function() {
        var owl = $('#owl-demo');

        owl.owlCarousel({
            items: 4,
            singleItem: true,
            autoHeight: true,
            loop: true,
            autoplay: false,
            stopOnHover: true,
            autoplayHoverPause: true,
        });
        //owl.trigger('owl.play',6000);
        $(".owl-wrapper-outer").removeClass("carousel-height");
        //owl.trigger('owl.start',2000);
    });

    $('.product-box').click(function(event) {
        var owl = $('#owl-demo');
        owl.owlCarousel({
            items: 4,
            singleItem: true,
            autoHeight: true,
            loop: true,
            autoplay: false,
            stopOnHover: true,
            autoplayHoverPause: true
        });
        //owl.trigger('owl.play',2000);
        //owl.trigger('owl.stop',500000000);	
        $(".owl-wrapper-outer").addClass("carousel-height");
    });

    //// Buynow Open /////    

    //$('.buy-now').click(function() {
    //    $(".buy-now-open").slideToggle();					
    //	var myheight = $(".wmg-details").height();
    //	myheight = myheight + 100;
    //	$(".wmg-details").css('height',"auto");
    //	$(".wmg-item").css('margin-bottom',myheight+"px");
    //});

    //// Portfolio /////
    $('.my-grid').WMGridfolio();

    $('#myCarousel').carousel({
        interval: 4000,
        cycle: true,
        stopOnHover: false,
        autoplayHoverPause: true
    });

});

$('.references').click(function(e) {
    e.stopImmediatePropagation();
    $(".ref-popup").slideToggle();
});

$('.references3').click(function(e) {
    e.stopImmediatePropagation();
    $(".ref-popup3").slideToggle();
});

//share this
$('.ent-share a').hover(function(event) {
    event.stopImmediatePropagation();
    $(this).parent().find(".share_all").fadeIn();
});
$("body").on("click", function(event) {
    $(".share_all").fadeOut();
});


////// Main Nav hover ///// 		 				
if ($(window).width() > 767) {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(100);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(100);
    });
}

//// Product swap /////
function swap(image) {
    document.getElementById("main").src = image.href;
    document.getElementById("main2").src = image.href;
}

function swapImg(image, id) {
    document.getElementById(id).src = image.href;
    //document.getElementById("main2").src = image.href;
}


//Animation
setTimeout("new web().init();", 500);

$(document).ready(function() {
    if (window.location.href.indexOf("products.aspx?catid=2&babywipes") > -1) {
        $('.i0').addClass('open wm-margin');
        $('.d0').addClass('open');
    } else if (window.location.href.indexOf("products.aspx?catid=3&breastpump") > -1) {
        $('.i0').addClass('open wm-margin');
        $('.d0').addClass('open');
    } else if (window.location.href.indexOf("products.aspx?catid=3&glass-sipper") > -1) {
        $('.i1').addClass('open wm-margin');
        $('.d1').addClass('open');
        $('html, body').animate({
            scrollTop: $('.d1').offset().top - 150
        }, 800);
    }




});