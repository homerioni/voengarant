// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const dis_slider = new Swiper('.dis-slider__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.dis-slider__pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 6000,
    },
});

const reviews_slider = new Swiper('.reviews-slider__slider', {
    direction: 'horizontal',
    spaceBetween: rem(1.5),
    navigation: {
        prevEl: '.reviews-slider .prev',
        nextEl: '.reviews-slider .next',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.6,
        },
        769: {
            slidesPerView: 4.6,
        }
    },
});

const catalog_slider_wide = new Swiper('.catalog-slider__slider--wide', {
    direction: 'horizontal',
    slidesPerView: 5.4,
    spaceBetween: rem(2),
    navigation: {
        prevEl: '.catalog-slider .prev',
        nextEl: '.catalog-slider .next',
    },
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.catalog-slider__pagination',
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 5.3,
        },
    },
});

const catalog_slider = new Swiper('.catalog-slider__slider--normal', {
    direction: 'horizontal',
    spaceBetween: rem(1),
    navigation: {
        prevEl: '.catalog-slider .prev',
        nextEl: '.catalog-slider .next',
    },
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.catalog-slider__pagination',
        type: 'bullets',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 4.1,
        },
    },
});

const discounts_slider = new Swiper('.discounts__content.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    breakpoints: {
        0: {
            spaceBetween: rem(1.2),
        },
        769: {
            spaceBetween: rem(3.5),
        },
    },
});

const product_slider_thumb = new Swiper('.product-slider__slider-thumb', {
    direction: 'horizontal',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 2.1,
            spaceBetween: rem(1.2),
        },
        769: {
            slidesPerView: 7,
            spaceBetween: rem(2),
        },
    },
});

const product_slider = new Swiper('.product-slider__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl: '.product-slider .prev',
        nextEl: '.product-slider .next',
    },
    thumbs: {
        swiper: product_slider_thumb,
    },
});

const complex_slider = new Swiper('.complex__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl: '.complex .prev',
        nextEl: '.complex .next',
    },
    pagination: {
        el: '.complex__pagination',
        type: 'bullets',
    },
});

const banks_req_slider = new Swiper('.banks-req__slider', {
    direction: 'horizontal',
    slidesPerView: 2.1,
    spaceBetween: rem(1.2),
    autoplay: {
        delay: 10000,
    },
});

const navigation_slider = new Swiper('.navigation__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(1.6),
});

const news_min_slider = new Swiper('.news-min__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(1.6),
    autoplay: {
        delay: 10000,
    },
});

const how_get_slider = new Swiper('.how-get__slider', {
    direction: 'horizontal',
    slidesPerView: 2.2,
    spaceBetween: rem(1.2),
    autoplay: {
        delay: 10000,
    },
});

const banks_info_slider = new Swiper('.banks-info__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(2),
    autoplay: {
        delay: 12000,
    },
});

const news_sidebar_slider = new Swiper('.news-sidebar__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(1.2),
    autoplay: {
        delay: 12000,
    },
});

const news_sidebar_notImg_slider = new Swiper('.news-sidebar__slider-not-img', {
    direction: 'horizontal',
    slidesPerView: 2.1,
    spaceBetween: rem(1.2),
    autoplay: {
        delay: 12000,
    },
});

const discount_sidebar_slider = new Swiper('.discount-sidebar__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(1.2),
    autoplay: {
        delay: 12000,
    },
});

const news_slider = new Swiper('.news__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(1.6),
    autoplay: {
        delay: 12000,
    },
});

const how_build_slider = new Swiper('.how-build__slider', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    spaceBetween: rem(2),
});