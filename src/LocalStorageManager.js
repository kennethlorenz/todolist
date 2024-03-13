import ProjectClass from "./classes/ProjectClass";
export function createProject(projectName) {
  const newProject = new ProjectClass(projectName);
  localStorage.setItem(projectName, JSON.stringify(newProject));
}

export function getProjects() {
  const allKeys = Object.keys(localStorage);
  const projects = [];
  allKeys.map((key) => {
    const item = JSON.parse(localStorage.getItem(key));
    projects.push(item);
  });

  return projects;
}

export function projectExists(projectName) {
  const proj = JSON.parse(localStorage.getItem(projectName));

  if (proj == null) {
    return false;
  } else {
    return true;
  }
}

export function deleteProjectFromLocalStorage(projectName) {
  localStorage.removeItem(projectName);
}
