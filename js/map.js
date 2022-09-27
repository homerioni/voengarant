function getObjectItem (imgURL, title, price, text) {
    return ymaps.templateLayoutFactory.createClass(
        '<div class="modal-map__item">\n' +
        '    <div class="modal-map__item-content">\n' +
        '        <div class="modal-map__img-box">\n' +
        '            <img src='+ imgURL +' alt="">\n' +
        '        </div>\n' +
        '        <div class="modal-map__item-title">\n' +
        '            '+ title +'\n' +
        '        </div>\n' +
        '        <p class="modal-map__price">\n' +
        '            '+ price +'\n' +
        '        </p>\n' +
        '        <p class="modal-map__text">\n' +
        '            '+ text +'\n' +
        '        </p>\n' +
        '    </div>\n' +
        '</div>', {
            build: function () {
                this.constructor.superclass.build.call(this);

                this._$element = $('.modal-map__item', this.getParentElement());
            },

            onSublayoutSizeChange: function () {
                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                if(!this._isElement(this._$element)) {
                    return;
                }

                this.events.fire('shapechange');
            },

            onCloseClick: function (e) {
                e.preventDefault();

                this.events.fire('userclose');
            },

            _isElement: function (element) {
                return element && element[0] && element.find('.arrow')[0];
            }
        }
    )
}

function getSize (desktop, mobile) {
    if ($(window).width() > 768) {
        return desktop;
    } else {
        return mobile;
    }
}
var myMap;
ymaps.ready(function () {
    myMap = new ymaps.Map('map', {
            center: [55.735383, 37.701646],
            zoom: 10,
            // controls: [],
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([55.735383, 37.701646], {
            balloonContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/pik.png',
            iconImageSize: getSize([rem(6), rem(6)], [rem(4), rem(4)]),
            iconImageOffset: getSize([rem(-3), rem(-3)], [rem(-2), rem(-2)]),
            balloonLayout: getObjectItem(
                '../img/objects-img1.png',
                'ЖК “Измайловский Лес”',
                'от 2000 000 руб.',
                'Застройщик - ПИК'
            ),
            hideIconOnBalloonOpen: false,
            balloonPanelMaxMapArea: 0,
        }),

        myPlacemark2 = new ymaps.Placemark([55.661574, 37.573856], {
            balloonContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/pik.png',
            iconImageSize: getSize([rem(6), rem(6)], [rem(4), rem(4)]),
            iconImageOffset: getSize([rem(-3), rem(-3)], [rem(-2), rem(-2)]),
            balloonLayout: getObjectItem(
                '../img/objects-img1.png',
                'ЖК “Измайловский Лес”',
                'от 2000 000 руб.',
                'Застройщик - ПИК'
            ),
            hideIconOnBalloonOpen: false,
            balloonPanelMaxMapArea: 0,
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2);
});