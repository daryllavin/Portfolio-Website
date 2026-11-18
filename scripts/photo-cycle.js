(function () {
  var card = document.querySelector(".hero-side");
  if (!card) return;
  var images = card.querySelectorAll(".headshot");
  var current = 0;

  function next() {
    images[current].classList.remove("is-active");
    current = (current + 1) % images.length;
    images[current].classList.add("is-active");
  }

  card.addEventListener("click", next);
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      next();
    }
  });
})();
