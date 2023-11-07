const initialTodos = [
  { id: 1, name: "Clone starting repo", completed: true },
  { id: 2, name: "Read instructions thoroughly", completed: false },
  { id: 3, name: "Complete project", completed: false },
];

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector(".popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  const todoNameEl = todoElement.querySelector(".todo__name");
  todoNameEl.textContent = data.name;
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const todo = generateTodo({ name: evt.target["todo-name"].value });
  todosList.append(todo);
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
