export default class Popup {
  /**
   * Popup constructor
   * @param {HTMLelement} container
   */
  constructor(container) {
    this.container = container;
  }

  /**
   * Open popup
   * @param {HTMLelement} element
   */
  open(element) {
    this.container.appendChild(element);
    const closeBtn = this.container.querySelector(".popup__close");
    closeBtn.addEventListener("click", () => this.close());
    this.container.classList.add("popup_is-opened");
  }

  /**
   * Close popup
   */
  close() {
    this.container.firstElementChild.remove();
    this.container.classList.remove("popup_is-opened");
  }
}
