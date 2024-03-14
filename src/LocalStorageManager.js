import ProjectClass from "./classes/ProjectClass";
import Todo from "./classes/Todo";
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

export function createTodo(key, title, details, dueDate, priority) {
  const todo = new Todo(title, details, dueDate, priority);
  const proj = JSON.parse(localStorage.getItem(key));
  const todosArray = proj.todos;
  todosArray.push(todo);

  localStorage.setItem(
    key,
    JSON.stringify({ title: proj.title, todos: todosArray })
  );
}

export function initializeHomeStorage() {
  if (localStorage.getItem("Home") == null) {
    createProject("Home");
  } else {
    return;
  }
}
