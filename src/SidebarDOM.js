import project from "./project";
import {
  getProjects,
  deleteProjectFromLocalStorage,
} from "./LocalStorageManager";
import { renderMainContent } from "./MainContent";

const projectsContainer = document.querySelector(".projects");
const homeButton = document.querySelector("#home.project");

export default function RenderProjects() {
  const projects = getProjects();

  projects.forEach((projectItem) => {
    project(projectItem.title);
    projectsContainer.appendChild(project(projectItem.title));
  });
  setSelectedProject(homeButton);
}

export function addProjectToSideBar(projectName) {
  const newProj = project(projectName);
  projectsContainer.appendChild(newProj);
  setSelectedProject(newProj);
}

export function highlightSelectedProject(project) {
  let sideBarItems = document.querySelectorAll(".project");
  sideBarItems.forEach((item) => {
    if (item.dataset.id != project.dataset.id) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
    }
  });
}

export function deleteProject(projectId, projectName) {
  setSelectedProject(homeButton);
  const projectToDelete = document.querySelector(`[data-id='${projectId}']`);
  projectsContainer.removeChild(projectToDelete);
  deleteProjectFromLocalStorage(projectName);
}

export function setSelectedProject(projectName) {
  highlightSelectedProject(projectName);
  renderMainContent(projectName);
}

homeButton.addEventListener("click", () => {
  setSelectedProject(homeButton);
});
