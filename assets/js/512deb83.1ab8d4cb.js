"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(44996);const s={id:"03-listing-tasks",title:"Listing tasks"},o=void 0,l={unversionedId:"tutorials/todo-app/03-listing-tasks",id:"tutorials/todo-app/03-listing-tasks",title:"Listing tasks",description:"We want to admire our tasks, so let's list them!",source:"@site/docs/tutorials/todo-app/03-listing-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/03-listing-tasks",permalink:"/docs/tutorials/todo-app/03-listing-tasks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/03-listing-tasks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-listing-tasks",title:"Listing tasks"},sidebar:"docs",previous:{title:"Task entity",permalink:"/docs/tutorials/todo-app/02-task-entity"},next:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/04-creating-tasks"}},p={},u=[{value:"Introducing operations (queries and actions)",id:"introducing-operations-queries-and-actions",level:2},{value:"Wasp query",id:"wasp-query",level:2},{value:"Wasp declaration",id:"wasp-declaration",level:3},{value:"JS implementation",id:"js-implementation",level:3},{value:"Invoking the query from React",id:"invoking-the-query-from-react",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We want to admire our tasks, so let's list them!"),(0,r.kt)("h2",{id:"introducing-operations-queries-and-actions"},"Introducing operations (queries and actions)"),(0,r.kt)("p",null,"The primary way of interacting with entities in Wasp is via ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#queries-and-actions-aka-operations"},"operations (queries and actions)"),"."),(0,r.kt)("p",null,"Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.\nWe will start with writing a query, since we are just listing tasks and not modifying anything for now."),(0,r.kt)("p",null,"To list tasks, we will need two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Wasp query that fetches all the tasks from the database."),(0,r.kt)("li",{parentName:"ol"},"React logic that calls our query and displays its results.")),(0,r.kt)("h2",{id:"wasp-query"},"Wasp query"),(0,r.kt)("p",null,"Let's implement ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#query"},"query"),".\nIt consists of a declaration in Wasp and implementation in JS (in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/")," directory)."),(0,r.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,r.kt)("p",null,"Add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n\nquery getTasks {\n  // We specify that JS implementation of the query (which is an async JS function)\n  // can be found in `src/server/queries.js` as the named export `getTasks`.\n  // Use '@server' to reference files inside the src/server folder.\n  fn: import { getTasks } from \"@server/queries\",\n  // We tell Wasp that this query is doing something with entity `Task`. With that, Wasp will\n  // automatically refresh the results of this query when tasks change.\n  entities: [Task]\n}\n")),(0,r.kt)("h3",{id:"js-implementation"},"JS implementation"),(0,r.kt)("p",null,"Next, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/queries.js")," and define the JS we've just used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),(0,r.kt)("p",null,"Query function parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),", arguments the query is invoked with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),", additional stuff provided by Wasp.")),(0,r.kt)("p",null,"Since we declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," that our query uses entity ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),", Wasp injected a ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"},"Prisma client")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," entity as ",(0,r.kt)("inlineCode",{parentName:"p"},"context.entities.Task")," - we used it above to fetch all the tasks from the database."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Queries and actions are NodeJS functions that are executed on the server. Therefore, we put them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server")," folder.")),(0,r.kt)("h2",{id:"invoking-the-query-from-react"},"Invoking the query from React"),(0,r.kt)("p",null,"We've just said that the queries we write are executed on the server, but Wasp will generate client-side query functions (taking care of the network and cache invalidation in the background). Let's finally use the query we've just created, ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks"),", in our React component to list the tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1-2,5-14,17-32} title="src/client/MainPage.jsx"',"{1-2,5-14,17-32}":!0,title:'"src/client/MainPage.jsx"'},"import getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => {\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone}\n      />\n      {props.task.description}\n    </div>\n  )\n}\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nexport default MainPage\n")),(0,r.kt)("p",null,"Most of this is just regular React, the only exception being two special ",(0,r.kt)("inlineCode",{parentName:"p"},"@wasp")," imports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks'")," - Gives us our freshly defined Wasp query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import { useQuery } from '@wasp/queries'")," - Gives us Wasp's ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/features#the-usequery-hook"},"useQuery")," React hook which is actually just a thin wrapper over ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/guides/queries"},"useQuery")," hook, behaving very similarly while offering some extra integration with Wasp.")),(0,r.kt)("p",null,"While we could directly call the query with ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks()"),", calling it with ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery(getTasks)")," gives us reactivity - the React component gets re-rendered if the result of the query changes."),(0,r.kt)("p",null,'With these changes, you should be seeing the text "No tasks" on the screen:'),(0,r.kt)("img",{alt:"Todo App - No Tasks",src:(0,i.Z)("img/todo-app-no-tasks.png"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"Next, let's create some tasks!"))}d.isMDXComponent=!0}}]);