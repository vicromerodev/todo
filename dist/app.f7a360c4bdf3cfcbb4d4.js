!function(){"use strict";var e,t,o,s=(e,t,o,s)=>{var r=!1;return{getTitle:()=>e,getDescription:()=>t,getDueDate:()=>o,getPriority:()=>s,updateIsDone:()=>{r=!r},getIsDone:()=>r}},r=function(e){for(var t=document.createElement("".concat(e)),o=arguments.length,s=new Array(o>1?o-1:0),r=1;r<o;r++)s[r-1]=arguments[r];return[...s].forEach((e=>{t.classList.add(e)})),t},a=((e,t)=>{var o=[];return{getProjectName:()=>e,getDescription:()=>t,getTasks:()=>o,addTasks:e=>o.push(e),removeTask:e=>o.splice(e,1)}})("Proyecto 1","Este es el proyecto 1");a.addTasks(s("Todo 1","Este es el todo 1","24h","3")),a.addTasks(s("Todo 2","Este es el todo 2","24h","1")),a.addTasks(s("Todo 3","Este es el todo 3","24h","2")),a.addTasks(s("Todo 4","Este es el todo 4","24h","3")),e=a,t=document.getElementById("projects-list"),o=document.createDocumentFragment(),e.getTasks().forEach((e=>{o.appendChild((e=>{var t=r("li","projects-list__item"),o=r("div","projects-list__priority","priority".concat(e.getPriority())),s=r("span","projects-list__name");s.textContent="".concat(e.getTitle());var a=r("span","projects-list__time");return a.textContent="24h",t.append(o,r("div","projects-list__checkbox"),s,a),t})(e))})),t.appendChild(o)}();
//# sourceMappingURL=app.f7a360c4bdf3cfcbb4d4.js.map