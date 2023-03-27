//get all the card elements from html
const cards = document.querySelectorAll(".flower-card");
//add a click event listener to each card
cards.forEach(card => {
    card.addEventListener("click", () => {
        //check if the card is already expanded
        if (card.classList.contains("expanded")) {
            //if expanded then shrink
            card.classList.remove("expanded")
        } else {
            //if not expanded then shrink all other cards
            cards.forEach(otherCard => {
                otherCard.classList.remove("expanded");
            });
            //if not expanded then expand it
            card.classList.add("expanded");
        }
    });
});