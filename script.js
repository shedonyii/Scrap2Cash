const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// initialize
showSlide(current);
// change every 4 seconds
setInterval(nextSlide, 4000);
