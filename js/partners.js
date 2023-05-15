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
