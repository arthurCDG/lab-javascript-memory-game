export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // Return undefined if empty array
    if (this.cards === []) return undefined;
    // Create a new cards deck
    let newDeck = [];
    // Copy the old cards deck to leave it untouched
    let oldDeckCopy = JSON.parse(JSON.stringify(this.cards));
    // Reference the number of cards left in the deck
    let cardsDeckLength = oldDeckCopy.length;
    // Iterate over the number of cards in the deck
    for (let i = 0; i < 24; i++) {
      // Pick a random card in the deck
      let randomIndex = Math.floor(Math.random() * cardsDeckLength);
      // Splice the card with the corresponding from the old deck and add it to the new deck
      let selectedCard = oldDeckCopy.splice(randomIndex, 1);
      // Add the selected card to the new deck
      newDeck.push(...selectedCard);
      // Decrement the counter by 1 so that the next randomIndex chosen will not be undefined
      cardsDeckLength--;
    }
    return newDeck;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) this.pairsGuessed++;
    return card1 === card2 ? true : false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
