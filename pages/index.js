import FormValidator from "../components/FormValidator.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { initialTodos, formConfig } from "../utils/constants.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.querySelector("#add-todo-form");
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

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleChecked, handleDeleted);
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const handleFormSubmit = (data) => {
  const todo = generateTodo(data);
  todosList.append(todo);
  addTodoPopup.close();

  // Increment counter
  todoCounter.updateTotal({ deleted: false, completed: false });

  // Resetting the validation is optional
  addTodoFormValidator.disableSubmitButton();
  addTodoForm.reset();
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit,
});
addTodoPopup.setEventListeners();

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
