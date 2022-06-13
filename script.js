const knap = document.querySelector(".knap");
const gallery = document.querySelector(".billede_gallery");

knap.addEventListener("click", () => {
  if (gallery.style.display === "none") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "none";
  }
});
