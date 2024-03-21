import {
  getProjects,
  getTodosFromSelectedProject,
} from "./LocalStorageManager";
import todoItem from "./TodoItem";
import Todo from "./classes/Todo";
export default function mainContent(projectName) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  const mainHeadingDiv = document.createElement("div");
  mainHeadingDiv.classList.add("main-heading");

  const projectTitle = document.createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = projectName;

  const todosContainer = document.createElement("div");
  todosContainer.id = "todosContainer";

  mainHeadingDiv.appendChild(projectTitle);

  mainDiv.appendChild(mainHeadingDiv);
  mainDiv.appendChild(todosContainer);
  return mainDiv;
}

export function renderMainContent(project) {
  let body = document.querySelector("body");
  body.replaceChild(mainContent(project.dataset.id), body.children[4]);
  //mainDiv.replaceChildren(MainContent(project.dataset.id));
  renderAllTodos();
}

export function renderAllTodos() {
  const key = document.querySelector(".project.selected").dataset.id;

  if (getTodosFromSelectedProject(key) == null) {
    return;
  } else {
    //if the selected item is not Home, Render all the todos on that project.
    if (key != "Home") {
      let projectTodos;
      projectTodos = getTodosFromSelectedProject(key);
      projectTodos.forEach((item) => {
        const todo = new Todo(
          item.title,
          item.details,
          item.dueDate,
          item.priority,
          item.checked,
          item.index
        );
        addTodoToMain(key, todo);
      });
    }
    //if the selected item is Home, render All todos of Home project as well as the other projects.
    else if (key == "Home") {
      let projects = getProjects();
      projects.sort().forEach((project) => {
        project.todos.forEach((item) => {
          const todo = new Todo(
            item.title,
            item.details,
            item.dueDate,
            item.priority,
            item.checked,
            item.index
          );
          addTodoToMain(project.title, todo);
        });
      });
    }
  }
}

export function addTodoToMain(key, todo) {
  const todosContainer = document.querySelector("#todosContainer");
  const todoNode = todoItem(key, todo);
  todosContainer.appendChild(todoNode);
}

export function removeTodo(key, index) {
  const todoItem = document.querySelector(
    `[data-id="${key}"][data-index="${index}"]`
  );
  todoItem.remove();
}
