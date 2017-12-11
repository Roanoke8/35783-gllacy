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
var link = document.querySelector(".callback-button");  // Ищем кнопку по которой будем вызывать модальное окно.
var modal = document.querySelector(".popup-callback");  // Ищем модальное окно.
var modalClose = modal.querySelector(".button-close"); // Ищем кнопку закрытия окна.
var modalName = modal.querySelector("#callback-text-name"); // Ищем инпут для атофокуса.
var modalEmail = modal.querySelector("#callback-text-mail");
var form = modal.querySelector(".callback-form");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("popup-callback-show");
  modalName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("popup-callback-show");
});
form.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value){
  evt.preventDefault();
  console.log("Нужно ввести логин и пароль");
} else {
  localStorage.setItem("modalEmail", modalEmail.value);
}
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("popup-callback-show")) {
      modal.classList.remove("popup-callback-show");
    }
  }
});
