const modal = document.getElementById("modal");
const body = document.getElementById("body");
const toggle = document.getElementById("nav__toggle");
const navList = document.getElementById("nav");

// popup 1
const modal__content1 = document.getElementById("content-1")
const close1 = document.getElementById("close-1");
const open1 = document.getElementById("open-1");
// popup 2
const modal__content2 = document.getElementById("content-2")
const close2 = document.getElementById("close-2");
const open2 = document.getElementById("open-2");
// popup 3
const modal__content3 = document.getElementById("content-3")
const close3 = document.getElementById("close-3");
const open3 = document.getElementById("open-3");
// popup 4
const modal__content4 = document.getElementById("content-4")
const close4 = document.getElementById("close-4");
const open4 = document.getElementById("open-4");

// popup 5
const modal__content5 = document.getElementById("content-5")
const close5 = document.getElementById("close-5");
const open5 = document.getElementById("open-5");

//popup 6
const modal__content6 = document.getElementById("content-6")
const close6 = document.getElementById("close-6");
const open6 = document.getElementById("open-6");


toggle.addEventListener("click", () => {
    if (navList.classList.contains("show")) {
        navList.classList.remove("show");
        return;
    }

    navList.classList.add("show");
})

open1.addEventListener("click", () => openPopup(modal__content1));
close1.addEventListener("click", () => closePopup(modal__content1));
open2.addEventListener("click", () => openPopup(modal__content2));
close2.addEventListener("click", () => closePopup(modal__content2));
open3.addEventListener("click", () => openPopup(modal__content3));
close3.addEventListener("click", () => closePopup(modal__content3));
open4.addEventListener("click", () => openPopup(modal__content4));
close4.addEventListener("click", () => closePopup(modal__content4));
open5.addEventListener("click", () => openPopup(modal__content5));
close5.addEventListener("click", () => closePopup(modal__content5));
open6.addEventListener("click", () => openPopup(modal__content6));
close6.addEventListener("click", () => closePopup(modal__content6));




function openPopup(popup) {
    modal.classList.add("show");
    popup.classList.add("show");
    body.style.overflow = "hidden";
}

function closePopup(popup) {
    modal.classList.remove("show");
    popup.classList.remove("show");
    popup.scrollTop = 0;
    body.style.overflow = "visible";
}