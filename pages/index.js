import FormValidator from "../components/FormValidator.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import { initialTodos, formConfig } from "../utils/constants.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector(".popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addTodoFormValidator = new FormValidator(formConfig, addTodoForm);
addTodoFormValidator.enableValidation();

const todoCounter = new TodoCounter(initialTodos, ".todos__counter");
const handleChecked = (checked) => {
  todoCounter.updateCompleted(checked);
};

const handleDeleted = (completed) => {
  todoCounter.updateTotal({ deleted: true, completed });
};

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleChecked, handleDeleted);
  const todoElement = todo.getView();
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

  // Increment counter
  todoCounter.updateTotal({ deleted: false, completed: false });

  // Resetting the validation is optional
  addTodoFormValidator.disableSubmitButton();
  addTodoForm.reset();
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
