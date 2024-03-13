export default function renderTodoForm() {
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
  const lowRadioLabel = document.createElement("label");
  lowRadioLabel.htmlFor = "low";
  lowRadioLabel.textContent = "Low";

  const mediumRadioButton = document.createElement("input");
  mediumRadioButton.type = "radio";
  mediumRadioButton.id = "medium";
  mediumRadioButton.name = "priority";
  const mediumRadioLabel = document.createElement("label");
  mediumRadioLabel.htmlFor = "medium";
  mediumRadioLabel.textContent = "Medium";

  const highRadioButton = document.createElement("input");
  highRadioButton.type = "radio";
  highRadioButton.id = "high";
  highRadioButton.name = "priority";
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

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Addtodo clicked");
    isFormValid();
  });

  function isFormValid() {
    if (todoForm.checkValidity()) {
      console.log("valid form");
      clearForm();
    } else {
      console.log("invalid form");
    }
  }

  function clearForm() {
    titleInput.value = "";
    detailsTextArea.value = "";
    dateInput.value = "";

    const radios = document.querySelectorAll(`input[name=priority]`);
    radios.forEach((node) => {
      node.checked = false;
    });
  }

  return todoForm;
}
