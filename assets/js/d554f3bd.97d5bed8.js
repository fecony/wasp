"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1458],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(44996);const i=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption"},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(39960);a(44996);const i=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),r=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},48393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));a(39960),a(44996),a(92908),a(70589),a(38610);const i={title:"How and why I got started with Haskell",authors:["shayneczyzewski"],image:"/img/filip-headshot-min.jpeg",tags:["webdev","haskell","language"]},r=void 0,s={permalink:"/blog/2022/08/26/how-and-why-i-got-started-with-haskell",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-08-26-how-and-why-i-got-started-with-haskell.md",source:"@site/blog/2022-08-26-how-and-why-i-got-started-with-haskell.md",title:"How and why I got started with Haskell",description:"I have been programming professionally for over a decade, using a variety of languages day-to-day including Ada, C, Java, Ruby, Elixir, and JavaScript. I\u2019ve also tried some obscure ones, albeit less frequently and for different purposes: MIPS assembly language and OCaml for academic work (I\u2019m a BS, MS, and PhD dropout in CS), and Zig for some side projects. In short, I like learning new languages (at least at a surface level) and have been exposed to different programming paradigms, including functional.",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"haskell",permalink:"/blog/tags/haskell"},{label:"language",permalink:"/blog/tags/language"}],readingTime:7.575,hasTruncateMarker:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],frontMatter:{title:"How and why I got started with Haskell",authors:["shayneczyzewski"],image:"/img/filip-headshot-min.jpeg",tags:["webdev","haskell","language"]},prevItem:{title:"How to get started with Haskell in 2022 (the straightforward way)",permalink:"/blog/2022/09/02/how-to-get-started-with-haskell-in-2022"},nextItem:{title:"How to communicate why your startup is worth joining",permalink:"/blog/2022/08/15/how-to-communicate-why-your-startup-is-worth-joining"}},l={authorsImageUrls:[void 0]},u=[{value:"Why learn Haskell?",id:"why-learn-haskell",level:2},{value:"Hello Haskell!",id:"hello-haskell",level:2},{value:"Setup and IDE support",id:"setup-and-ide-support",level:2},{value:"0-60 at work",id:"0-60-at-work",level:2},{value:"So, was the juice worth the squeeze?",id:"so-was-the-juice-worth-the-squeeze",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I have been programming professionally for over a decade, using a variety of languages day-to-day including Ada, C, Java, Ruby, Elixir, and JavaScript. I\u2019ve also tried some obscure ones, albeit less frequently and for different purposes: MIPS assembly language and OCaml for academic work (I\u2019m a BS, MS, and PhD dropout in CS), and Zig for some side projects. In short, I like learning new languages (at least at a surface level) and have been exposed to different programming paradigms, including functional."),(0,o.kt)("p",null,"Yet, I have never done Haskell. I\u2019ve wanted to learn it since my college days, but never got the time. In late 2021, though, my curiosity took over. I wanted to see for myself if the mystique and the Kool-Aid hype (or hate) around it are justified. :P So, I decided I\u2019d start learning it on the side and also look for a company that uses it as my next gig. That\u2019s how my Haskell journey started, and ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2021/12/21/shayne-intro"},"how I got into Wasp")," a few months later."),(0,o.kt)("h2",{id:"why-learn-haskell"},"Why learn Haskell?"),(0,o.kt)("p",null,"Haskell seems to have an aura of superiority around it. Many niche and heavily academically-inspired languages do. These languages seem to be used by the enlightened minds and allow you to quickly write complex programs in a fraction of the time with significantly less code. Lisp is amongst these languages, too. Yet, nobody uses them for anything real \u2014 only toy projects. (While stroking their long, grey beards under a tree, ruminating on the philosophy of computer science.) At least, that\u2019s the impression I got in college and at work. So, what makes Haskell interesting to learn, let alone want to use professionally?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First, it is functional as it gets.")," While I have used lambdas and functional concepts like ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," in non-functional languages, the fact that these were my ",(0,o.kt)("em",{parentName:"p"},"only")," choice was really interesting to me. After years of extensive OO usage, I\u2019ve come to appreciate this epigram by Alan Perlis. I think it captures a mindset shift between the two paradigms:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cIt is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.\u201d \u2014 Alan Perlis")),(0,o.kt)("p",null,"In OO, you create lots of classes with lots of methods. In functional, you have far fewer data structures (mostly list) with a lot more functions. So basically more functions to operate on fewer nouns, whereas OO is lots of nouns, each with many bespoke methods. (The first comment on ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6016271/why-is-it-better-to-have-100-functions-operate-on-one-data-structure-than-10-fun"},"this Stack Overflow thread")," explains it really well.)"),(0,o.kt)("p",null,"Besides, I liked the idea of referential transparency when writing pure functions. It means that you get the same result back every time you invoke a function, without fear of unknown side effects. (But the language does offer the flexibility to have side effects like IO, via Monads.) I also liked having only immutable data structures \u2014 they make reasoning about the system and data flow easier. There were many things like these two that I liked. The point is that thinking functionally really changes the way you structure and solve problems, so I was curious to give it a go."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Second, Haskell is lazy.")," While there are pros and cons to this, it feels undeniably different. Most languages are strict, in that all function arguments are evaluated before invoking a function. This is required because of side effects; to have some expectations regarding the order in which things will run. Haskell does the opposite: it delays evaluation until it\u2019s actually needed."),(0,o.kt)("p",null,"One contrived yet helpful example of laziness is infinite data structures. Below, we define ",(0,o.kt)("inlineCode",{parentName:"p"},"fibs")," as an infinite ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Integer")," values, by using references to ",(0,o.kt)("em",{parentName:"p"},"itself"),"! (You can find a runnable example ",(0,o.kt)("a",{parentName:"p",href:"https://replit.com/@ShayneCzyzewsk1/LazyHaskellExample?v=1#Main.hs"},"here"),".) "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-haskell"},"fibs :: [Integer]\nfibs = 0 : 1 : zipWith (+) fibs (tail fibs)\n\ntake 10 fibs -- [0,1,1,2,3,5,8,13,21,34]\n")),(0,o.kt)("p",null,"There\u2019s a downside to laziness, too. It makes it harder to reason about performance and resource utilization. But the idea that you can define things in a declarative way but know that they are evaluated only when needed is a pretty eye-opening way to program."),(0,o.kt)("p",null,"To sum up: Haskell is functional, lazy, and strongly statically typed. Just the trifecta that gets me out of bed in the morning! :D So, how did I go about learning it?"),(0,o.kt)("h2",{id:"hello-haskell"},"Hello Haskell!"),(0,o.kt)("p",null,"I started by reading the canonical Haskell newbie resource, \u201c",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://learnyouahaskell.com/"},"Learn You a Haskell for Great Good!"),","),"\u201d often abbreviated LYAH. It was very entertaining, and I learned a lot from it. At times, I wanted it to get to the point more quickly. Still, despite the amusing images and often lengthy examples, it provided me with a great conceptual foundation. I highly recommend it as your first read \u2014 it is a really well-written resource for beginners."),(0,o.kt)("p",null,"After I was about 80% done with LYAH, I switched to a more recent but still popular book: \u201c",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://haskellbook.com/"},"Haskell Programming from First Principles")),".\u201d I liked that it started with fundamentals and then moved to more complex topics, slowly but steadily developing my understanding. It was pretty long, though, and sometimes went too far into the weeds. It also had a tinge of intellectual flexing at certain points. Still, it was a good read. I\u2019d read it again if I were starting over."),(0,o.kt)("p",null,"I also tried ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/haskell-trainings"},"a Haskell course from Google"),". Despite being brief, it explains the key concepts in a relatively complete way. If videos are your thing, it might be a solid way to get up to speed."),(0,o.kt)("p",null,"In short, skimming an intro book to get your foundation solid would be the best bet. I\u2019d also recommend trying out many different online resources when covering more intermediate topics, like Monad Transformers, for example. And don\u2019t worry if it takes a while to start feeling comfortable with things that are pretty specific to Haskell! It just takes some time, and often it is more confusing to derive/deeply understand than to just start using them at first. The understanding will come over time. (Of course, sometimes ",(0,o.kt)("a",{parentName:"p",href:"https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"},"pictures")," help!)"),(0,o.kt)("h2",{id:"setup-and-ide-support"},"Setup and IDE support"),(0,o.kt)("p",null,"Getting Haskell up and running was surprisingly straightforward, even though I ran it on an M1 MacBook Air, which was considered a pretty new architecture in 2021. Since the entire toolchain was not fully ARM-compatible back then, some of the setup advice required a bit of modification. But that was no big deal: I used ",(0,o.kt)("inlineCode",{parentName:"p"},"ghcup"),", installed HLS in VS Code, and bam! \u2014 I had Haskell up and running. It was a pretty nice experience. "),(0,o.kt)("p",null,"Some minor downsides I recall:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There doesn\u2019t seem to be a consensus on which build and package management tool to use, Cabal or Stack. However, unless you\u2019re doing something super specific, it\u2019s not an irreversible decision. At Wasp, we started with Stack but then migrated to Cabal since it better fit our setup and workflows. It was pretty seamless."),(0,o.kt)("li",{parentName:"ul"},"One thing I do miss from other IDEs is breakpoint debugging. Technically, there\u2019s ",(0,o.kt)("em",{parentName:"li"},"some")," support for it in Haskell, but I don\u2019t think many use it. Breakpoints and lazy evaluation don\u2019t seem to be BFFs.")),(0,o.kt)("h2",{id:"0-60-at-work"},"0-60 at work"),(0,o.kt)("p",null,"For someone with experience in several different languages, it is pretty achievable to be able to solve minor bugs/features in Haskell after a few weeks of learning. At least, it was for me. I certainly struggled on best practices and such, and my code reviews involved some Haskell golfing comments for sure :) But I could make it do what I wanted it to do from the functionality perspective. Kudos to the mostly helpful compiler errors (with a bit of practice reading) and the Internet!"),(0,o.kt)("p",null,"Hopefully, your code base demonstrates established project and Haskell patterns, so you can learn as you poke around, and your early code reviewers are supportive coworkers who can explain things as part of their suggestions. I was quite fortunate in that regard: the Wasp team values teaching and learning, and the codebase uses what is called \u201cSimple Haskell\u201d, which limits the use of excessive language extensions in the hopes to keep the core language and concepts as tight as possible. (Note: there are Haskell experts who view this as a severe limitation of the capabilities of the language, but as a newbie, I was happy they did it.)"),(0,o.kt)("h2",{id:"so-was-the-juice-worth-the-squeeze"},"So, was the juice worth the squeeze?"),(0,o.kt)("p",null,"Learning Haskell took considerable time and effort. It was completely different from any language I had used before. Yet, I am very happy I embarked on this journey. Even if you do not intend to get a job using Haskell, I still think learning it is worthwhile just to expand your programming point of view and master functional concepts. And for a select set of project types (like writing a compiler for a full-stack web DSL), I feel it really will make you more productive over time. Give an intro to Haskell tutorial or video a try some weekend and let me know what you think! I\u2019m at shayne at wasp-lang dot dev dot com."))}c.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),o=(a(67294),a(3905));const i={toc:[]};function r(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}r.isMDXComponent=!0}}]);