export default class CardList {
  /**
   * CardList constructor
   * @param {HTMLelement} container
   * @param {Array} cardList
   */
  constructor(container, cardList) {
    this.container = container;
    this.cardList = cardList;
  }

  /**
   * Adds a card to the list of cards
   * @param {Array} card
   */
  addCard(card) {
    this.cardList.push(card);
    this.container.appendChild(card.create());
  }

  /**
   * Renders all of the cards when the page loads
   */
  render() {
    this.cardList.forEach((item) => {
      this.container.appendChild(item.create());
    });
  }
}
