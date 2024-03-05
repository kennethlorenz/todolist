export default function SideBarDom() {
  const sideBarItems = document.querySelectorAll(".project");

  sideBarItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("side bar item clicked");
      deselectProject();
      item.classList.add("selected");
    });
  });

  function deselectProject() {
    sideBarItems.forEach((item) => {
      item.classList.remove("selected");
    });
  }
}
