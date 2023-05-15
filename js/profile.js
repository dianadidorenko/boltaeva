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

// Swiper for Gallery Slider 1

const swiperGallery1 = new Swiper(".profile-swiper-1", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".profile-swiper-button-next-1",
    prevEl: ".profile-swiper-button-prev-1",
  },
});

// Swiper for Gallery Slider 2

const swiperGallery2 = new Swiper(".profile-swiper-2", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".profile-swiper-button-next-2",
    prevEl: ".profile-swiper-button-prev-2",
  },
});

// Swiper for Gallery Slider 3

const swiperGallery3 = new Swiper(".profile-swiper-3", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".profile-swiper-button-next-3",
    prevEl: ".profile-swiper-button-prev-3",
  },
});