import Project from "./classes/ProjectClass";
export default function CreateProject(title) {
  const newProject = new Project(title);

  console.log(newProject);
  localStorage.setItem(title, JSON.stringify(newProject));
}
