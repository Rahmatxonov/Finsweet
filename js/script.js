const btn = document.getElementById("navbar__img__addBurger");
const menu = document.querySelector(".navbar__menu");
const remove__btn = document.getElementById("removeburger");

btn.addEventListener("click", () => {
  menu.classList.add("show");
  remove__btn.style.display = "block";
  btn.style.display = "none";
});
remove__btn.addEventListener("click", () => {
  menu.classList.remove("show");
  remove__btn.style.display = "none";
  btn.style.display = "block";
});
