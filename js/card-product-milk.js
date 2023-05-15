// // Burger menu

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button");
  let links = menu.find(".burger-menu__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");
    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overflow", "hidden");
      $(".header__body").css("display", "none");
    } else {
      $("body").css("overflow", "visible");
      $(".header__body").css("display", "flex");
    }
  }
}
burgerMenu(".burger-menu");

// Swiper for Gallery Slider

const swiperGallery = new Swiper(".gallery-swiper-1", {
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".gallery-swiper-button-next-1",
    prevEl: ".gallery-swiper-button-prev-1",
  },
});

// Count Quantity of Milk for the face

let countPlus = document.querySelector(".plus");
let countMinus = document.querySelector(".minus");
let numberHtml = document.querySelector(".number-favorite");

let number = 0;
numberHtml.innerText = 1;

plus.addEventListener("click", function () {
  number++;
  numberHtml.innerText = number;
});

countMinus.addEventListener("click", function () {
  if (numberHtml.innerText == 0) {
    numberHtml.innerText = 0;
  } else {
    number--;
    numberHtml.innerText = number;
  }
});
