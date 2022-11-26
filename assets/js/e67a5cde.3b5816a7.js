"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5547],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45215:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(44996);const o={id:"05-updating-tasks",title:"Updating tasks"},i=void 0,s={unversionedId:"tutorials/todo-app/05-updating-tasks",id:"tutorials/todo-app/05-updating-tasks",title:"Updating tasks",description:"The Todo app isn't done if you can't mark a task as done!",source:"@site/docs/tutorials/todo-app/05-updating-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/05-updating-tasks",permalink:"/docs/tutorials/todo-app/05-updating-tasks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/05-updating-tasks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-updating-tasks",title:"Updating tasks"},sidebar:"docs",previous:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/04-creating-tasks"},next:{title:"Authentication",permalink:"/docs/tutorials/todo-app/06-auth"}},p={},l=[{value:"Action",id:"action",level:2},{value:"Wasp declaration",id:"wasp-declaration",level:3},{value:"JS implementation",id:"js-implementation",level:3},{value:"React logic",id:"react-logic",level:2}],c={toc:l};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Todo app isn't done if you can't mark a task as done!"),(0,r.kt)("p",null,"For that, we will need to do two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implement a Wasp action that updates the task."),(0,r.kt)("li",{parentName:"ol"},"Modify our React code so it calls that action.")),(0,r.kt)("h2",{id:"action"},"Action"),(0,r.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,r.kt)("p",null,"We declare a Wasp action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@server/actions",\n  entities: [Task]\n}\n')),(0,r.kt)("h3",{id:"js-implementation"},"JS implementation"),(0,r.kt)("p",null,"We define the JS implementation of the Wasp action in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/actions.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/actions.js"',title:'"src/server/actions.js"'},"// ...\n\nexport const updateTask = async (args, context) => {\n  return context.entities.Task.update({\n    where: { id: args.taskId },\n    data: {\n      isDone: args.data.isDone\n    }\n  })\n}\n")),(0,r.kt)("h2",{id:"react-logic"},"React logic"),(0,r.kt)("p",null,"And we update the React component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,7-16,23} title="src/client/MainPage.jsx"',"{2,7-16,23}":!0,title:'"src/client/MainPage.jsx"'},"// ...\nimport updateTask from '@wasp/actions/updateTask'\n\n// ...\n\nconst Task = (props) => {\n  const handleIsDoneChange = async (event) => {\n    try {\n      await updateTask({\n        taskId: props.task.id,\n        data: { isDone: event.target.checked }\n      })\n    } catch (error) {\n      window.alert('Error while updating task: ' + error.message)\n    }\n  }\n\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone}\n        onChange={handleIsDoneChange}\n      />\n      {props.task.description}\n    </div>\n  )\n}\n// ...\n")),(0,r.kt)("p",null,"Awesome! We can now tick this task as done ;)."))}d.isMDXComponent=!0}}]);