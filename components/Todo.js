class Todo {
  constructor(data, selector, handleChecked, handleDeleted) {
    this._checked = data.completed;
    this._name = data.name;
    this._selector = selector;
    this._handleChecked = handleChecked;
    this._handleDeleted = handleDeleted;
  }

  _setEventListeners() {
    this._deleteBtnEl.addEventListener("click", () => {
      this._element.remove();
      this._handleDeleted(this._checked);
    });

    this._checkboxEl.addEventListener("change", () => {
      this._checked = !this._checked;
      this._handleChecked(this._checked);
    });

    // Two listeners needed for edit button
    this._editBtnEl.addEventListener("click", () => {
      this._nameInputEl.classList.add("todo__name-input_visible");
      this._nameInputEl.value = this._name;
    });

    this._nameInputEl.addEventListener("change", (evt) => {
      this._nameEl.textContent = evt.target.value;
      this._nameInputEl.classList.remove("todo__name-input_visible");
    });
  }

  getView() {
    this._template = document.querySelector(this._selector);
    this._element = document
      .querySelector(this._selector)
      .content.firstElementChild.cloneNode(true);
    this._nameEl = this._element.querySelector(".todo__name");
    this._deleteBtnEl = this._element.querySelector(".todo__delete-btn");

    // Edit button related
    this._editBtnEl = this._element.querySelector(".todo__edit-btn");
    this._nameInputEl = this._element.querySelector(".todo__name-input");
    this._nameEl.textContent = this._name;

    this._checkboxEl = this._element.querySelector(".todo__completed");
    this._checkboxEl.checked = this._checked;

    this._setEventListeners();
    return this._element;
  }
}

export default Todo;
