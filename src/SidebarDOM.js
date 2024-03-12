import project from "./project";
import {
  GetProjects,
  DeleteProjectFromLocalStorage,
} from "./LocalStorageManager";
import { RenderMainContent } from "./MainContent";

const projectsContainer = document.querySelector(".projects");
const homeButton = document.querySelector("#home.project");

export default function RenderProjects() {
  const projects = GetProjects();

  projects.forEach((projectItem) => {
    project(projectItem.title);
    projectsContainer.appendChild(project(projectItem.title));
  });
  SetSelectedProject(homeButton);
}

export function AddProjectToSideBar(projectName) {
  const newProj = project(projectName);
  projectsContainer.appendChild(newProj);
  SetSelectedProject(newProj);
}

export function HighlightSelectedProject(project) {
  let sideBarItems = document.querySelectorAll(".project");
  sideBarItems.forEach((item) => {
    if (item.dataset.id != project.dataset.id) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
    }
  });
}

export function DeleteProject(projectId, projectName) {
  SetSelectedProject(homeButton);
  const projectToDelete = document.querySelector(`[data-id='${projectId}']`);
  projectsContainer.removeChild(projectToDelete);
  DeleteProjectFromLocalStorage(projectName);
}

export function SetSelectedProject(projectName) {
  HighlightSelectedProject(projectName);
  RenderMainContent(projectName);
}

homeButton.addEventListener("click", () => {
  SetSelectedProject(homeButton);
});
