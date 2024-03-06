import CreateProject from "./CreateProject";
const projectForm = document.createElement("form");
projectForm.id = "addProjectForm";
projectForm.method = "post";
const titleTextArea = document.createElement("textarea");
titleTextArea.id = "projectName";
titleTextArea.placeholder = "Project Name: House Renovations";
titleTextArea.name = "projectName";

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
    const title = titleTextArea.value;
    CreateProject(title);
    titleTextArea.value = "";
  });
}
