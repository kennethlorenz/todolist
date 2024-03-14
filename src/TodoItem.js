export default function todoItem(todoTitle) {
  const container = document.createElement("div");
  container.classList.add("todoContainer");

  const firstSection = document.createElement("div");
  firstSection.classList.add("todo-left");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "todo";
  const todoLabel = document.createElement("label");
  todoLabel.htmlFor = "todo";
  todoLabel.textContent = todoTitle;

  firstSection.appendChild(todoCheckbox);
  firstSection.appendChild(todoLabel);

  container.appendChild(firstSection);

  const secondSection = document.createElement("div");
  secondSection.classList.add("todo-right");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("todo-details");
  const todoDueDate = document.createElement("p");
  todoDueDate.classList.add("todo-duedate");
  const editTodoButton = document.createElement("i");
  editTodoButton.classList.add("fa-regular fa-pen-to-square");
  const deleteTodoButton = document.createElement("i");
  deleteTodoButton.classList.add("fa-solid fa-trash");

  secondSection.appendChild(detailsButton);
  secondSection.appendChild(todoDueDate);
  secondSection.appendChild(editTodoButton);
  secondSection.appendChild(deleteTodoButton);

  container.appendChild(secondSection);

  return container;
}
