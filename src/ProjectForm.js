import CreateProject, {
  GetProjects,
  DoesProjectNameExist,
} from "./CreateProject";
import project from "./project";
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

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "addProject";
submitBtn.textContent = "Create Project";

projectForm.appendChild(titleTextArea);
projectForm.appendChild(submitBtn);
const div = document.createElement("div");
div.textContent = "create project page";

export function RenderProjectForm() {
  return projectForm;
}

export function AddNewProject() {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isFormValid();
  });
}

function isFormValid() {
  if (projectForm.checkValidity()) {
    RemoveErrorMessage();
    return true;
  } else {
    DisplayErrorMessage();
    return false;
  }
}

function DisplayErrorMessage() {
  errorMessage.textContent = "Project Name is required.";
  errorMessage.style.display = "unset";
}

function RemoveErrorMessage() {
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}
