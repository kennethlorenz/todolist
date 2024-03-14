import { createProject, projectExists } from "./LocalStorageManager";
import { closeModal } from "./CreateModalDOM";
import { addProjectToSideBar } from "./SidebarDOM";
const projectForm = document.createElement("form");
projectForm.id = "addProjectForm";
projectForm.method = "post";
const errorMessage = document.createElement("div");
projectForm.appendChild(errorMessage);
errorMessage.style.display = "none";
errorMessage.style.fontSize = "1.5rem";
errorMessage.style.color = "red";
const titleTextArea = document.createElement("textarea");
titleTextArea.id = "projectName";
titleTextArea.placeholder = "Project Name: House Renovations";
titleTextArea.name = "projectName";
titleTextArea.required = true;
titleTextArea.maxLength = 15;

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "addProject";
submitBtn.textContent = "Create Project";

projectForm.appendChild(titleTextArea);
projectForm.appendChild(submitBtn);
const div = document.createElement("div");
div.textContent = "create project page";

export function renderProjectForm() {
  return projectForm;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const projectName = titleTextArea.value;
  if (isFormValid() == false) {
    return;
  }
  createNewProject(formatProjectName(projectName));
});

function createNewProject(projectName) {
  //check for duplicates
  if (projectExists(projectName) == true) {
    displayDuplicateMessage();
  } else {
    createProject(projectName);
    addProjectToSideBar(projectName);
    closeModal();
  }
}

//capitalize first letter
function formatProjectName(projectName) {
  return projectName.charAt(0).toUpperCase() + projectName.slice(1);
}

function isFormValid() {
  if (projectForm.checkValidity()) {
    return true;
  } else {
    displayErrorMessage();
    return false;
  }
}

function displayDuplicateMessage() {
  errorMessage.textContent = "Project Name already exists";
  errorMessage.style.display = "unset";
}

function displayErrorMessage() {
  errorMessage.textContent = "Project Name is required.";
  errorMessage.style.display = "unset";
}

export function clearCreateProjectForm() {
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
  titleTextArea.value = "";
}
