$(document).ready(function () {

    /* --- Hamburger click --- */
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
    }

    hamburger.addEventListener('click', handleClick);

    /* --- Hamburger bug --- */

    $(window).resize(function () {
        if ($(window).width() > 780) {
            nav.classList.remove('navigation--active');
            hamburger.classList.remove('hamburger--active');
            $('.hamburger').css('display', 'none');
        } else {
            $('.hamburger').css('display', 'inline-block');
        }
    });

    /* --- Hamburger after header --- */

    $('.js--hamburger').waypoint(function (direction) {
        if (direction == "down") {
            $('.hamburger').css('display', 'inline-block');
        } else {
            if ($(window).width() > 780) {
                $('.hamburger').css('display', 'none');
            }

            nav.classList.remove('navigation--active');
            hamburger.classList.remove('hamburger--active');
        }
    }, {
        offset: '70px;'
    });

    /* --- Automatic scrolling --- */

    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* --- Scroll when page starts --- */

    var flag;
    function scrollOnLoad() {
        if (!flag) {
            flag = true;
            var target = window.location.href.substr(window.location.href.length - 14);
            if (target.substr(6, 6) == "scroll") {
                target = "#" + target.substr(target.length - 8);
                target = $(target);

                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        }
    }
    scrollOnLoad()

    /* --- Animations on scroll --- */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    $('.js--wp-1-1').waypoint(function (direction) {
        $('.js--wp-1-1').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    $('.js--wp-2-2').waypoint(function (direction) {
        $('.js--wp-2-2').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '80%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated slideInUp');
    }, {
        offset: '60%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });

    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    /* --- Greyscale of photo --- */

    const aboutMeBtn = document.querySelector('.about-me__btn');
    const aboutMePhoto = document.querySelector('.about-me__photo')
    $(aboutMeBtn).hover(function () {
        aboutMePhoto.classList.toggle('greyscale--active');
    }, function () {
        aboutMePhoto.classList.toggle('greyscale--active');
    });

    /* --- play gif on hover --- */

    $(document).ready(function () {
        $(".js-gif").hover(
            function () {
                $(this).attr('src', 'resources/img/about-me-6.gif');
            }, function () {
                $(this).attr('src', 'resources/img/about-me-6.png');
            });
    });
});

