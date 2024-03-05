import TodoForm from "./TodoForm";
import { CreateNewProjectForm } from "./ProjectForm";

export default function CreateModalDOM() {
  const todo = document.getElementById("todo");
  const project = document.getElementById("project");
  const closeButton = document.querySelector(".close");

  const modalMainContent = document.querySelector(".modal-main");

  modalMainContent.appendChild(TodoForm());

  todo.addEventListener("click", () => {
    console.log("todo clicked");
    updateContent(TodoForm(), todo);
  });

  project.addEventListener("click", () => {
    updateContent(CreateNewProjectForm(), project);
  });

  closeButton.addEventListener("click", () => {
    updateContent(TodoForm(), todo);
  });

  function updateContent(page, item) {
    modalMainContent.replaceChildren(page);
    setActiveModal(item);
  }

  function setActiveModal(selectedItem) {
    const modalItems = document.querySelectorAll(".modal-item");

    modalItems.forEach((item) => {
      if (item.id !== selectedItem.id) {
        item.classList.remove("selected");
      }
    });

    selectedItem.classList.add("selected");
  }
}
