import project from "./project";

const addButton = document.getElementById("add");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

addButton.addEventListener("click", () => {
  modal.style.display = "unset";
  modalContent.classList.add("modalZoom");
  modalContent.classList.remove("modalZoomOut");
});

modalCloseBtn.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modalContent.classList.remove("modalZoom");
  modalContent.classList.add("modalZoomOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
  resetForm();
}
