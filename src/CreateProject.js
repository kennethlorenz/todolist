import ProjectClass from "./classes/ProjectClass";
import project from "./project";
const allKeys = Object.keys(localStorage);
export default function CreateProject(projectName) {
  const newProject = new ProjectClass(projectName);

  localStorage.setItem(projectName, JSON.stringify(newProject));
}

export function GetProjects() {
  return allKeys.map((key) => {
    console.log(JSON.parse(localStorage.getItem(key)));
  });
}

export function ProjectExists(projectName) {
  const proj = JSON.parse(localStorage.getItem(projectName));

  if (proj == null) {
    return false;
  } else {
    return true;
  }
}
