/* HIDDEN MENU */

const hamMenu = document.querySelector(".ham__menu");
const body = document.querySelector(".body");
const hiddenMenu = document.querySelector(".hidden__menu");
const hiddenMenuBtn = document.querySelector(".hidden__menu--btn");
const blackoutOverlay = document.querySelector('.blackout__overlay')
const nav = document.querySelector('.nav__hide')

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  hiddenMenu.classList.toggle("active");
 nav.classList.toggle('active')
     blackoutOverlay.classList.toggle('active')
});

hiddenMenuBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("active");
   hamMenu.classList.toggle("active");
 nav.classList.toggle('active')
      blackoutOverlay.classList.toggle('active')
;
});

/* GALLERY */


