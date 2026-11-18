(function () {
  var KEY = "navIndicator";
  var nav = document.querySelector(".nav");
  var bar = nav && nav.querySelector(".nav-indicator");
  if (!nav || !bar) return;

  function position() {
    var n = nav.getBoundingClientRect();
    var b = bar.getBoundingClientRect();
    return { x: b.left - n.left, w: b.width };
  }

  // Remember where the underline was when leaving this page.
  window.addEventListener("pagehide", function () {
    try { sessionStorage.setItem(KEY, JSON.stringify(position())); } catch (e) {}
  });

  var saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(KEY)); } catch (e) {}
  if (!saved || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var now = position();
  if (!now.w || Math.abs(saved.x - now.x) < 1) return;

  bar.style.transition = "none";
  bar.style.transform = "translateX(" + (saved.x - now.x) + "px) scaleX(" + saved.w / now.w + ")";
  bar.getBoundingClientRect();
  bar.style.transition = "";
  bar.style.transform = "";
})();
