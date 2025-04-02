const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const closeMenu = document.getElementById("close-menu");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
});

closeMenu.addEventListener("click", () => {
  navList.classList.remove("nav-active");
});
