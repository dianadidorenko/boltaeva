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
      // calling burger menu
      $("body").css("overflow", "hidden");
      $(".header__body").css("left", "-1000px");
      console.log("OK9");
    } else {
      // when clicking outside the burger menu
      $("body").css("overflow", "visible");
      $(".header__body").css("left", "0");
      console.log("OK10");
    }
  }
}
burgerMenu(".burger-menu");

// Swiper for Header Home Slider

const swipeHome = new Swiper(".header-swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".header-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".header-swiper-button-next",
    prevEl: ".header-swiper-button-prev",
  },
});

// Swiper for Header Home Gallery Slider

const swiperGallery1 = new Swiper(".gallery-swiper-1", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".gallery-swiper-button-next-1",
    prevEl: ".gallery-swiper-button-prev-1",
  },
});

// Swiper for Header Home Gallery Slider 2

const swiperGallery2 = new Swiper(".gallery-swiper-2", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".gallery-swiper-button-next-2",
    prevEl: ".gallery-swiper-button-prev-2",
  },
});

// Swiper for Header Home Gallery Slider 2

const swiperGallery3 = new Swiper(".gallery-swiper-3", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".gallery-swiper-button-next-3",
    prevEl: ".gallery-swiper-button-prev-3",
  },
});

// Authorization Button Form

let headerFormAuth = document.getElementById("authorization-form"),
  headerFormToggleAuth = document.getElementById("client-button"),
  headerFormCloseAuth = document.querySelector(".close-auth"),
  wrapper = document.querySelector(".wrapper");

headerFormToggleAuth.onclick = function () {
  headerFormAuth.style.display = "flex";
  wrapper.style.display = "none";
};
headerFormCloseAuth.onclick = function () {
  headerFormAuth.style.display = "none";
  wrapper.style.display = "block";
};

// Authorization Button Form 768px

let headerFormToggleAuth768px = document.getElementById("clientButtonBurger");

headerFormToggleAuth768px.onclick = function () {
  headerFormAuth.style.display = "flex";
  wrapper.style.display = "none";
};
headerFormCloseAuth.onclick = function () {
  headerFormAuth.style.display = "none";
  wrapper.style.display = "block";
};

// Registration Button Form

let headerFormReg = document.getElementById("registration-form"),
  headerFormToggleReg = document.getElementById("header-form__button-sign-in"),
  headerFormCloseReg = document.querySelector(".close-reg");

headerFormToggleReg.onclick = function () {
  headerFormReg.style.display = "flex";
  headerFormReg.style.overflowY = "auto";
  wrapper.style.display = "none";
  headerFormAuth.style.display = "none";
};
headerFormCloseReg.onclick = function () {
  headerFormReg.style.display = "none";
  wrapper.style.display = "flex";
};

// Recovery password Form

let headerFormRecPass = document.getElementById("recovery-pass-form"),
  headerFormToggleRecPass = document.getElementById("forgot-password-button"),
  headerFormCloseRecPass = document.querySelector(".close-rec-pass");

headerFormToggleRecPass.onclick = function () {
  headerFormRecPass.style.display = "flex";
  wrapper.style.display = "none";
  headerFormAuth.style.display = "none";
  // headerFormReg.style.display = 'none'
};
headerFormCloseRecPass.onclick = function () {
  headerFormRecPass.style.display = "none";
  wrapper.style.display = "flex";
};

// Search Pop Up Form

let FormToggleSearch = document.getElementById("searchButton"),
  FormSearch = document.querySelector(".search-form"),
  FormClose = document.querySelector(".search-close"),
  searchPageClose = document.querySelector(".search-page-close"),
  inputIn = document.querySelector(".search-form__input"),
  button = document.getElementById("lead-to-search-page"),
  notFoundPage = document.querySelector(".search-not-found"),
  FormNotFoundClose = document.querySelector(".search-page-close-not-found");

FormToggleSearch.addEventListener("click", function () {
  FormSearch.style.display = "block";
  wrapper.style.opacity = "0.3";
  FormClose.style.display = "block";

  button.onclick = function () {
    inputIn.value = inputIn.value.toLowerCase();
    if (
      inputIn.value == "care cosmetics" ||
      inputIn.value == "decorative cosmetics" ||
      inputIn.value == "eyebrow cosmetics" ||
      inputIn.value == "accessories"
    ) {
      searchPageClose.style.display = "block";
      inputIn.value = "";
      FormClose.addEventListener("click", function () {
        FormSearch.style.display = "none";
        wrapper.style.opacity = "1";
        FormClose.style.display = "block";
        searchPageClose.style.display = "none";
      });
    } else {
      // Nothing Found Search Page Form
      console.log("NO");
      FormSearchPage.style.display = "none";
      notFoundPage.style.display = "block";
      FormNotFoundClose.style.display = "block";
      inputIn.value = "";

      FormNotFoundClose.onclick = function () {
        FormSearch.style.display = "none";
        wrapper.style.opacity = "1";
        notFoundPage.style.display = "none";
      };
    }
  };

  FormClose.onclick = function () {
    FormSearch.style.display = "none";
    wrapper.style.opacity = "1";
  };
});

// Search Page Form

let FormToggleSearchPage = document.getElementById("lead-to-search-page"),
  FormSearchPage = document.querySelector(".search-page"),
  FormClosePage = document.querySelector(".search-page-close");

FormToggleSearchPage.addEventListener("click", function () {
  FormSearch.style.display = "none";
  FormSearchPage.style.display = "block";
  wrapper.style.opacity = "0";
  FormClosePage.style.display = "block";

  FormClosePage.addEventListener("click", function () {
    FormSearchPage.style.display = "none";
    wrapper.style.opacity = "1";
    FormClosePage.style.display = "none";
  });
});

// Search Pop Up Form 768px

let FormToggleSearchBurger = document.getElementById("searchButtonBurger"),
  burgerMenuSeacrh = document.querySelector(".burger-menu"),
  headerBodySearch = document.querySelector(".header__body");

FormToggleSearchBurger.addEventListener("click", function () {
  // calling burger menu search form
  FormSearch.style.display = "block";
  wrapper.style.opacity = "0.3";
  FormClose.style.display = "block";
  burgerMenuSeacrh.style.display = "none";

  button.onclick = function () {
    // when typing value in search input
    inputIn.value = inputIn.value.toLowerCase();
    if (
      inputIn.value == "care cosmetics" ||
      inputIn.value == "decorative cosmetics" ||
      inputIn.value == "eyebrow cosmetics" ||
      inputIn.value == "accessories"
    ) {
      if (burgerMenuSeacrh.style.display == "none") {
        // when typing value suits search input condition
        $(".header__body").css("left", "-1000px");
        burgerMenuSeacrh.style.display = "flex";
        searchPageClose.style.display = "block";
        inputIn.value = "";
      }
    } else {
      // Nothing Found Search Page Form
      // when typing value doesn't suit search input condition
      FormSearchPage.style.display = "none";
      notFoundPage.style.display = "block";
      FormNotFoundClose.style.display = "block";
      inputIn.value = "";

      FormNotFoundClose.onclick = function () {
        FormSearch.style.display = "none";
        wrapper.style.opacity = "1";
        notFoundPage.style.display = "none";
        burgerMenuSeacrh.style.display = "flex";
      };
    }
  };
});

FormClose.addEventListener("click", function () {
  // when clicking outside burger menu search form
  FormSearch.style.display = "none";
  wrapper.style.opacity = "1";

  if (burgerMenuSeacrh.style.display == "none") {
    // when clicking outside burger menu search form and return burger menu
    $(".header__body").css("left", "-1000px");
    burgerMenuSeacrh.style.display = "flex";
  } else {
    $(".header__body").css("left", "0");
  }
});
