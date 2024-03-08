import ProjectClass from "./classes/ProjectClass";
const allKeys = Object.keys(localStorage);
export default function CreateProject(projectName) {
  const newProject = new ProjectClass(projectName);
  localStorage.setItem(projectName, JSON.stringify(newProject));
}

export function GetProjects() {
  const projects = [];
  allKeys.map((key) => {
    const item = JSON.parse(localStorage.getItem(key));
    projects.push(item);
  });

  return projects;
}

export function ProjectExists(projectName) {
  const proj = JSON.parse(localStorage.getItem(projectName));

  if (proj == null) {
    return false;
  } else {
    return true;
  }
}
