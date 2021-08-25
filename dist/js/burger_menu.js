const burger_bars = document.querySelector(".burger-bars");
const burger_wrapper = document.querySelector(".burger-wrapper");
const inner_div = document.querySelector(".inner-div");
const top_line = document.querySelector(".top");
const bottom_line = document.querySelector(".bottom");

const logo_container = document.querySelector(".logo-container");

const menu = document.querySelector(".main-menu");
const menu_wrapper = document.querySelector(".menu-container");
const menu_list = document.querySelector(".menu-list");
const main = document.querySelector(".main");
// const pages = document.querySelectorAll(".section");
const menu_items = document.querySelectorAll(".menu-item");
const loading_page = document.querySelector(".loading-page");
const url = window.location.pathname;

let is_open = false;

function open_menu() {
  // menu.style.display = "flex";
  menu_wrapper.style.transform = "translateY(0)";
  inner_div.style.transform = "rotate(495deg)";
  top_line.style.transform = "rotate(90deg)";
  bottom_line.style.transform = "rotate(90deg)";
  top_line.style.top = 0;
  bottom_line.style.top = 0;
  // body.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function close_menu() {
  reset_opacity(menu);
  inner_div.style.transform = "rotate(-360deg)";
  top_line.style.transform = "rotate(0)";
  bottom_line.style.transform = "rotate(0)";
  top_line.style.top = "15px";
  bottom_line.style.top = "-15px";
  // menu.style.display = "none";
  menu_wrapper.style.transform = "translateY(100vh)";
  // body.style.overflow = "unset";
  document.body.style.overflow = "unset";
}

function add_anim(item) {
  item.style.animation = "menu-items 1s ease-in-out";
  item.style.transform = "translateY(0)";
}

function remove_anim(item) {
  item.style.animation = "none";
  item.style.transform = "translateY(500px)";
}

function time_animation(menu_items) {
  menu_items.forEach((item, idx) => {
    setTimeout(() => {
      add_anim(item);
      add_opacity(item);
    }, idx * 100);
  });
}

function reset_menu_items(menu_items, pixels) {
  menu_items.forEach((item) => {
    item.style.animation = "";
    item.style.transform = `translateY(${pixels}px)`;
    reset_opacity(item);
  });
}

function hide_bars() {
  burger_bars.style.display = "block";
}

function add_opacity(item) {
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      item.style.opacity = i * 0.1;
    }, 25);
  }
}

function reset_opacity(menu) {
  for (let i = 10; i <= 0; i--) {
    setTimeout(() => {
      menu.style.opacity = i * 0.1;
    }, 25);
  }
}

// EVENTS

// Mobile menu event
burger_bars.addEventListener("click", () => {
  if (is_open === false) {
    open_menu();
    add_opacity(menu);
    time_animation(menu_items);
    is_open = true;
  } else if (is_open === true) {
    reset_menu_items(menu_items, 100);
    close_menu();
    is_open = false;
  }
});

// Window size event to reset the menu position
window.addEventListener("resize", () => {
  let vp_width = document.documentElement.clientWidth;

  if (vp_width >= 1440) {
    menu_wrapper.style.transform = "translateY(0)";
    reset_menu_items(menu_items, 0);
  } else {
    if (is_open === false) {
      menu_wrapper.style.transform = "translateY(100vh)";
      reset_menu_items(menu_items, 100);
    }
  }
});

// Set a cookie so the loading page animation
// only plays the first time
let first_time = localStorage.getItem("first_time");
let first_time_cookie = document.cookie;

if (!first_time_cookie && main != null) {
  document.body.style.overflowY = "hidden";
  burger_wrapper.style.animationDelay = "4.5s";
  logo_container.style.animationDelay = "4.5s";
  main.style.animationDelay = "4.5s";
  menu_list.style.animationDelay = "4.5s";
  document.cookie = "first_time";
  localStorage.setItem("first_time", "1");
  setTimeout(() => {
    document.body.style.overflowY = "unset";
  }, 5000);
} else {
  if (loading_page) {
    loading_page.style.display = "none";
  }
}
