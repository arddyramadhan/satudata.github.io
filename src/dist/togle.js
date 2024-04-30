const hamburger = document.querySelector("#hamburger");
hamburger?.addEventListener("click", function () {
  const android = document.querySelector("#android");
  android?.classList.toggle("hidden");
});

const hamburgerClose = document.querySelector("#hamburger-close");
hamburgerClose?.addEventListener("click", function () {
  const android = document.querySelector("#android");
  android?.classList.toggle("hidden");
});

const publikasi = document.querySelector("#publikasi");
publikasi?.addEventListener("click", function () {
  const publikasiMenu = document.querySelector("#publikasi-menu");
  publikasiMenu?.classList.toggle("hidden");
});

const tentang = document.querySelector("#tentang");
tentang?.addEventListener("click", function () {
  const tentangMenu = document.querySelector("#tentangMenu");
  tentangMenu?.classList.toggle("hidden");
});

const navbar = document.querySelector(".navbar-menu");
navbar?.addEventListener("click", function () {
  navbar?.classList.toggle("navbar-active");
});
