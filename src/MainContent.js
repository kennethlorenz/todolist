import {
  getProjects,
  getTodosFromSelectedProject,
} from "./LocalStorageManager";
import todoItem from "./TodoItem";
import Todo from "./classes/Todo";
import { deleteProject } from "./SidebarDOM";
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

  const container = document.createElement("div");
  container.id = "empty";
  container.style.display = "none";
  const pTag = document.createElement("p");
  pTag.textContent = "Empty Project!";
  const pTag2 = document.createElement("p");
  pTag2.textContent = "Create a New to-do item or Delete Project";

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete Project";

  container.appendChild(pTag);
  container.appendChild(pTag2);
  container.appendChild(deleteProjectButton);
  todosContainer.appendChild(container);

  mainHeadingDiv.appendChild(projectTitle);

  mainDiv.appendChild(mainHeadingDiv);
  mainDiv.appendChild(todosContainer);

  deleteProjectButton.addEventListener("click", () => {
    const selectedProj = document.querySelector(".project.selected").dataset.id;
    deleteProject(selectedProj);
  });
  return mainDiv;
}

export function renderMainContent(project) {
  let body = document.querySelector("body");
  body.replaceChild(mainContent(project.dataset.id), body.children[5]);
  //mainDiv.replaceChildren(MainContent(project.dataset.id));
  renderAllTodos();
}

export function renderAllTodos() {
  const key = document.querySelector(".project.selected").dataset.id;
  if (getTodosFromSelectedProject(key) == null) {
    return;
  } else {
    //if the selected item is Home, render All todos of Home project as well as the other projects.
    if (key == "Home") {
      hideEmptyProjectMessage();
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
    } else if (key == "Today" || key == "Week") {
      let projectTodos = getTodosFromSelectedProject(key);
      hideEmptyProjectMessage();
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
    //if the selected item is not Home, Render all the todos on that project.
    else {
      let projectTodos = getTodosFromSelectedProject(key);
      if (projectTodos.length == 0) {
        showEmptyProjectMessage();
      }
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
  }
}

export function addTodoToMain(key, todo) {
  hideEmptyProjectMessage();
  const todosContainer = document.querySelector("#todosContainer");
  const todoNode = todoItem(key, todo);
  todosContainer.appendChild(todoNode);
}

function showEmptyProjectMessage() {
  const del = document.getElementById("empty");
  del.style.display = "flex";
}

function hideEmptyProjectMessage() {
  const del = document.getElementById("empty");
  del.style.display = "none";
}

export function removeTodo(key, index) {
  const selectedProj = document.querySelector(".project.selected").dataset.id;
  const todoItem = document.querySelector(
    `[data-id="${key}"][data-index="${index}"]`
  );
  todoItem.remove();

  if (getTodosFromSelectedProject(key) == 0 && selectedProj != "Home") {
    showEmptyProjectMessage();
  }
}

export function updateTodoFromMain(key, index, todo) {
  const currentTodo = document.querySelector(
    `[data-id="${key}"][data-index="${index}"]`
  );
  console.log(currentTodo);
  const updatedTodoItem = todoItem(key, todo);
  console.log(updatedTodoItem);
  currentTodo.parentNode.replaceChild(updatedTodoItem, currentTodo);
}
