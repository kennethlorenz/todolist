import { openModal, closeModal } from "./ModalHandler";

export default function displayDetailsScreen(key, todo) {
  const detailsCloseButton = document.querySelector("#detailsModal .close");
  const detailsModal = document.getElementById("detailsModal");
  const detailsContent = document.getElementById("detailsContent");
  const title = document.getElementById("todoTitle");
  const projectName = document.getElementById("projectName");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("dueDate");
  const details = document.querySelector(".detail-content #details");

  title.textContent = todo.title;
  projectName.textContent = key;
  priority.textContent = todo.priority;
  dueDate.textContent = todo.dueDate;
  details.textContent = todo.details;
  openModal(detailsModal, detailsContent);

  detailsCloseButton.addEventListener("click", () => {
    closeModal(detailsModal, detailsContent);
  });
}
