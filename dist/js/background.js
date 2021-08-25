const bg_img = document.querySelector(".bg-img");
let path_name = window.location.pathname;

function show_overflow() {
  document.body.style.overflow = "scroll";
  document.body.style.overflowX = "hidden";
}

if (path_name === "/dist/index.html") {
  setTimeout(show_overflow, 5000);
} else {
  show_overflow();
}

if (bg_img !== null) {
  window.addEventListener("mousemove", shift_img);

  function shift_img(e) {
    let x_axis = e.clientX;
    let y_axis = e.clientY;

    bg_img.style.transform = `translate(-${x_axis * 0.25}px, -${
      y_axis * 0.25
    }px)`;
  }

  setTimeout(show_overflow, 5000);
}
