import { validURL, validateLengthStr } from "../utils/Validation.js";

export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Нургуш",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg",
  },
  {
    name: "Тулиновка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg",
  },
  {
    name: "Остров Желтухина",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg",
  },
  {
    name: "Владивосток",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg",
  },
];

export const getProfileFields = function () {
  const userName = document.querySelector(".user-info__name");
  const userBio = document.querySelector(".user-info__job");
  const profileFields = [
    {
      name: "name",
      placeholder: "Имя",
      validator: (str) => validateLengthStr(str, 2, 30),
      value: userName.textContent,
    },
    {
      name: "job",
      placeholder: "О себе",
      validator: (str) => validateLengthStr(str, 2, 30),
      value: userBio.textContent,
    },
  ];
  return profileFields;
};

export const getCardFields = function () {
  const cardFields = [
    {
      name: "name",
      classList: ["popup__input", "popup__input_type_name"],
      placeholder: "Название",
      validator: (str) => validateLengthStr(str, 2, 30),
    },
    {
      name: "link",
      classList: ["popup__input", "popup__input_type_link-url"],
      placeholder: "Ссылка на картинку",
      validator: validURL,
    },
  ];
  return cardFields;
};
