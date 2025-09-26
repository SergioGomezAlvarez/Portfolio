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
