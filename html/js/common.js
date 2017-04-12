$(function() {

    'use strict';
    var w = $(window).width();

    //-------------------------------
    //Меню
    //-------------------------------

    var $headerMenuBtn = $('.header__menu-btn'),
        $headerMenu = $('.header__menu');

    $headerMenuBtn.click(function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active').html('<span></span>Закрыть');
            $headerMenu.fadeIn(300);
        } else {
            $this.removeClass('active').html('<span></span>Меню');
            $headerMenu.fadeOut(300);
        }
    });
    $headerMenu.on('click', 'a', function() {
        $headerMenuBtn.removeClass('active').html('<span></span>Меню');
        $headerMenu.fadeOut(500);
    });

    //------------------------------------------------------
    //Счетчик времени
    //------------------------------------------------------
    var $registrationCounterBox = $('.registration__counter-box');
    $registrationCounterBox.TimeCircles({
        animation: "ticks",
        circle_bg_color: "#82e734",
        use_background: true,
        fg_width: 0.05,
        bg_width: .8,
        direction: "Clockwise",
        text_size: 0.1,
        number_size: 0.20,
        time: {
            Days: {
                show: true,
                text: "Дней",
                color: "#e6e7f1"
            },
            Hours: {
                show: true,
                text: "Часов",
                color: "#e6e7f1"
            },
            Minutes: {
                show: true,
                text: "Минут",
                color: "#e6e7f1"
            },
            Seconds: {
                show: false
            }
        }
    });
    $(window).resize(function() {
        $registrationCounterBox.TimeCircles().rebuild();
    });

    //------------------------------------------------------
    //slider
    //------------------------------------------------------
    $('.slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 1200
    });

    //-------------------------------
    //Выпадающие пункты номинаций
    //-------------------------------
    var $nominationItem = $('.nomination__item');
    $nominationItem.find('.nomination__item-box').hide();

    $nominationItem.hover(
        function() {
            $(this).addClass('show').find('.nomination__item-box').stop().slideDown(300);
        },
        function() {
            $(this).removeClass('show').find('.nomination__item-box').stop().slideUp(300);
        }
    );


    //------------------------------------
    //popup
    //------------------------------------
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".stage__item-date").equalHeight();
    $(".stage__item").equalHeight();
    $(".jury__item-name").equalHeight();
    $(".jury__item-position").equalHeight();
    $(".contacts__item-name").equalHeight();
    $(".contacts__item-position").equalHeight();
    //$(".winners__place-name").equalHeight();


    //-------------------------------
    //Сокрытие жюри
    //-------------------------------
    var $juryBox = $('.jury__box'),
        $juryItem = $('.jury__item'),
        heightBox = $juryBox.height(),
        heightItem = $juryItem.height();

    $juryBox.addClass('close').css({
        'max-height': heightItem
    });

    $(window).resize(function() {
        if($juryBox.hasClass('close')) {
            heightItem = $juryItem.height();
            $juryBox.removeAttr('style');
            heightBox = $juryBox.height();
            $juryBox.css({
                'max-height': heightItem
            });
        } else {
            heightItem = $juryItem.height();
            $juryBox.removeAttr('style');
            heightBox = $juryBox.height();
            $juryBox.css({
                'max-height': heightBox
            });
        }
        return heightItem, heightBox
    });

    $('.jury__button-show').click(function() {
        if ($juryBox.hasClass('close')) {
            $(this).text('Скрыть всех');
            $juryBox.animate({
                'max-height': heightBox
            },  heightBox * 0.1 + 600).removeClass('close');
        } else {
            $(this).text('Показать всех');
            $juryBox.animate({
                'max-height': heightItem
            }, heightBox * 0.1 + 600).addClass('close');
            $('html, body').animate({scrollTop: $juryBox.offset().top }, heightBox * 0.1 + 600, 'swing');
        }
    });


    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, (Math.abs(thisSect - $(window).scrollTop()) * 0.1 + 1000), 'linear');
    });


    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
