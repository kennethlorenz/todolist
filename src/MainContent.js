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
  body.appendChild(mainContent(project.dataset.id), body.children[3]);
  //mainDiv.replaceChildren(MainContent(project.dataset.id));
}
