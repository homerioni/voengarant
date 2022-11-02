'use strict'

$(document).ready(function () {

    // Header mob
    $('.header__menu-item').click(function () {
        if ($(window).width() <= 768) {
            $(this).toggleClass('active')
                .find('.header__sub-list').slideToggle();
        }
    });
    $('.header__burger').click(function () {
        $('body').toggleClass('lock');
        if ($(this).hasClass('active')) {
            $(".header__burger-menu").hide('slide', {}, 300);
        } else {
            $(".header__burger-menu").show('slide', {}, 300);
        }
        $(this).toggleClass('active');
    });
    $('.header__close').click(function () {
        $('body').removeClass('lock');
        $(".header__burger-menu").hide('slide', {}, 300);
        $('.header__burger').removeClass('active');
    });

    // Consultation focus
    $('.consultation__input')
        .focusin(function () {
            $(this).parent().addClass('focus');
        })
        .focusout(function () {
            $(this).parent().removeClass('focus');
        });

    // Rating
    function ratingHtml () {
        $(this).html(() => {
            let text = '',
                qty = Math.round($(this).attr('rating') / 10);
            for (let i = 1; i <= qty; i++) {
                text += '<i></i>';
            }
            return text;
        });
    }
    $('.rating-func').each(ratingHtml);
    $('.rating__select').change(() => $('.rating-func').each(ratingHtml));

    // Modal
    $('.modal .close').click(function () {
        $('body').removeClass('lock');
        $(this).parents('.modal').hide();
        $('.modal__content > *').removeAttr('style');
    });
    $('.popup-map').click(function () {
        $('body').addClass('lock');
        $('.modal-map').css('display', 'flex').hide().fadeIn();
    });
    $('.popup-feedback').click(function () {
        $('body').addClass('lock');
        $('.modal-feedback').css('display', 'flex').hide().fadeIn();
    });
    $('.popup-consultation').click(function () {
        $('body').addClass('lock');
        $('.modal-consultation').css('display', 'flex').hide().fadeIn();
    });
    $('.popup-img').click(function () {
        $('body').addClass('lock');
        $('.modal-img__content img').attr('src', $(this).attr('imgURL'));
        $('.modal-img').css('display', 'flex').hide().fadeIn();
        $('.modal-img__close').css({
            'right': ($('.modal-img__content img').position().left) + 'px',
            'top': ($('.modal-img__content img').position().top) + 'px',
        });
    });
    click(function () {
        $('body').addClass('lock');
        $('.modal-img__content img').attr('src', $(this).attr('src'));
        $('.modal-img').css('display', 'flex').hide().fadeIn();
        $('.modal-img__close').css({
            'right': ($('.modal-img__content img').position().left) + 'px',
            'top': ($('.modal-img__content img').position().top) + 'px',
        });
    });
    $('.modal-feedback__send').click(function () {
        $('.modal-feedback__form').hide();
        $('.modal-feedback__complete').show();
    });
    $('.modal-consultation__send').click(function () {
        $('.modal-consultation__form').hide();
        $('.modal-consultation__complete').show();
    });

    // Layouts tabs
    $('.layouts__tab').click(function () {
        $('.layouts__tab').removeClass('active');
        $(this).addClass('active');
    });
    $('.layouts__tab-content input').change(function () {
        $('.layouts__tab-content').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Bank calculate input range
    $("#calc-years-range").slider({
        range: 'min',
        value: 42,
        min: 18,
        max: 70,
        slide: function( event, ui ) {
            $("#calc-years").val(ui.value + " года");
        }
    });
    $("#calc-years").val($("#calc-years-range").slider("value") + " года");

    $("#calc-save-range").slider({
        range: 'min',
        value: 2800000,
        min: 0,
        max: 10000000,
        step: 20000,
        slide: function( event, ui ) {
            $("#calc-save").val(ui.value.toLocaleString() + " руб.");
        }
    });
    $("#calc-save").val($("#calc-save-range").slider("value").toLocaleString() + " руб.");

    $("#calc-credit-range").slider({
        range: 'min',
        value: 1900000,
        min: 100000,
        max: 10000000,
        step: 20000,
        slide: function( event, ui ) {
            $("#calc-credit").val(ui.value.toLocaleString() + " руб.");
        }
    });
    $("#calc-credit").val($("#calc-credit-range").slider("value").toLocaleString() + " руб.");

    // Add apartment range input
    const apartmentInputFrom = $("#apartment-cost-from"),
        apartmentInputTo = $("#apartment-cost-to"),
        apartmentRange = $("#apartment-cost-range");

    apartmentRange.slider({
        range: true,
        min: 0,
        max: 10000000,
        values: [0, 10000000],
        step: 10000,
        slide: function(event, ui) {
            apartmentInputFrom.val(ui.values[0]);
            apartmentInputTo.val(ui.values[1]);
        }
    });
    // .replace(/\s+/g, '')
    apartmentInputFrom.on("change", function() {
        const from = $(this).val(),
              to = apartmentRange.slider("values", 1);
        console.log(apartmentRange.slider("values", 1));

        if (from < to) {
            apartmentRange.slider("values", [from, to]);
        } else {
            $(this).val(to);
            apartmentRange.slider("values", [to, to]);
        }
    });
    apartmentInputTo.on("change", function() {
        const to = $(this).val(),
              from = apartmentRange.slider("values", 0);

        if (from < to) {
            apartmentRange.slider("values", [from, to]);
        } else {
            $(this).val(from);
            apartmentRange.slider("values", [from, from]);
        }
    });

    // Add apartment checkboxes
    $('.add-apartment__label-checkbox input').change(function () {
        $('.add-apartment__label-checkbox').removeClass('active');
        $(this).parent().addClass('active');
    });


    // Q&A
    $('.qa__tab').click(function () {
        $('.qa__tab').removeClass('active');
        $(this).addClass('active');
    });
    $('.qa__tab-content input').change(function () {
        $('.qa__tab-content').removeClass('active');
        $(this).parent().addClass('active')
    });

    // Intro-filter mob
    $('.intro-filter__open-btn').click(function () {
        $(this).toggleClass('active')
            .parent().find('.intro-filter__inputs').slideToggle();
    });
    $('.intro-filter__close').click(function () {
        $('.intro-filter__open-btn').removeClass('active');
        $('.intro-filter__inputs').slideUp();
    });

    // Filter mob
    $('.filter__open-btn').click(function () {
        $(this).toggleClass('active')
            .parent().find('.filter__form').slideToggle();
    });
    $('.filter__close').click(function () {
        $('.filter__open-btn').removeClass('active');
        $('.filter__form').slideUp();
    });

    $('.modal-map__obj-btn').click(function () {
        console.log('click')
    });

    // Account mobile scroll for active nav
    if ($('.account__navigation').length) {
        $('.account__navigation').animate({
            scrollLeft: $(".account__nav-item.active").offset().left - 20 // класс объекта к которому приезжаем
        }, 0);
    }

    // Account checkbox
    $('.profile__checkbox-box input').change(function () {
        $(this).parent().toggleClass('active');
    });

    // Header search
    $('.header__search').click(function () {
        $(this).addClass('active');
        $('body').addClass('lock');
        $('.header__search-form').show('slide', {direction:'right'});
        $('.header__search-content').slideDown();
        setTimeout(function () {
            $('.header__search-label input').focus();
        }, 400)
    });
    $('.header__search-close').click(function () {
        $('.header__search').removeClass('active');
        $('body').removeClass('lock');
        $('.header__search-form').hide('slide', {direction:'right'});
        $('.header__search-content').slideUp();
    });

});