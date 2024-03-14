(()=>{"use strict";class e{constructor(e,t){this.title=e,this.todos=[]}}class t{constructor(e,t,n,d){this.title=e,this.details=t,this.dueDate=n,this.priority=d}}function n(t){const n=new e(t);localStorage.setItem(t,JSON.stringify(n))}const d=document.createElement("form");d.method="post",d.id="addTodoForm";const o=document.createElement("div"),c=document.createElement("input");c.type="text",c.id="title",c.placeholder="Title: Pay Bills",c.name="title",c.required=!0;const a=document.createElement("textarea");a.id="details",a.placeholder="Details: e.g. internet, phone, rent, etc.",a.name="details",o.appendChild(c),o.appendChild(a),d.appendChild(o);const l=document.createElement("div"),i=document.createElement("div");i.classList.add("duedate");const s=document.createElement("label");s.htmlFor="date",s.textContent="Due Date :";const r=document.createElement("input");r.type="date",r.id="date",r.name="date",r.required=!0,l.appendChild(i),i.appendChild(s),i.appendChild(r);const m=document.createElement("div"),u=document.createElement("p");u.textContent="Priority :";const p=document.createElement("input");p.type="radio",p.id="low",p.name="priority",p.required=!0,p.value="low";const h=document.createElement("label");h.htmlFor="low",h.textContent="Low";const y=document.createElement("input");y.type="radio",y.id="medium",y.name="priority",y.value="medium";const C=document.createElement("label");C.htmlFor="medium",C.textContent="Medium";const E=document.createElement("input");E.type="radio",E.id="high",E.name="priority",E.value="high";const v=document.createElement("label");v.htmlFor="high",v.textContent="High";const f=document.createElement("button");function L(){return d}function g(e){const t=document.createElement("li");t.classList.add("project"),t.dataset.id=e;const n=document.createElement("div");n.classList.add("project-logo");const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-list");const o=document.createElement("p");o.classList.add("project-name"),o.textContent=e;const c=document.createElement("div");c.classList.add("delete");const a=document.createElement("i");return a.classList.add("fa-solid"),a.classList.add("fa-x"),t.appendChild(n),n.appendChild(d),t.appendChild(o),t.appendChild(c),c.appendChild(a),t.addEventListener("click",(e=>{e.target.classList.contains("fa-x")?function(e,t){j(x);const n=document.querySelector(`[data-id='${e}']`);S.removeChild(n),function(e){localStorage.removeItem(e)}(t)}(t.dataset.id,o.textContent):j(t)})),t}f.type="submit",f.id="addTodo",f.textContent="Add To Do",m.appendChild(u),m.appendChild(p),m.appendChild(h),m.appendChild(y),m.appendChild(C),m.appendChild(E),m.appendChild(v),m.appendChild(f),l.appendChild(m),d.appendChild(l),d.addEventListener("submit",(e=>{if(e.preventDefault(),0==!!d.checkValidity())return;const n=document.querySelector(".project.selected").dataset.id,o=c.value,l=a.value,i=r.value,s=Array.from(document.getElementsByName("priority")).find((e=>e.checked)).value;!function(e,n,d,o,c){const a=new t(n,d,o,c),l=JSON.parse(localStorage.getItem(e)),i=l.todos;i.push(a),localStorage.setItem(e,JSON.stringify({title:l.title,todos:i}))}(n,o,l,i,s),H()}));const S=document.querySelector(".projects"),x=document.querySelector("#home.project");function j(e){!function(e){document.querySelectorAll(".project").forEach((t=>{t.dataset.id!=e.dataset.id?t.classList.remove("selected"):t.classList.add("selected")}))}(e),function(e){let t=document.querySelector("body");t.appendChild(function(e){const t=document.createElement("div");t.classList.add("main");const n=document.createElement("div");n.classList.add("main-heading");const d=document.createElement("p");d.classList.add("project-title"),d.textContent=e;const o=document.createElement("div");return o.id="todosContainer",n.appendChild(d),t.appendChild(n),t.appendChild(o),t}(e.dataset.id),t.children[3])}(e)}x.addEventListener("click",(()=>{j(x)}));const q=document.createElement("form");q.id="addProjectForm",q.method="post";const k=document.createElement("div");q.appendChild(k),k.style.display="none",k.style.fontSize="1.5rem",k.style.color="red";const b=document.createElement("textarea");b.id="projectName",b.placeholder="Project Name: House Renovations",b.name="projectName",b.required=!0,b.maxLength=15;const N=document.createElement("button");N.type="submit",N.id="addProject",N.textContent="Create Project",q.appendChild(b),q.appendChild(N),document.createElement("div").textContent="create project page",N.addEventListener("click",(e=>{e.preventDefault();const t=b.value;0!=(!!q.checkValidity()||(k.textContent="Project Name is required.",k.style.display="unset",!1))&&function(e){1==function(e){return null!=JSON.parse(localStorage.getItem(e))}(e)?(k.textContent="Project Name already exists",k.style.display="unset"):(n(e),function(e){const t=g(e);S.appendChild(t),j(t)}(e),H())}(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(t))}));const I=document.getElementById("add"),O=document.querySelector(".modal"),P=document.querySelector(".close"),D=document.querySelector(".modal-content"),w=document.getElementById("todo"),A=document.getElementById("project"),F=document.querySelector(".close"),B=document.querySelector(".modal-main");function H(){J(L(),w),D.classList.remove("modalZoom"),D.classList.add("modalZoomOut"),setTimeout((()=>{O.style.display="none"}),200),k.textContent="",k.style.display="none",b.value="",c.value="",a.value="",r.value="",document.querySelectorAll("input[name=priority]").forEach((e=>{e.checked=!1}))}function J(e,t){B.replaceChildren(e),T(t)}function T(e){document.querySelectorAll(".modal-item").forEach((t=>{t.id!==e.id&&t.classList.remove("selected")})),e.classList.add("selected")}w.addEventListener("click",(()=>{J(L(),w)})),A.addEventListener("click",(()=>{J(q,A)})),F.addEventListener("click",(()=>{J(L(),w),T(w)})),I.addEventListener("click",(()=>{O.style.display="unset",D.classList.add("modalZoom"),D.classList.remove("modalZoomOut")})),P.addEventListener("click",(()=>{H()})),B.appendChild(L()),function(){const e=Object.keys(localStorage),t=[];return e.map((e=>{const n=JSON.parse(localStorage.getItem(e));t.push(n)})),t}().forEach((e=>{"Home"!=e.title&&(g(e.title),S.appendChild(g(e.title)))})),j(x),null==localStorage.getItem("Home")&&n("Home")})();