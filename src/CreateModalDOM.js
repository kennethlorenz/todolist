import CreateTodo from "./CreateTodo";
import CreateProject from "./CreateProject";

export default function CreateModalDOM() {
  const todo = document.getElementById("todo");
  const project = document.getElementById("project");
  const closeButton = document.querySelector(".close");

  const modalMainContent = document.querySelector(".modal-main");

  modalMainContent.appendChild(CreateTodo());

  todo.addEventListener("click", () => {
    console.log("todo clicked");
    updateContent(CreateTodo(), todo);
  });

  project.addEventListener("click", () => {
    updateContent(CreateProject(), project);
    console.log("project clicked");
  });

  closeButton.addEventListener("click", () => {
    updateContent(CreateTodo(), todo);
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
