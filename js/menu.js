let button_close_menu = document.getElementById("close_menu");
let button_open_menu = document.getElementById("open_menu");

let menu_left = document.getElementById("menu__left");
let menu_top = document.getElementById("menu__top");
let section = document.getElementById("section");
let footer = document.getElementById("footer");

const closeMenu = () => {
  // Close Left Menu
  menu_left.classList.remove("open");
  menu_left.classList.add("close");

  // Open Top Menu
  menu_top.classList.remove("close");
  menu_top.classList.add("open");

  // Open Section
  section.classList.remove("close");
  section.classList.add("open");

  // Open Footer
  footer.classList.remove("close");
  footer.classList.add("open");
};

const openMenu = () => {
  // Open Left Menu
  menu_left.classList.remove("close");
  menu_left.classList.add("open");

  // Close Top Menu
  menu_top.classList.remove("open");
  menu_top.classList.add("close");

  // Close Section
  section.classList.remove("open");
  section.classList.add("close");

  // Close Footer
  footer.classList.remove("open");
  footer.classList.add("close");
};

button_close_menu.addEventListener("click", closeMenu);
button_open_menu.addEventListener("click", openMenu);
