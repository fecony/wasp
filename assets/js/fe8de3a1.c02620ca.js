(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return r}});var a=n(2263),i=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5778:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(4996),s=["components"],l={title:"Authentication"},p=void 0,u={unversionedId:"tutorials/todo-app/auth",id:"tutorials/todo-app/auth",isDocsHomePage:!1,title:"Authentication",description:"Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!",source:"@site/docs/tutorials/todo-app/auth.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/auth",permalink:"/wasp/docs/tutorials/todo-app/auth",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/docs/tutorials/todo-app/auth.md",version:"current",frontMatter:{title:"Authentication"},sidebar:"docs",previous:{title:"Updating tasks",permalink:"/wasp/docs/tutorials/todo-app/updating-tasks"},next:{title:"Dependencies",permalink:"/wasp/docs/tutorials/todo-app/dependencies"}},d=[{value:"Adding entity User",id:"adding-entity-user",children:[]},{value:"Defining <code>auth</code> declaration",id:"defining-auth-declaration",children:[]},{value:"Adding Login and Signup pages",id:"adding-login-and-signup-pages",children:[]},{value:"Updating Main page to check if user is authenticated",id:"updating-main-page-to-check-if-user-is-authenticated",children:[]},{value:"Defining User-Task relation in entities",id:"defining-user-task-relation-in-entities",children:[]},{value:"Updating operations to forbid access to non-authenticated users",id:"updating-operations-to-forbid-access-to-non-authenticated-users",children:[]},{value:"Logout button",id:"logout-button",children:[]}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most of the apps today are multi-user, and Wasp has first-class support for it, so let's see how to add it to our Todo app!"),(0,o.kt)("p",null,"Let's define a Todo list (luckily we have an app for that now ;)) to get this done:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Wasp entity ",(0,o.kt)("inlineCode",{parentName:"li"},"User"),"."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," Wasp declaration."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add ",(0,o.kt)("inlineCode",{parentName:"li"},"Login")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Signup")," pages"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"ext/MainPage.js")," so that it requires authentication."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Prisma relation between ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," entities."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Modify our queries and actions so that they work only with the tasks belonging to the authenticated user."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add logout button.")),(0,o.kt)("h2",{id:"adding-entity-user"},"Adding entity User"),(0,o.kt)("p",null,"First, let's define entity ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n")),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp db migrate-dev\n")),(0,o.kt)("p",null,"to propagate the schema change (we added User)."),(0,o.kt)("h2",{id:"defining-auth-declaration"},"Defining ",(0,o.kt)("inlineCode",{parentName:"h2"},"auth")," declaration"),(0,o.kt)("p",null,"Next, we want to tell Wasp that we want full-stack ",(0,o.kt)("a",{parentName:"p",href:"/wasp/docs/language/basic-elements#authentication--authorization"},"authentication")," in our app, and that it should use entity ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nauth {\n  // Expects entity User to have (email:String) and (password:String) fields.\n  userEntity: User,\n  methods: [ EmailAndPassword ], // More methods coming soon!\n\n  onAuthFailedRedirectTo: "/login" // We\'ll see how this is used a bit later\n}\n')),(0,o.kt)("p",null,"What this means for us is that Wasp now offers us:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login and Signup forms located at ",(0,o.kt)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Login")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Signup")," paths, ready to be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logout()")," action."),(0,o.kt)("li",{parentName:"ul"},"React hook ",(0,o.kt)("inlineCode",{parentName:"li"},"useAuth()"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context.user")," as an argument within query/action.")),(0,o.kt)("p",null,"This is a very high-level API for auth which makes it very easy to get started quickly, but is\nnot very flexible. If you require more control (e.g. want to execute some custom code on the server\nduring signup, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/basic-elements#lower-level-api"},"lower-level auth API"),"."),(0,o.kt)("p",null,"Ok, that was easy!"),(0,o.kt)("p",null,"To recap, so far we have created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User")," entity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth")," declaration thanks to which Wasp gives us plenty of auth functionality.")),(0,o.kt)("h2",{id:"adding-login-and-signup-pages"},"Adding Login and Signup pages"),(0,o.kt)("p",null,"When we declared ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," we got login and signup forms generated for us, but now we have to use them in their pages. In our ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," we'll add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute "/signup" -> page Signup\npage Signup {\n    component: import Signup from "@ext/SignupPage"\n}\n\nroute "/login" -> page Login\npage Login {\n    component: import Login from "@ext/LoginPage"\n}\n')),(0,o.kt)("p",null,"Great, Wasp now knows how to route these and where to find the pages. Now to the React code of the pages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ext/LoginPage.js"',title:'"ext/LoginPage.js"'},"import React from 'react'\nimport { Link } from 'react-router-dom'\n\nimport LoginForm from '@wasp/auth/forms/Login'\n\nconst LoginPage = (props) => {\n  return (\n    <>\n      <LoginForm/>\n      <br/>\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </>\n  )\n}\n\nexport default LoginPage\n")),(0,o.kt)("p",null,"Signup page is very similar to the login one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ext/SignupPage.js"',title:'"ext/SignupPage.js"'},"import React from 'react'\nimport { Link } from 'react-router-dom'\n\nimport SignupForm from '@wasp/auth/forms/Signup'\n\nconst SignupPage = (props) => {\n  return (\n    <>\n      <SignupForm/>\n      <br/>\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </>\n  )\n}\n\nexport default SignupPage\n")),(0,o.kt)("h2",{id:"updating-main-page-to-check-if-user-is-authenticated"},"Updating Main page to check if user is authenticated"),(0,o.kt)("p",null,"Now, let's see how are we going to handle the situation when user is not logged in. ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," page is a private\npage and we want users to be able to see it only if they are authenticated.\nThere is a specific Wasp feature that allows us to achieve this in a simple way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'{3} title="main.wasp"',"{3}":!0,title:'"main.wasp"'},'// ...\npage Main {\n  authRequired: true,\n  component: import Main from "@ext/MainPage.js"\n}\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"authRequired: true")," we declared that page ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," is accessible only to the authenticated users.\nIf an unauthenticated user tries to access route ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," where our page ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," is, they will be redirected to ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," as specified with ",(0,o.kt)("inlineCode",{parentName:"p"},"onAuthFailedRedirectTo")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),"."),(0,o.kt)("p",null,"Also, when ",(0,o.kt)("inlineCode",{parentName:"p"},"authRequired")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the React component of a page (specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," property within ",(0,o.kt)("inlineCode",{parentName:"p"},"page"),") will be provided ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," object as a prop. It can be accessed like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1} title="ext/MainPage.js"',"{1}":!0,title:'"ext/MainPage.js"'},"const MainPage = ({ user }) => {\n    // do something with user\n}\n")),(0,o.kt)("p",null,"Ok, time to try out how this works!"),(0,o.kt)("p",null,"Now, we can again run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp start\n")),(0,o.kt)("p",null,"Try going to ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," in our web app -> it will now ask you to log in, and if you follow the link, you will end up at ",(0,o.kt)("inlineCode",{parentName:"p"},"/login"),".\nOnce you log in or sign up, you will be sent back to ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," and you will see the todo list."),(0,o.kt)("p",null,"Let's now see how things look in the database! Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp db studio\n")),(0,o.kt)("img",{alt:"Database demonstration - password hashing",src:(0,r.Z)("img/wasp_db_hash_demonstration.gif"),style:{border:"1px solid black"}}),(0,o.kt)("p",null,"We see there is a user and that its password is already hashed! Wasp took care of this for us."),(0,o.kt)("p",null,"However, you will notice, if you try logging in with different users and creating tasks, that all users are still sharing tasks.\nThat is because we did not yet update queries and actions to work only on current user's tasks, so let's do that next!"),(0,o.kt)("h2",{id:"defining-user-task-relation-in-entities"},"Defining User-Task relation in entities"),(0,o.kt)("p",null,"First, let's define User-Task (one-to-many) relation (check ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations"},"prisma docs on relations"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'{6,13-14} title="main.wasp"',"{6,13-14}":!0,title:'"main.wasp"'},"// ...\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\n    tasks       Task[]\npsl=}\n// ...\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\n    user        User?    @relation(fields: [userId], references: [id])\n    userId      Int?\npsl=}\n// ...\n")),(0,o.kt)("p",null,"We modified entities by adding User-Task relation, so let's run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp db migrate-dev\n")),(0,o.kt)("p",null,"to create a database schema migration and apply it to the database."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We made ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," optional (via ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),") because that allows us to keep the existing tasks, which don't have a user assigned, in the database.\nThis is not recommended because it allows unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional.\nInstead, we would do a data migration to take care of those tasks, even if it means just deleting them all.\nHowever, for this tutorial, for the sake of simplicity, we will stick with this."))),(0,o.kt)("h2",{id:"updating-operations-to-forbid-access-to-non-authenticated-users"},"Updating operations to forbid access to non-authenticated users"),(0,o.kt)("p",null,"Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on currently logged in user's tasks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,4,6} title="ext/queries.js"',"{1,4,6}":!0,title:'"ext/queries.js"'},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const getTasks = async (args, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.findMany(\n    { where: { user: { id: context.user.id } } }\n  )\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,4,8,14,15,16} title="ext/actions.js"',"{1,4,8,14,15,16}":!0,title:'"ext/actions.js"'},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const createTask = async ({ description }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.create({\n    data: {\n      description,\n      user: { connect: { id: context.user.id } }\n    }\n  })\n}\n\nexport const updateTask = async ({ taskId, data }, context) => {\n  if (!context.user) { throw new HttpError(403) }\n  return context.entities.Task.updateMany({\n    where: { id: taskId, user: { id: context.user.id } },\n    data: { isDone: data.isDone }\n  })\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to how Prisma works, we had to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"updateTask")," action to be able to specify user id in ",(0,o.kt)("inlineCode",{parentName:"p"},"where"),"."))),(0,o.kt)("p",null,"Right, that should be it!"),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp start\n")),(0,o.kt)("p",null,"and everything should work as expected now! Each user has their own tasks only they can see and edit."),(0,o.kt)("p",null,"Try playing around with our app, adding a few users and some tasks. Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp db studio\n")),(0,o.kt)("img",{alt:"Database demonstration",src:(0,r.Z)("img/wasp_db_demonstration.gif"),style:{border:"1px solid black"}}),(0,o.kt)("p",null,"You will see that each user has its own tasks, just as we specified in our code!"),(0,o.kt)("h2",{id:"logout-button"},"Logout button"),(0,o.kt)("p",null,"Last, but not the least, let's add logout functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,10} title="MainPage.js"',"{2,10}":!0,title:'"MainPage.js"'},"// ...\nimport logout from '@wasp/auth/logout.js'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}> Logout </button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"This is it, we have working authentication system and our app is multi-user!"))}m.isMDXComponent=!0}}]);