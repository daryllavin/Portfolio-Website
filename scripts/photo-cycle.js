(function () {
  var photo = document.querySelector(".photo");
  if (!photo) return;
  var images = photo.querySelectorAll(".headshot");
  var current = 0;

  function next() {
    images[current].classList.remove("is-active");
    current = (current + 1) % images.length;
    images[current].classList.add("is-active");
  }

  photo.addEventListener("click", next);
  photo.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      next();
    }
  });
})();
