import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import Popup from "../js/ui/Popup.js";
import Form from "../js/ui/Form.js";
import InputField from "../js/ui/InputField.js";

import { initialCards, getCardFields, getProfileFields } from "./data/Data.js";

const cards = document.querySelector(".places-list");
const popupElement = document.querySelector("#popup");
const userName = document.querySelector(".user-info__name");
const userBio = document.querySelector(".user-info__job");
const formPopupTpl = document.querySelector("#form-popup");
const bigSizeImage = document.querySelector("#big-size-image");

/**
 * Displays the from inside of the popup
 * @param {Object} popup
 * @param {Object} form
 */
function displayForm(popup, form) {
  const node = document.importNode(formPopupTpl.content, true);
  node.querySelector(".popup__content").appendChild(form.create());
  popup.open(node);
}

/**
 * Creates a new from with passed parameters
 * @param {Object} object
 * @param {String} action
 * @param {String} title 
 * @param {Function} callback
 *
 * @returns {Object} Form
 */
function createForm(object, action, title, callback) {
  const elements = [];
  object.forEach((field) => elements.push(new InputField(field)));
  return new Form(elements, action, title, callback);
}

(() => {
  const popup = new Popup(popupElement);
  const cardArray = [];

  initialCards.forEach((item) =>
    cardArray.push(new Card(item.name, item.link))
  );

  const cardList = new CardList(cards, cardArray);
  cardList.render();

  const addCardForm = createForm(getCardFields(), "+", "Новое место", (data) => {
    cardList.addCard(new Card(data.name, data.link));
    popup.close();
});

  cards.addEventListener("clickOnImage", (event) => {
    bigSizeImage.content.querySelector(".popup__image").src = event.detail.image;
    popup.open(document.importNode(bigSizeImage.content, true));
  });

  const editProfileForm = () =>
    createForm(getProfileFields(), "Применить", "Редактировать профиль", (data) => {
      userName.textContent = data.name;
      userBio.textContent = data.job;
      popup.close();
    });

  const button = document.querySelector(".user-info__button");
  button.addEventListener("click", () => displayForm(popup, addCardForm));

  const buttonEdit = document.querySelector(".button.user-info__edit");
  buttonEdit.addEventListener("click", () =>
    displayForm(popup, editProfileForm())
  );
})();
