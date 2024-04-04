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
    const selectedProj = document.querySelector(".project.selected").id;
    deleteProject(selectedProj);
  });
  return mainDiv;
}

export function renderMainContent(project) {
  let body = document.querySelector("body");
  body.replaceChild(mainContent(project.id), body.children[5]);
  //mainDiv.replaceChildren(MainContent(project.dataset.id));
  renderAllTodos();
}

export function renderAllTodos() {
  const key = document.querySelector(".project.selected").id;
  if (getTodosFromSelectedProject(key) == null) {
    return;
  } else {
    //if the selected item is Home, render All todos of Home project as well as the other projects.
    if (key == "Home") {
      hideEmptyProjectMessage();
      let projects = getProjects();
      projects.sort().forEach((project) => {
        let counter = 0;
        project.todos.forEach((item) => {
          const todo = new Todo(
            item.title,
            item.details,
            item.dueDate,
            item.priority,
            item.checked
          );
          addTodoToMain(project.title, todo, counter);
          counter += 1;
        });
      });
    }
    //if today aand week is selected, hide empty project message and render todos respectively.
    else if (key == "Today" || key == "Week") {
      let projectTodos = getTodosFromSelectedProject(key);
      hideEmptyProjectMessage();
      let counter = 0;
      projectTodos.forEach((item) => {
        const todo = new Todo(
          item.title,
          item.details,
          item.dueDate,
          item.priority,
          item.checked
        );
        addTodoToMain(key, todo, counter);
        counter += 1;
      });
    }
    //if the selected item is not Home, Render all the todos on that project.
    else {
      let projectTodos = getTodosFromSelectedProject(key);
      if (projectTodos.length == 0) {
        showEmptyProjectMessage();
      }
      let counter = 0;
      projectTodos.forEach((item) => {
        const todo = new Todo(
          item.title,
          item.details,
          item.dueDate,
          item.priority,
          item.checked
        );
        addTodoToMain(key, todo, counter);
        counter += 1;
      });
    }
  }
}

export function addTodoToMain(key, todo, counter) {
  hideEmptyProjectMessage();
  const todosContainer = document.querySelector("#todosContainer");
  const todoNode = todoItem(key, todo, counter);
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
  const selectedProj = document.querySelector(".project.selected").id;
  const todoItem = document.querySelector(
    `[data-id="${key}"][data-index="${index}"]`
  );
  todoItem.remove();
  updateTodosIndexByProject(key);
}

function updateTodosIndexByProject(key) {
  const todos = document.querySelectorAll(`[data-id="${key}"]`);
  let counter = 0;
  todos.forEach((item) => {
    item.dataset.index = counter;
    counter += 1;
  });
}

export function updateTodoFromMain(key, index, todo) {
  const currentTodo = document.querySelector(
    `[data-id="${key}"][data-index="${index}"]`
  );
  console.log(currentTodo);
  const updatedTodoItem = todoItem(key, todo, index);
  console.log(updatedTodoItem);
  currentTodo.parentNode.replaceChild(updatedTodoItem, currentTodo);
}
