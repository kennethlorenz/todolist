const detailsCloseButton = document.querySelector("#detailsModal .close");
export default function displayDetailsScreen(key, todo) {
  const title = document.getElementById("todoTitle");
  const projectName = document.getElementById("projectName");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("dueDate");
  const details = document.getElementById("details");

  const detailsModal = document.getElementById("detailsModal");

  title.textContent = todo.title;
  projectName.textContent = key;
  priority.textContent = todo.priority;
  dueDate.textContent = todo.dueDate;
  details.textContent = todo.details;

  detailsModal.style.display = "unset";
}

detailsCloseButton.addEventListener("click", () => {
  detailsModal.style.display = "none";
});
