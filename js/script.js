   ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938723, 30.328377],
            zoom: 16
        }),

        myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Интернет магазин Gllacy'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [82, 142]],
            iconImageHref: 'img/pin.png',
            iconImageSize: [90, 150],
            iconImageOffset: [-60, -140],
        });

    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);
}
