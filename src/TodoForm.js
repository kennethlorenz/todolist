import { closeModal } from "./CreateModalDOM";
import { createTodo } from "./LocalStorageManager";
import { addTodoToMain } from "./MainContent";
const todoForm = document.createElement("form");
todoForm.method = "post";
todoForm.id = "addTodoForm";

const firstDiv = document.createElement("div");

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.id = "title";
titleInput.placeholder = "Title: Pay Bills";
titleInput.name = "title";
titleInput.required = true;

const detailsTextArea = document.createElement("textarea");
detailsTextArea.id = "details";
detailsTextArea.placeholder = "Details: e.g. internet, phone, rent, etc.";
detailsTextArea.name = "details";

firstDiv.appendChild(titleInput);
firstDiv.appendChild(detailsTextArea);

todoForm.appendChild(firstDiv);

const secondDiv = document.createElement("div");

const dueDateDiv = document.createElement("div");
dueDateDiv.classList.add("duedate");
const dateLabel = document.createElement("label");
dateLabel.htmlFor = "date";
dateLabel.textContent = "Due Date :";
const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
dateInput.name = "date";
dateInput.required = true;

secondDiv.appendChild(dueDateDiv);
dueDateDiv.appendChild(dateLabel);
dueDateDiv.appendChild(dateInput);

const secondChildDiv = document.createElement("div");
const priorityLabel = document.createElement("p");
priorityLabel.textContent = "Priority :";

const lowRadioButton = document.createElement("input");
lowRadioButton.type = "radio";
lowRadioButton.id = "low";
lowRadioButton.name = "priority";
lowRadioButton.required = true;
lowRadioButton.value = "low";
const lowRadioLabel = document.createElement("label");
lowRadioLabel.htmlFor = "low";
lowRadioLabel.textContent = "Low";

const mediumRadioButton = document.createElement("input");
mediumRadioButton.type = "radio";
mediumRadioButton.id = "medium";
mediumRadioButton.name = "priority";
mediumRadioButton.value = "medium";
const mediumRadioLabel = document.createElement("label");
mediumRadioLabel.htmlFor = "medium";
mediumRadioLabel.textContent = "Medium";

const highRadioButton = document.createElement("input");
highRadioButton.type = "radio";
highRadioButton.id = "high";
highRadioButton.name = "priority";
highRadioButton.value = "high";
const highRadioLabel = document.createElement("label");
highRadioLabel.htmlFor = "high";
highRadioLabel.textContent = "High";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "addTodo";
submitBtn.textContent = "Add To Do";

secondChildDiv.appendChild(priorityLabel);
secondChildDiv.appendChild(lowRadioButton);
secondChildDiv.appendChild(lowRadioLabel);
secondChildDiv.appendChild(mediumRadioButton);
secondChildDiv.appendChild(mediumRadioLabel);
secondChildDiv.appendChild(highRadioButton);
secondChildDiv.appendChild(highRadioLabel);
secondChildDiv.appendChild(submitBtn);

secondDiv.appendChild(secondChildDiv);

todoForm.appendChild(secondDiv);
export default function renderTodoForm() {
  return todoForm;
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormValid() == false) {
    return;
  }
  const key = document.querySelector(".project.selected").dataset.id;
  const title = titleInput.value;
  const details = detailsTextArea.value;
  const dueDate = dateInput.value;
  const priority = Array.from(document.getElementsByName("priority")).find(
    (e) => e.checked
  ).value;
  addTodo(key, title, details, dueDate, priority);
  closeModal();
});

function addTodo(key, title, details, dueDate, priority) {
  createTodo(key, title, details, dueDate, priority);
  addTodoToMain(key, title, details, dueDate, priority);
}

function isFormValid() {
  if (todoForm.checkValidity()) {
    return true;
  } else {
    return false;
  }
}

export function clearTodoForm() {
  titleInput.value = "";
  detailsTextArea.value = "";
  dateInput.value = "";

  const radios = document.querySelectorAll(`input[name=priority]`);
  radios.forEach((node) => {
    node.checked = false;
  });
}
