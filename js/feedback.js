var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var userName = feedbackPopup.querySelector(".feedback-user-name");
var userEmail = feedbackPopup.querySelector(".feedback-user-email");
var feedbackText = feedbackPopup.querySelector(".feedback-text");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    userName.focus();

    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !feedbackText) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", userName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    }
});
