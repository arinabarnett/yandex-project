export default class Card {
  /**
   * Card constructor
   * @param {String} name
   * @param {String} url
   */
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.card;
  }

  /**
   * Likes a selected card
   */
  like() {
    this.card
      .querySelector(".place-card__like-icon")
      .classList.toggle("place-card__like-icon_liked");
  }

  /**
   * Removes the card from the page
   */
  remove() {
    this.card.remove();
  }

  /**
   * Creates a DOM-element for a card
   * @returns {HTMLelement}
   */
  create() {
    const oneCard = document.createElement("div");
    oneCard.classList.add("place-card");

    const imgCard = document.createElement("div");
    imgCard.classList.add("place-card__image");
    imgCard.style.backgroundImage = `url(${this.url})`;

    imgCard.onclick = () =>
      oneCard.dispatchEvent(
        new CustomEvent("clickOnImage", {
          detail: { image: this.url },
          bubbles: true,
        })
      );

    const btnImgCard = document.createElement("button");
    btnImgCard.classList.add("place-card__delete-icon");
    btnImgCard.onclick = () => this.remove();
    const descCard = document.createElement("div");
    descCard.classList.add("place-card__description");

    const h3Card = document.createElement("h3");
    h3Card.classList.add("place-card__name");
    h3Card.textContent = this.name;

    const btnLike = document.createElement("button");
    btnLike.classList.add("place-card__like-icon");
    btnLike.onclick = () => this.like();

    oneCard.appendChild(imgCard);
    imgCard.appendChild(btnImgCard);
    oneCard.appendChild(descCard);
    descCard.appendChild(h3Card);
    descCard.appendChild(btnLike);

    this.card = oneCard;
    return this.card;
  }
}
