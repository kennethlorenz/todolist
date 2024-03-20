import { format } from "date-fns";
import { removeTodo } from "./MainContent";
import {
  deleteTodoFromLocalStorage,
  updateTodoCheckFromLocalStorage,
} from "./LocalStorageManager";
export default function todoItem(projectName, todo) {
  const container = document.createElement("div");
  container.classList.add("todoContainer");
  container.dataset.id = projectName;
  container.dataset.index = todo.index;

  const firstSection = document.createElement("div");
  firstSection.classList.add("todo-left");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "todo";
  todoCheckbox.checked = todo.checked;
  const todoLabel = document.createElement("label");
  todoLabel.htmlFor = "todo";
  todoLabel.textContent = todo.title;

  firstSection.appendChild(todoCheckbox);
  firstSection.appendChild(todoLabel);

  container.appendChild(firstSection);

  const secondSection = document.createElement("div");
  secondSection.classList.add("todo-right");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("todo-details");
  detailsButton.textContent = "DETAILS";
  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("todo-duedate");
  todoDueDate.textContent = format(todo.dueDate, "MMM do");
  const editTodoButton = document.createElement("i");
  editTodoButton.classList.add("fa-regular");
  editTodoButton.classList.add("fa-pen-to-square");
  const deleteTodoButton = document.createElement("i");
  deleteTodoButton.classList.add("fa-solid");
  deleteTodoButton.classList.add("fa-trash");

  secondSection.appendChild(detailsButton);
  secondSection.appendChild(todoDueDate);
  secondSection.appendChild(editTodoButton);
  secondSection.appendChild(deleteTodoButton);

  container.appendChild(secondSection);

  container.style.borderLeft = `1rem solid ${borderLeftColor(todo.priority)}`;
  const key = container.dataset.id;
  const index = container.dataset.index;

  deleteTodoButton.addEventListener("click", () => {
    removeTodo(key, index);
    deleteTodoFromLocalStorage(key, index);
  });

  todoCheckbox.addEventListener("change", () => {
    if (todoCheckbox.checked) {
      updateTodoCheckFromLocalStorage(key, index, true);
      addBlur();
    } else {
      updateTodoCheckFromLocalStorage(key, index, false);
      removeBlur();
    }
  });

  function addBlur() {
    container.classList.add("checked");
    detailsButton.classList.add("checked");
  }
  function removeBlur() {
    container.classList.remove("checked");
    detailsButton.classList.remove("checked");
  }

  return container;
}

function borderLeftColor(priority) {
  if (priority == "high") {
    return "red";
  } else if (priority == "medium") {
    return "yellow";
  } else {
    return "green";
  }
}
