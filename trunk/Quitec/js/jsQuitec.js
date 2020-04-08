
/* Carousel*/
$('.carousel').carousel({
    interval: 5000 //changes the speed
})

/* Smooth scrolling para anclas*/
$(function () {

    $('a[href*=#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({ scrollTop: targetOffset }, 1000);

                return false;

            }

        }

    });

});


$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
});


/*REPEDIR ANIMACION*/
$(document).ready(function () {
    $.doTimeout(5100, function () {
        $('.repeat.go').removeClass('go');
        return true;
    });
    $.doTimeout(5100, function () {
        $('.repeat').addClass('go');
        return true;
    });

});


/*OWL SLIDER*/
$(".owl-demo").owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true
});


$(document).ready(function () {
    $(".fakeloader").fakeLoader({
        timeToHide: 1800,
        bgColor: "#2c3f52",
        spinner: "spinner6"
    });
});

/*API GOOGLEMAPS*/
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(-0.183638, -78.489253);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 18,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll == '0') {
        $("#back-top").hide(1000);
    }
    else {
        $("#back-top").show(1000);
    }
    // Do something
});

$(document).ready(function () {
    // jQuery to collapse the navbar on scroll
    if ($('.navbar').offset().top > 150) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    }
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 150) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });

    var $offset = 0;
    if ($('.one-page-nav-scrolling').hasClass('one-page-nav__fixed')) {
        $offset = $(".one-page-nav-scrolling").height() + 8;
    }
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function (event) {
        var $position = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $position - $offset
        }, 600);
        event.preventDefault();
    });

    var $scrollspy = $('body').scrollspy({ target: '.one-page-nav-scrolling', offset: $offset + 2 });

    // Collapse Navbar When It's Clickicked
    $(window).scroll(function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});


