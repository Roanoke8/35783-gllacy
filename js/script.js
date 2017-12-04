   ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938806, 30.327303],
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
};
var link = document.querySelector(".callback-button");
var modal = document.querySelector(".popup-callback");
var modalClose = document.querySelector(".button-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("popup-callback-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("popup-callback-show");
});
