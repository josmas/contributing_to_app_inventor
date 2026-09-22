(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var prevBtn = document.getElementById("prev-btn");
  var nextBtn = document.getElementById("next-btn");
  var counter = document.getElementById("slide-counter");
  var progressFill = document.getElementById("progress-fill");
  var current = 0;

  function indexFromHash() {
    var n = parseInt(window.location.hash.replace("#", ""), 10);
    if (!n || n < 1 || n > total) return 0;
    return n - 1;
  }

  function show(index, updateHash) {
    index = Math.max(0, Math.min(total - 1, index));
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");

    counter.textContent = (current + 1) + " / " + total;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    progressFill.style.width = (total > 1 ? (current / (total - 1)) * 100 : 0) + "%";

    if (updateHash !== false) {
      history.replaceState(null, "", "#" + (current + 1));
    }
  }

  function next() {
    if (current < total - 1) show(current + 1);
  }

  function prev() {
    if (current > 0) show(current - 1);
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      show(0);
    } else if (e.key === "End") {
      e.preventDefault();
      show(total - 1);
    }
  });

  window.addEventListener("hashchange", function () {
    show(indexFromHash(), false);
  });

  show(indexFromHash(), false);
})();
