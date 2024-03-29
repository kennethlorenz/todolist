import { closeCreateModal } from "./CreateScreen";
import {
  createTodo,
  getIndex,
  updateTodoFromLocalStorage,
} from "./LocalStorageManager";
import { addTodoToMain, updateTodoFromMain } from "./MainContent";
import { closeModal } from "./ModalHandler";
import Todo from "./classes/Todo";
const todoForm = document.createElement("form");
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
lowRadioButton.id = "Low";
lowRadioButton.name = "priority";
lowRadioButton.required = true;
lowRadioButton.value = "Low";
const lowRadioLabel = document.createElement("label");
lowRadioLabel.htmlFor = "Low";
lowRadioLabel.textContent = "Low";

const mediumRadioButton = document.createElement("input");
mediumRadioButton.type = "radio";
mediumRadioButton.id = "Medium";
mediumRadioButton.name = "priority";
mediumRadioButton.value = "Medium";
const mediumRadioLabel = document.createElement("label");
mediumRadioLabel.htmlFor = "Medium";
mediumRadioLabel.textContent = "Medium";

const highRadioButton = document.createElement("input");
highRadioButton.type = "radio";
highRadioButton.id = "High";
highRadioButton.name = "priority";
highRadioButton.value = "High";
const highRadioLabel = document.createElement("label");
highRadioLabel.htmlFor = "High";
highRadioLabel.textContent = "High";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "addTodo";
submitBtn.textContent = "Submit";

const checkedP = document.createElement("p");
checkedP.style.display = "none";

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

let keyE;
let indexE;
let checked;
export default function renderTodoForm() {
  submitBtn.removeEventListener("click", edit);
  keyE = "";
  indexE = "";
  checked = false;
  clearTodoForm();
  submitBtn.addEventListener("click", add);
  return todoForm;
}

export function renderEditTodoForm(key, index, todo) {
  submitBtn.removeEventListener("click", add);
  populateEditForm(todo);
  console.log(`outside submit ${key} ${index}`);
  setGlobalVariables(key, index, todo.checked);
  submitBtn.addEventListener("click", edit);

  return todoForm;
}

function populateEditForm(todo) {
  const radio = document.getElementById(todo.priority);
  titleInput.value = todo.title;
  detailsTextArea.value = todo.details;
  dateInput.value = todo.dueDate;
  radio.checked = true;
  checkedP.textContent = todo.checked;
}

const edit = (e) => {
  e.preventDefault();
  console.log(`after submit 1 ${keyE} ${indexE}`);
  const modal = document.getElementById("editTodoModal");
  const content = document.getElementById("editTodoContent");
  if (isFormValid() == false) {
    return;
  }

  let title = titleInput.value;
  let details = detailsTextArea.value;
  let dueDate = dateInput.value;
  let priority = Array.from(document.getElementsByName("priority")).find(
    (e) => e.checked
  ).value;
  let checked = JSON.parse(checkedP.textContent.toLowerCase());
  let updatedTodo = new Todo(
    title,
    details,
    dueDate,
    priority,
    checked,
    indexE
  );
  console.log(`after submit 2${keyE} ${indexE}`);
  submitEditTodoForm(keyE, indexE, updatedTodo);
  closeModal(modal, content);
};

function submitEditTodoForm(key, index, todo) {
  updateTodoFromLocalStorage(key, index, todo);
  updateTodoFromMain(key, index, todo);
}

function setGlobalVariables(key, index, checked) {
  keyE = key;
  indexE = index;
  checked = checked;
}

function add() {
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
  const index = getIndex(key);

  const todo = new Todo(title, details, dueDate, priority, false, index);
  addTodo(key, todo);
  closeCreateModal();
}

function addTodo(key, todo) {
  createTodo(key, todo);
  addTodoToMain(key, todo);
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
