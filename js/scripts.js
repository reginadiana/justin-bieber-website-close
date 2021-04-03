let button_close_menu = document.getElementById("close_menu");
let button_open_menu = document.getElementById("open_menu");
let menu_left = document.getElementById("menu__left");
let menu_top = document.getElementById("menu__top");
let section = document.getElementById("section");
let footer = document.getElementById("footer");

const closeMenu = () => {
  menu_left.classList.remove("open");
  menu_top.classList.remove("close");
  section.classList.remove("close");
  footer.classList.remove("close");

  menu_left.classList.add("close");
  menu_top.classList.add("open");
};

const openMenu = () => {
  menu_left.classList.remove("close");
  menu_top.classList.remove("open");

  menu_left.classList.add("open");
  menu_top.classList.add("close");
  section.classList.add("close");
  footer.classList.add("close");
};

button_close_menu.addEventListener("click", closeMenu);
button_open_menu.addEventListener("click", openMenu);
