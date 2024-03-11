export default function MainContent(projectName) {
  const mainHeadingDiv = document.createElement("div");
  mainHeadingDiv.classList.add("main-heading");

  const projectTitle = document.createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = projectName;

  const todosContainer = document.createElement("div");
  todosContainer.id = "todosContainer";

  mainHeadingDiv.appendChild(projectTitle);
  return mainHeadingDiv;
}

export function RenderMainContent(project) {
  let mainDiv = document.querySelector(".main");
  mainDiv.replaceChildren(MainContent(project.dataset.id));
}
