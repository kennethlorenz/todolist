let projectIdCounter = 1;
import { highlightSelectedProject, DeleteProject } from "./SidebarDOM";

export default function project(projectTitle) {
  const project = document.createElement("li");
  project.classList.add("project");
  project.dataset.id = projectIdCounter;

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

  projectIdCounter += 1;

  projectName.addEventListener("click", () => {
    highlightSelectedProject(project);
  });

  deleteLogo.addEventListener("click", () => {
    DeleteProject(project.dataset.id, projectName.textContent);
  });

  return project;
}
