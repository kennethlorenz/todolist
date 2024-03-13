(()=>{"use strict";function e(){const e=document.createElement("form");e.method="post",e.id="addTodoForm";const t=document.createElement("div"),n=document.createElement("input");n.type="text",n.id="title",n.placeholder="Title: Pay Bills",n.name="title",n.required=!0;const d=document.createElement("textarea");d.id="details",d.placeholder="Details: e.g. internet, phone, rent, etc.",d.name="details",t.appendChild(n),t.appendChild(d),e.appendChild(t);const o=document.createElement("div"),c=document.createElement("div");c.classList.add("duedate");const a=document.createElement("label");a.htmlFor="date",a.textContent="Due Date :";const l=document.createElement("input");l.type="date",l.id="date",l.name="date",l.required=!0,o.appendChild(c),c.appendChild(a),c.appendChild(l);const i=document.createElement("div"),s=document.createElement("p");s.textContent="Priority :";const r=document.createElement("input");r.type="radio",r.id="low",r.name="priority",r.required=!0;const m=document.createElement("label");m.htmlFor="low",m.textContent="Low";const u=document.createElement("input");u.type="radio",u.id="medium",u.name="priority";const p=document.createElement("label");p.htmlFor="medium",p.textContent="Medium";const h=document.createElement("input");h.type="radio",h.id="high",h.name="priority";const C=document.createElement("label");C.htmlFor="high",C.textContent="High";const y=document.createElement("button");return y.type="submit",y.id="addTodo",y.textContent="Add To Do",i.appendChild(s),i.appendChild(r),i.appendChild(m),i.appendChild(u),i.appendChild(p),i.appendChild(h),i.appendChild(C),i.appendChild(y),o.appendChild(i),e.appendChild(o),e.addEventListener("submit",(t=>{t.preventDefault(),console.log("Addtodo clicked"),e.checkValidity()?(console.log("valid form"),n.value="",d.value="",l.value="",document.querySelectorAll("input[name=priority]").forEach((e=>{e.checked=!1}))):console.log("invalid form")})),e}class t{constructor(e,t){this.title=e,this.todos=[]}}function n(e){const t=document.createElement("li");t.classList.add("project"),t.dataset.id=e;const n=document.createElement("div");n.classList.add("project-logo");const a=document.createElement("i");a.classList.add("fa-solid"),a.classList.add("fa-list");const l=document.createElement("p");l.classList.add("project-name"),l.textContent=e;const i=document.createElement("div");i.classList.add("delete");const s=document.createElement("i");return s.classList.add("fa-solid"),s.classList.add("fa-x"),t.appendChild(n),n.appendChild(a),t.appendChild(l),t.appendChild(i),i.appendChild(s),t.addEventListener("click",(e=>{e.target.classList.contains("fa-x")?function(e,t){c(o);const n=document.querySelector(`[data-id='${e}']`);d.removeChild(n),function(e){localStorage.removeItem(e)}(t)}(t.dataset.id,l.textContent):c(t)})),t}const d=document.querySelector(".projects"),o=document.querySelector("#home.project");function c(e){!function(e){document.querySelectorAll(".project").forEach((t=>{t.dataset.id!=e.dataset.id?t.classList.remove("selected"):t.classList.add("selected")}))}(e),function(e){let t=document.querySelector("body");t.appendChild(function(e){const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("main-heading");const d=document.createElement("p");d.classList.add("project-title"),d.textContent=e;const o=document.createElement("div");return o.id="todosContainer",n.appendChild(d),t.appendChild(n),t.appendChild(o),t}(e.dataset.id),t.children[3])}(e)}o.addEventListener("click",(()=>{c(o)}));const a=document.createElement("form");a.id="addProjectForm",a.method="post";const l=document.createElement("div");a.appendChild(l),l.style.display="none",l.style.fontSize="1.5rem",l.style.color="red";const i=document.createElement("textarea");i.id="projectName",i.placeholder="Project Name: House Renovations",i.name="projectName",i.required=!0,i.maxLength=15;const s=document.createElement("button");function r(){l.textContent="",l.style.display="none",i.value=""}s.type="submit",s.id="addProject",s.textContent="Create Project",a.appendChild(i),a.appendChild(s),document.createElement("div").textContent="create project page",s.addEventListener("click",(e=>{e.preventDefault();const o=i.value;0!=(a.checkValidity()?(r(),!0):(l.textContent="Project Name is required.",l.style.display="unset",!1))&&function(e){1==function(e){return null!=JSON.parse(localStorage.getItem(e))}(e)?(l.textContent="Project Name already exists",l.style.display="unset"):(function(e){const n=new t(e);localStorage.setItem(e,JSON.stringify(n))}(e),r(),function(e){const t=n(e);d.appendChild(t),c(t)}(e),f())}(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(o))}));const m=document.getElementById("add"),u=document.querySelector(".modal"),p=document.querySelector(".close"),h=document.querySelector(".modal-content"),C=document.getElementById("todo"),y=document.getElementById("project"),E=document.querySelector(".close"),v=document.querySelector(".modal-main");function f(){L(e(),C),h.classList.remove("modalZoom"),h.classList.add("modalZoomOut"),setTimeout((()=>{u.style.display="none"}),200)}function L(e,t){v.replaceChildren(e),g(t)}function g(e){document.querySelectorAll(".modal-item").forEach((t=>{t.id!==e.id&&t.classList.remove("selected")})),e.classList.add("selected")}C.addEventListener("click",(()=>{L(e(),C)})),y.addEventListener("click",(()=>{L(a,y)})),E.addEventListener("click",(()=>{L(e(),C),g(C)})),m.addEventListener("click",(()=>{u.style.display="unset",h.classList.add("modalZoom"),h.classList.remove("modalZoomOut")})),p.addEventListener("click",(()=>{r(),f()})),v.appendChild(e()),function(){const e=Object.keys(localStorage),t=[];return e.map((e=>{const n=JSON.parse(localStorage.getItem(e));t.push(n)})),t}().forEach((e=>{n(e.title),d.appendChild(n(e.title))})),c(o)})();