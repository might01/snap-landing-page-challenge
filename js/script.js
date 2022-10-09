const navFeature = document.getElementById("menu-features");
const navCompany = document.getElementById("menu-company");
const featureMenu = document.getElementById("features-menu");
const companyMenu = document.getElementById("company-menu");

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

navFeature.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  featureMenu.classList.toggle("flex");
  featureMenu.classList.toggle("hidden");
});

navCompany.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  companyMenu.classList.toggle("flex");
  companyMenu.classList.toggle("hidden");
});

menuBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  sideMenu.classList.toggle("hidden");
});
