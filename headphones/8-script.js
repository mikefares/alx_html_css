document.addEventListener("DOMContentLoaded", function () {
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".header-menu");

toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});
});
