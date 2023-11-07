const initialTodos = [
  { id: 1, name: "Clone starting repo", completed: true },
  { id: 2, name: "Read instructions thoroughly", completed: false },
  { id: 3, name: "Complete project", completed: false },
];

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector(".popup");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

initialTodos.forEach((item) => {});
