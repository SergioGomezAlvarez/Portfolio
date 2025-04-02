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
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll(
    ".card, .exp-container, .ad-app-container, .contact-container"
  );
  hiddenElements.forEach((el) => observer.observe(el));
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.classList.contains("html-bar")
            ? "90%"
            : bar.classList.contains("css-bar")
            ? "90%"
            : bar.classList.contains("js-bar")
            ? "90%"
            : bar.classList.contains("php-bar")
            ? "90%"
            : bar.classList.contains("csharp-bar")
            ? "90%"
            : "90%";
          bar.style.width = width;
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
    bar.style.width = "0";
    bar.style.transition = "width 2s ease-in-out";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
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

  setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, 3500);
});