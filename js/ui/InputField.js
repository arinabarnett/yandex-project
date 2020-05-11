export default class InputField {
  /**
   * Input field constructor
   * @param {Object} Options values will be assigned as an input attributes
   */
  constructor(options) {
    const {
      name,
      type = "text",
      placeholder,
      className = "popup__input",
      validator = () => "",
      value = "",
    } = options;
    this.inputName = name;
    this.type = type;
    this.className = className;
    this.placeholder = placeholder;
    this.inputElement;
    this.value = value;
    this.validator = validator;
  }

  /**
   * Creates a DOM-element for an input field
   * @returns {HTMLElement}
   */
  create() {
    const element = document.createElement("input");
    element.name = this.inputName;
    element.type = this.type;
    element.value = this.value;
    element.placeholder = this.placeholder;
    element.classList.add(this.className);

    const error = document.createElement("div");
    error.classList.add("popup__input-error");
    error.setAttribute("aria-live", "polite");
    error.id = `error-${this.inputName}`;

    const container = document.createElement("div");
    container.appendChild(element);
    container.appendChild(error);

    this.inputElement = container;
    return this.inputElement;
  }

  /**
   * Checkes if entered data is valid or not
   * @returns {Boolean}
   */
  checkValidity() {
    const result = this.validator(
      this.inputElement.querySelector("input").value
    );
    if (result.length) {
      this.inputElement.querySelector(
        ".popup__input-error"
      ).textContent = result;
      return false;
    }
    this.inputElement.querySelector(".popup__input-error").textContent = "";
    return true;
  }
}
