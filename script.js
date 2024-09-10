const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const cardsContainer = document.querySelector(".rep-cards-container");

leftButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function() {
  // Selecteer alle elementen met de class "card"
  const cards = document.querySelectorAll('.card');

  // Functie die de "show" class toevoegt wanneer het element in beeld komt
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Voeg de fade-in class toe
        observer.unobserve(entry.target); // Stop met observeren zodra zichtbaar
      }
    });
  }, { threshold: 0.2 }); // 20% van het element moet zichtbaar zijn voordat de animatie start

  // Observeer elk card element
  cards.forEach(card => {
    observer.observe(card);
  });
});
