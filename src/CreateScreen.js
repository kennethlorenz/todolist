import renderTodoForm from "./TodoForm";
import { renderProjectForm, clearCreateProjectForm } from "./ProjectForm";
import { clearTodoForm } from "./TodoForm";
import { openModal, closeModal } from "./ModalHandler";

const addButton = document.getElementById("add");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

const todo = document.getElementById("todo");
const project = document.getElementById("project");
const closeButton = document.querySelector(".close");

const modalMainContent = document.querySelector(".modal-main");

export default function createScreen() {
  modalMainContent.appendChild(renderTodoForm());
}

export function closeCreateModal() {
  updateContent(renderTodoForm(), todo);
  closeModal(modal, modalContent);
  clearCreateProjectForm();
  clearTodoForm();
}

todo.addEventListener("click", () => {
  updateContent(renderTodoForm(), todo);
});

project.addEventListener("click", () => {
  updateContent(renderProjectForm(), project);
});

closeButton.addEventListener("click", () => {
  updateContent(renderTodoForm(), todo);
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
  openModal(modal, modalContent);
  updateContent(renderTodoForm(), todo);
});

modalCloseBtn.addEventListener("click", () => {
  closeCreateModal();
});
