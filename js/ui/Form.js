export default class Form {
  /**
   * Form consturctor
   * @param {Array} input
   * @param {String} action
   * @param {Function} onSubmit
   */
  constructor(input, action, title, onSubmit) {
    this.input = input;
    this.action = action;
    this.form;
    this.callback = onSubmit;
    this.disabled = false;
    this.title = title;
    this.inputElements = [];
  }

  /**
   * Creates a DOM-element of a form
   * @returns {HTMLelement}
   */
  create() {
    const formElement = document.createElement("form");
    
    const formTitle = document.createElement("h3");
    formTitle.classList.add("popup__title");
    formTitle.textContent = this.title;
    formElement.appendChild(formTitle);

    formElement.classList.add("popup__form");
    formElement.setAttribute("name", "new");

    this.input.forEach((input) => {
      const element = input.create();
      element.oninput = () => this.isValid();
      this.inputElements.push(element);
      formElement.appendChild(element);
    });

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("button", "popup__button");
    submitBtn.textContent = this.action;

    formElement.appendChild(submitBtn);
    formElement.onsubmit = (event) => this.submit(event);

    this.form = formElement;
    return this.form;
  }

  isValid() {
    if (this.input.some((input) => !input.checkValidity())) {
      this.form
        .querySelector(".popup__button")
        .classList.remove("popup__button_enable");
      return false;
    } else {
      this.form
        .querySelector(".popup__button")
        .classList.add("popup__button_enable");
      return true;
    }
  }

  submit(event) {
    event.preventDefault();
    if (!this.isValid()) return;
    const data = {};
    this.inputElements.forEach(
      (el) => (data[el.firstElementChild.name] = el.firstElementChild.value)
    );
    this.callback(data);
    this.reset();
  }

  reset() {
    this.form.reset();
  }
}
