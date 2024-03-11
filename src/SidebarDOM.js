import project from "./project";
import {
  GetProjects,
  DeleteProjectFromLocalStorage,
} from "./LocalStorageManager";

const projectsContainer = document.querySelector(".projects");
const homeButton = document.querySelector("#home.project");

export default function RenderProjects() {
  const projects = GetProjects();

  projects.forEach((projectItem) => {
    project(projectItem.title);
    projectsContainer.appendChild(project(projectItem.title));
  });
}

export function AddProjectToSideBar(projectName) {
  const newProj = project(projectName);
  projectsContainer.appendChild(newProj);
  highlightSelectedProject(newProj);
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

export function DeleteProject(projectId, projectName) {
  highlightSelectedProject(homeButton);
  const projectToDelete = document.querySelector(`[data-id='${projectId}']`);
  projectsContainer.removeChild(projectToDelete);
  DeleteProjectFromLocalStorage(projectName);
}

homeButton.addEventListener("click", () => {
  highlightSelectedProject(homeButton);
});
