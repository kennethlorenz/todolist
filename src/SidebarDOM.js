import project from "./project";
import {
  getProjects,
  deleteProjectFromLocalStorage,
} from "./LocalStorageManager";
import { renderMainContent, renderAllTodos } from "./MainContent";

const projectsContainer = document.querySelector(".projects");
const homeButton = document.querySelector("#home.project");
const todayButton = document.getElementById("today");
const weekButton = document.getElementById("week");

export default function renderProjectsOnSidebar() {
  const projects = getProjects();

  projects.forEach((projectItem) => {
    if (
      projectItem.title == "Home" ||
      projectItem.title == "Today" ||
      projectItem.title == "Week"
    ) {
      return;
    }
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

export function deleteProject(projectId) {
  const projectToDelete = document.querySelector(`[data-id='${projectId}']`);
  projectsContainer.removeChild(projectToDelete);
  deleteProjectFromLocalStorage(projectId);
  setSelectedProject(homeButton);
}

export function setSelectedProject(projectName) {
  highlightSelectedProject(projectName);
  renderMainContent(projectName);
}

homeButton.addEventListener("click", () => {
  setSelectedProject(homeButton);
});

todayButton.addEventListener("click", () => {
  setSelectedProject(todayButton);
});

weekButton.addEventListener("click", () => {
  setSelectedProject(weekButton);
});
