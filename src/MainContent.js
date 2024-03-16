import { getTodosFromSelectedProject } from "./LocalStorageManager";
import todoItem from "./TodoItem";
import { initializeHomeStorage } from "./LocalStorageManager";
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
  body.replaceChild(mainContent(project.dataset.id), body.children[3]);
  //mainDiv.replaceChildren(MainContent(project.dataset.id));
  renderAllTodos();
}

export function renderAllTodos() {
  const key = document.querySelector(".project.selected").dataset.id;
  let projectTodos;

  const todosContainer = document.querySelector("#todosContainer");

  if (getTodosFromSelectedProject(key) == null) {
    return;
  } else {
    projectTodos = getTodosFromSelectedProject(key);
  }
  //const projectTodos = getTodosFromSelectedProject(key);
  projectTodos.forEach((item) => {
    console.log(
      `Title: ${item.title}, Details: ${item.details}, DueDate: ${item.dueDate}, Priority: ${item.priorty}, Checked: ${item.checked} `
    );

    const todo = todoItem(
      key,
      item.title,
      item.details,
      item.dueDate,
      item.priorty,
      item.checked
    );
    todosContainer.appendChild(todo);
  });
}
