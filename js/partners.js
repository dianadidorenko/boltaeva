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

// Partners Application

let headerFormPartners = document.getElementById("header-form-partners"),
  headerFormTogglePartners = document.getElementById("become-partner"),
  headerFormClosePartners = document.querySelector(".close-partners"),
  wrapper = document.querySelector(".wrapper");

headerFormTogglePartners.onclick = function () {
  headerFormPartners.style.display = "flex";
  wrapper.style.display = "none";
};
headerFormClosePartners.onclick = function () {
  headerFormPartners.style.display = "none";
  wrapper.style.display = "flex";
};
