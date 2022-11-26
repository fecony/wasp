"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92908:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(39960);r(44996);const o=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),l=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(a.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(o,null),n.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(o,null),n.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},66724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));r(92908);const o={title:"Building an app to find an excuse for our sloppy work",authors:["maksym36ua"],tags:["wasp"]},l=void 0,i={permalink:"/blog/2022/09/05/dev-excuses-app-tutrial",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-09-05-dev-excuses-app-tutrial.md",source:"@site/blog/2022-09-05-dev-excuses-app-tutrial.md",title:"Building an app to find an excuse for our sloppy work",description:"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:7.445,hasTruncateMarker:!0,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],frontMatter:{title:"Building an app to find an excuse for our sloppy work",authors:["maksym36ua"],tags:["wasp"]},prevItem:{title:"How Wasp reached 1,000 stars on GitHub (detailed stats & timeline)",permalink:"/blog/2022/09/29/journey-to-1000-gh-stars"},nextItem:{title:"How to get started with Haskell in 2022 (the straightforward way)",permalink:"/blog/2022/09/02/how-to-get-started-with-haskell-in-2022"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Best excuse of all time",src:r(41209).Z,width:"413",height:"360"})),(0,a.kt)("p",null,"Best excuse of all time! ",(0,a.kt)("a",{parentName:"p",href:"https://xkcd.com/303/"},"Taken from here.")))}u.isMDXComponent=!0},41209:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/compiling-f5efe2c14d949890ce85c23d36e10bd2.png"}}]);