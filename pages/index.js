import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import Section from "../components/Section.js";
import { initialTodos } from "../utils/constants.js";

// Project 8
const todoCounter = new TodoCounter(initialTodos, ".todos__counter");
const handleChecked = (checked) => {
  todoCounter.updateCompleted(checked);
};

const handleDelete = (completed) => {
  todoCounter.updateTotal({ deleted: true, completed });
};

// const todosList = document.querySelector(".todos__list");
const todosList = new Section(initialTodos, ".todos__list", (item) => {
  const todo = new Todo(item, "#todo-template", handleChecked, handleDelete);
  const todoElement = todo.getView();
  todosList.addItem(todoElement);
});
todosList.renderItems();

// Implementation prior to adding Section class in Project 8
// initialTodos.forEach((item) => {
//   const todo = new Todo(item, "#todo-template", handleChecked, handleDelete);
//   const todoElement = todo.getView();
//   todosList.append(todoElement);
// });
