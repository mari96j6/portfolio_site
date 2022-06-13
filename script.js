const btn = document.querySelector("button");
const show = document.querySelector(".process");
const hide = document.querySelector(".process");

function klikket() {
  show.classList.toggle("show");
  hide.classList.toggle("hide");
}

btn.addEventListener("mousedown", klikket);
