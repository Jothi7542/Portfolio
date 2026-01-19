document.addEventListener("mousemove", (e) => {
    const image = document.querySelector(".hero-image");
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;

    image.style.transform = `translate(${x}px, ${y}px)`;
});

if (!("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
}
if (!('IntersectionObserver' in window)) {
  document.querySelectorAll('.hidden')
    .forEach(el => el.classList.add('show'));
}
document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    
    reveals.forEach(el => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));

});
const reveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

reveal.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".achievement-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const textBox = card.querySelector(".achievement-text p");
      const text = textBox.innerText;

      textBox.innerHTML = "";

      text.split(" ").forEach((word, i) => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.animationDelay = `${i * 0.05}s`;
        textBox.appendChild(span);
      });
    });
  });
});


