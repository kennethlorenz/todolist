(()=>{"use strict";function e(){const e=document.createElement("form");e.method="post",e.id="addTodoForm";const t=document.createElement("div"),n=document.createElement("input");n.type="text",n.id="title",n.placeholder="Title: Pay Bills",n.name="title";const d=document.createElement("textarea");d.id="details",d.placeholder="Details: e.g. internet, phone, rent, etc.",d.name="details",t.appendChild(n),t.appendChild(d),e.appendChild(t);const o=document.createElement("div"),c=document.createElement("div");c.classList.add("duedate");const a=document.createElement("label");a.htmlFor="date",a.textContent="Due Date :";const l=document.createElement("input");l.type="date",l.id="date",l.name="date",o.appendChild(c),c.appendChild(a),c.appendChild(l);const i=document.createElement("div"),s=document.createElement("p");s.textContent="Priority :";const r=document.createElement("input");r.type="radio",r.id="low",r.name="priority";const m=document.createElement("label");m.htmlFor="low",m.textContent="Low";const u=document.createElement("input");u.type="radio",u.id="medium",u.name="priority";const p=document.createElement("label");p.htmlFor="medium",p.textContent="Medium";const h=document.createElement("input");h.type="radio",h.id="high",h.name="priority";const C=document.createElement("label");C.htmlFor="high",C.textContent="High";const E=document.createElement("button");return E.type="submit",E.id="addTodo",E.textContent="Add To Do",i.appendChild(s),i.appendChild(r),i.appendChild(m),i.appendChild(u),i.appendChild(p),i.appendChild(h),i.appendChild(C),i.appendChild(E),o.appendChild(i),e.appendChild(o),e}class t{constructor(e,t){this.title=e,this.todos=[]}}function n(e){const t=document.createElement("li");t.classList.add("project"),t.dataset.id=e;const n=document.createElement("div");n.classList.add("project-logo");const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-list");const l=document.createElement("p");l.classList.add("project-name"),l.textContent=e;const i=document.createElement("div");i.classList.add("delete");const s=document.createElement("i");return s.classList.add("fa-solid"),s.classList.add("fa-x"),t.appendChild(n),n.appendChild(d),t.appendChild(l),t.appendChild(i),i.appendChild(s),t.addEventListener("click",(e=>{e.target.classList.contains("fa-x")?function(e,t){a(c);const n=document.querySelector(`[data-id='${e}']`);o.removeChild(n),function(e){localStorage.removeItem(e)}(t)}(t.dataset.id,l.textContent):a(t)})),t}function d(e){document.querySelector(".main").replaceChildren(function(e){const t=document.createElement("div");t.classList.add("main-heading");const n=document.createElement("p");return n.classList.add("project-title"),n.textContent=e,document.createElement("div").id="todosContainer",t.appendChild(n),t}(e.dataset.id))}const o=document.querySelector(".projects"),c=document.querySelector("#home.project");function a(e){!function(e){document.querySelectorAll(".project").forEach((t=>{t.dataset.id!=e.dataset.id?t.classList.remove("selected"):t.classList.add("selected")}))}(e),d(e)}c.addEventListener("click",(()=>{a(c)}));const l=document.createElement("form");l.id="addProjectForm",l.method="post";const i=document.createElement("div");l.appendChild(i),i.style.display="none",i.style.fontSize="1.5rem",i.style.color="red";const s=document.createElement("textarea");s.id="projectName",s.placeholder="Project Name: House Renovations",s.name="projectName",s.required=!0,s.maxLength=15;const r=document.createElement("button");function m(){i.textContent="",i.style.display="none",s.value=""}r.type="submit",r.id="addProject",r.textContent="Create Project",l.appendChild(s),l.appendChild(r),document.createElement("div").textContent="create project page",r.addEventListener("click",(e=>{e.preventDefault();const d=s.value;0!=(l.checkValidity()?(m(),!0):(i.textContent="Project Name is required.",i.style.display="unset",!1))&&function(e){1==function(e){return null!=JSON.parse(localStorage.getItem(e))}(e)?(i.textContent="Project Name already exists",i.style.display="unset"):(function(e){const n=new t(e);localStorage.setItem(e,JSON.stringify(n))}(e),m(),function(e){const t=n(e);o.appendChild(t),a(t)}(e),v())}(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(d))}));const u=document.getElementById("add"),p=document.querySelector(".modal"),h=document.querySelector(".close"),C=document.querySelector(".modal-content"),E=document.getElementById("todo"),y=document.getElementById("project"),f=document.querySelector(".close"),L=document.querySelector(".modal-main");function v(){x(e(),E),C.classList.remove("modalZoom"),C.classList.add("modalZoomOut"),setTimeout((()=>{p.style.display="none"}),200)}function x(e,t){L.replaceChildren(e),g(t)}function g(e){document.querySelectorAll(".modal-item").forEach((t=>{t.id!==e.id&&t.classList.remove("selected")})),e.classList.add("selected")}E.addEventListener("click",(()=>{x(e(),E)})),y.addEventListener("click",(()=>{x(l,y)})),f.addEventListener("click",(()=>{x(e(),E),g(E)})),u.addEventListener("click",(()=>{p.style.display="unset",C.classList.add("modalZoom"),C.classList.remove("modalZoomOut")})),h.addEventListener("click",(()=>{m(),v()})),L.appendChild(e()),function(){const e=Object.keys(localStorage),t=[];return e.map((e=>{const n=JSON.parse(localStorage.getItem(e));t.push(n)})),t}().forEach((e=>{n(e.title),o.appendChild(n(e.title))})),d(c)})();