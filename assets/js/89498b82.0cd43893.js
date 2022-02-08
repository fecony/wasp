(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5650:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={title:"Overview"},l=void 0,s={unversionedId:"language/overview",id:"language/overview",isDocsHomePage:!1,title:"Overview",description:"Wasp is a declarative language that recognizes web application-specific terms (e.g. page or route) as",source:"@site/docs/language/overview.md",sourceDirName:"language",slug:"/language/overview",permalink:"/docs/language/overview",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/docs/language/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"The End",permalink:"/docs/tutorials/todo-app/the-end"},next:{title:"Syntax",permalink:"/docs/language/syntax"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wasp is a declarative language that recognizes web application-specific terms (e.g. ",(0,o.kt)("em",{parentName:"p"},"page")," or ",(0,o.kt)("em",{parentName:"p"},"route"),") as\nwords (types) of the language."),(0,o.kt)("p",null,"The basic idea is that the higher-level overview of an app (e.g. pages, routes, database model, ...) is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasp")," files (for now just one), while the specific parts (web components, back-end queries, ...) are implemented in specific non-wasp technologies (React, NodeJS, Prisma) and then referenced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasp")," files."),(0,o.kt)("p",null,"Basic structure of a Wasp project is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*.wasp")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ext/")," directory -> Contains non-wasp code (JS, CSS, ...) structured in any way you want.")),(0,o.kt)("p",null,"When referencing code from ",(0,o.kt)("inlineCode",{parentName:"p"},"ext/")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"*.wasp")," file, you do it as ",(0,o.kt)("inlineCode",{parentName:"p"},"@ext/relative/path/of/file/in/ext/dir"),"."),(0,o.kt)("h1",{id:"simple-example"},"Simple example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"TodoApp/\n  - main.wasp\n  - ext/\n    - operations.js\n    - pages/\n      - Main.js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app todoApp {\n  title: "ToDo App"\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import Main from "@ext/pages/Main"\n}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/operations.js",\n  entities: [Task]\n}\n\naction createTask {\n  fn: import { createTask } from "@ext/operations.js",\n  entities: [Task]\n}\n\nentity Task {=psl\n  id          Int     @id @default(autoincrement())\n  description String\n  isDone      Boolean @default(false)\npsl=}\n')),(0,o.kt)("p",null,"You can check out a full working example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/master/waspc/examples/todoApp"},"here"),"."),(0,o.kt)("p",null,"In the following sections each of the basic language features is explained."))}m.isMDXComponent=!0}}]);