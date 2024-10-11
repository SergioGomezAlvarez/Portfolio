const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const cardsContainer = document.querySelector(".rep-cards-container");

leftButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector(".carousel-button.left-button");
  const rightButton = document.querySelector(".carousel-button.right-button");
  const container = document.querySelector(".rep-cards-container");

  leftButton.addEventListener("click", () => {
    container.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", () => {
    container.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

  // Optioneel: automatische scroll elke 5 seconden
  setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, 3500);
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.card, .exp-container, .ad-app-container, .contact-container');
  hiddenElements.forEach(el => observer.observe(el));
});
