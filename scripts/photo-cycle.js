(function () {
  var card = document.querySelector(".hero-side");
  if (!card) return;
  var images = card.querySelectorAll(".headshot");
  var current = 0;
  var pressedAt = 0;
  var releaseTimer;

  function next() {
    images[current].classList.remove("is-active");
    current = (current + 1) % images.length;
    images[current].classList.add("is-active");
  }

  // Show the pressed-in look for at least 150ms, even on a quick tap
  function press() {
    clearTimeout(releaseTimer);
    pressedAt = Date.now();
    card.classList.add("is-pressed");
  }

  function release() {
    var wait = Math.max(0, 150 - (Date.now() - pressedAt));
    releaseTimer = setTimeout(function () {
      card.classList.remove("is-pressed");
    }, wait);
  }

  card.addEventListener("pointerdown", press);
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);
  card.addEventListener("pointerleave", release);

  card.addEventListener("click", next);
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      press();
      release();
      next();
    }
  });
})();
