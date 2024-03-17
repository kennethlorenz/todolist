import { format } from "date-fns";
export default function todoItem(
  projectName,
  title,
  details,
  dueDate,
  priority,
  checked
) {
  const container = document.createElement("div");
  container.classList.add("todoContainer");

  const firstSection = document.createElement("div");
  firstSection.classList.add("todo-left");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "todo";
  todoCheckbox.checked = checked;
  const todoLabel = document.createElement("label");
  todoLabel.htmlFor = "todo";
  todoLabel.textContent = title;

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
  todoDueDate.textContent = format(dueDate, "MMM do");
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

  container.style.borderLeft = `1rem solid ${borderLeftColor(priority)}`;

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
