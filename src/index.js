import createModalDOM from "./CreateModalDOM";
import renderProjectsOnSidebar from "./SidebarDOM";
import { createProject } from "./LocalStorageManager";

createModalDOM();
renderProjectsOnSidebar();
createProject("Home");
