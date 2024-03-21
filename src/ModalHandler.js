export function openModal(modal, content) {
  modal.style.display = "unset";
  content.classList.add("modalZoom");
  content.classList.remove("modalZoomOut");
}

export function closeModal(modal, content) {
  content.classList.remove("modalZoom");
  content.classList.add("modalZoomOut");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
}
