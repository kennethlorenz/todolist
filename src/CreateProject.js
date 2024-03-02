export default function CreateProject() {
  const projectForm = document.createElement("form");
  projectForm.id = "addProjectForm";
  const titleTextArea = document.createElement("textarea");
  titleTextArea.id = "projectName";
  titleTextArea.placeholder = "Project Name: House Renovations";
  titleTextArea.name = "projectName";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "addTodo";
  submitBtn.textContent = "Create Project";

  projectForm.appendChild(titleTextArea);
  projectForm.appendChild(submitBtn);
  const div = document.createElement("div");
  div.textContent = "create project page";

  return projectForm;
}
