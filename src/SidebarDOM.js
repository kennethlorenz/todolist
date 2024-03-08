import project from "./project";
import { GetProjects } from "./CreateProject";

const projectsContainer = document.querySelector(".projects");
const sideBarItems = document.querySelectorAll(".project");

export default function SideBarDom() {
  HandleSideBarSelection();
  RenderProjects();
}

function HandleSideBarSelection() {
  sideBarItems.forEach((item) => {
    item.addEventListener("click", () => {
      deselectProject();
      item.classList.add("selected");
    });
  });

  function deselectProject() {
    sideBarItems.forEach((item) => {
      item.classList.remove("selected");
    });
  }
}

export function RenderProjects() {
  const projects = GetProjects();

  projects.forEach((projectItem) => {
    project(projectItem.title);
    projectsContainer.appendChild(project(projectItem.title));
  });
}

export function AddProjectToSideBar(projectName) {
  projectsContainer.appendChild(project(projectName));
}
