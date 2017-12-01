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
