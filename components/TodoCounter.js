class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((t) => t.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  updateCompleted = (checked) => {
    this._completed += checked ? 1 : -1;
    this._updateText();
  };

  updateTotal = ({ deleted, completed }) => {
    this._total += deleted ? -1 : 1;
    this._completed += completed ? -1 : 0;
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
