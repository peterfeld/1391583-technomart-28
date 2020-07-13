var itemsGet = document.querySelectorAll(".catalog-get");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".modal-close");
var cartCloseForm = cartPopup.querySelector(".popup-cart-button-buy");

for (let itemGet of itemsGet) {
    itemGet.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

cartCloseForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});
