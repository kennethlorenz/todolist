import ProjectClass from "./classes/ProjectClass";
export function createProject(projectName) {
  const newProject = new ProjectClass(projectName);
  localStorage.setItem(projectName, JSON.stringify(newProject));
}

export function getProjects() {
  const allKeys = Object.keys(localStorage);
  const projects = [];
  allKeys.sort().map((key) => {
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

export function createTodo(key, todo) {
  const proj = JSON.parse(localStorage.getItem(key));
  const todosArray = proj.todos;
  todosArray.push(todo);

  localStorage.setItem(
    key,
    JSON.stringify({ title: proj.title, todos: todosArray })
  );
}

export function getIndex(key) {
  const proj = JSON.parse(localStorage.getItem(key));
  const todosArray = proj.todos;

  return todosArray.length;
}

export function getTodosFromSelectedProject(key) {
  let selectedProject;

  if (projectExists(key)) {
    selectedProject = JSON.parse(localStorage.getItem(key));
  } else {
    createProject(key);
    selectedProject = JSON.parse(localStorage.getItem(key));
  }
  const todos = selectedProject.todos;
  return todos;
}

export function deleteTodoFromLocalStorage(key, index) {
  const proj = JSON.parse(localStorage.getItem(key));
  const todosArray = proj.todos;
  todosArray.splice(index, 1);
  localStorage.setItem(
    key,
    JSON.stringify({ title: proj.title, todos: todosArray })
  );
}

export function updateTodoCheckFromLocalStorage(key, index, checkedValue) {
  const proj = JSON.parse(localStorage.getItem(key));
  const todoToUpdate = proj.todos[index];
  todoToUpdate.checked = checkedValue;
  console.log(todoToUpdate.checked);
  localStorage.setItem(
    key,
    JSON.stringify({ title: proj.title, todos: proj.todos })
  );
}
