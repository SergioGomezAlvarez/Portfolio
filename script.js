const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const cardsContainer = document.querySelector(".rep-cards-container");

leftButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  cardsContainer.scrollBy({ left: 300, behavior: "smooth" });
});
