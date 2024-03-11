import RenderTodoForm from "./TodoForm";
import { RenderProjectForm, ClearCreateProjectForm } from "./ProjectForm";

const addButton = document.getElementById("add");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

const todo = document.getElementById("todo");
const project = document.getElementById("project");
const closeButton = document.querySelector(".close");

const modalMainContent = document.querySelector(".modal-main");

export default function CreateModalDOM() {
  modalMainContent.appendChild(RenderTodoForm());
}

export function closeModal() {
  updateContent(RenderTodoForm(), todo);
  modalContent.classList.remove("modalZoom");
  modalContent.classList.add("modalZoomOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
}

todo.addEventListener("click", () => {
  updateContent(RenderTodoForm(), todo);
});

project.addEventListener("click", () => {
  updateContent(RenderProjectForm(), project);
});

closeButton.addEventListener("click", () => {
  updateContent(RenderTodoForm(), todo);
  setActiveModal(todo);
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

addButton.addEventListener("click", () => {
  modal.style.display = "unset";
  modalContent.classList.add("modalZoom");
  modalContent.classList.remove("modalZoomOut");
});

modalCloseBtn.addEventListener("click", () => {
  ClearCreateProjectForm();
  closeModal();
});
