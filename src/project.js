export default function project(projectTitle) {
  const project = document.createElement("li");
  project.classList.add("project");

  const projectLogoContainer = document.createElement("div");
  projectLogoContainer.classList.add("project-logo");

  const projectLogo = document.createElement("i");
  projectLogo.classList.add("fa-solid");
  projectLogo.classList.add("fa-list");

  const projectName = document.createElement("p");
  projectName.classList.add("project-name");
  projectName.textContent = projectTitle;

  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete");

  const deleteLogo = document.createElement("i");
  deleteLogo.classList.add("fa-solid");
  deleteLogo.classList.add("fa-x");

  project.appendChild(projectLogoContainer);
  projectLogoContainer.appendChild(projectLogo);

  project.appendChild(projectName);
  project.appendChild(deleteContainer);
  deleteContainer.appendChild(deleteLogo);

  return project;
}
