// Burger menu

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

// Choose a shipping method method

$("select#toWhomDeliver").on("change", function () {
  $('input[name="deliver"]').val(this.value);
});

$("select#howToDeliver").on("change", function () {
  $('input[name="how"]').val(this.value);
});

// Make Order Slider

const swiperMakeOrder = new Swiper(".make-order-swiper-1", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".make-order-swiper-button-next-1",
    prevEl: ".make-order-swiper-button-prev-1",
  },
});
