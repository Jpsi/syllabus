(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(277)),s={id:"processing-migrating",title:"Migrating from Processing.js to p5.js",sidebar_label:"Migrating from Processing.js to p5.js"},i={id:"fundamentals/after-the-course/processing-migrating",title:"Migrating from Processing.js to p5.js",description:"\\(Rough\\) workshop outline - migrating to p5.js and openprocessing.org",source:"@site/docs/fundamentals/after-the-course/p5js-and-openprocessing-workshop.md",permalink:"/Syllabus-V2/fundamentals/after-the-course/processing-migrating",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/fundamentals/after-the-course/p5js-and-openprocessing-workshop.md",sidebar_label:"Migrating from Processing.js to p5.js",sidebar:"Fundamentals",previous:{title:"Instructor Notes",permalink:"/Syllabus-V2/fundamentals/lesson-4/instructor-notes"},next:{title:"Khan Academy challenges with objects and arrays",permalink:"/Syllabus-V2/fundamentals/other-resources/challenges"}},c=[{value:"(Rough) workshop outline - migrating to p5.js and openprocessing.org",id:"rough-workshop-outline---migrating-to-p5js-and-openprocessingorg",children:[{value:"audio analysis demos",id:"audio-analysis-demos",children:[]},{value:"web cam demos",id:"web-cam-demos",children:[]},{value:"Bookmark Daniel Shiffman",id:"bookmark-daniel-shiffman",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Migrate one of your khan academy projects",id:"migrate-one-of-your-khan-academy-projects",children:[]}]},{value:"Other starting points",id:"other-starting-points",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rough-workshop-outline---migrating-to-p5js-and-openprocessingorg"},"(","Rough",")"," workshop outline - migrating to p5.js and openprocessing.org"),Object(a.b)("p",null,"Bookmark ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"from-khan-academy-processingjs-to-p5js.md"}),"Neill's longer notes on migrating from khan academy's processing.js to p5.js"),". You can read them at home."),Object(a.b)("p",null,"Make an account on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://openprocessing.org"}),"openprocessing.org")),Object(a.b)("p",null,'Create a "sketch"'),Object(a.b)("p",null,"Run it, edit it"),Object(a.b)("p",null,"Change colours, sizes, etc, for a couple of minutes"),Object(a.b)("p",null,"rename it, save it"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/browse/#"}),"Browse the gallery")),Object(a.b)("p",null,"Find two sketches you like, show them to your classroom neighbour."),Object(a.b)("p",null,"Follow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/user/135249/"}),"neill")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/Syllabus-V2/fundamentals/after-the-course/processing-migrating"}),"ali")," ","(","TODO: ali what user number?",")"),Object(a.b)("p",null,"Join the class so we can share future work: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/class/61910"}),"https://www.openprocessing.org/class/61910")," ","(","Ask Neill or Ali for the access code.",")"),Object(a.b)("p",null,"Play with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812085"}),"this starting sketch")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"read the code - do you understand every line?"),Object(a.b)("li",{parentName:"ul"},"change something about it!"),Object(a.b)("li",{parentName:"ul"},'press fork/"create a fork" ',"(",'the equivalent of "spin-off"',")"," and save it."),Object(a.b)("li",{parentName:"ul"},"Change the title to reflect your work.")),Object(a.b)("h3",{id:"audio-analysis-demos"},"audio analysis demos"),Object(a.b)("p",null,"Play with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812282"}),"this sketch processing audio from your microphone")),Object(a.b)("p",null,"Play with and edit this ","(",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812284/"}),"simpler example of audio analysis"),")",". What could you animate from your khan academy projects, with the different energies of bass, mid, and treble? Size, speed, rotation, colour, words, position, direction..."),Object(a.b)("h3",{id:"web-cam-demos"},"web cam demos"),Object(a.b)("p",null,"Play with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812361"}),"this webcam-processing sketch")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.openprocessing.org/sketch/812359"}),"this one, too"),". The first has hardly any code."),Object(a.b)("p",null,"Play with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://codepen.io/enz0/pen/wvBzoMN"}),"this posenet p5.js sketch on codepen")," - stand far back from the camera for best results! It is complicated, you don't need to understand it."),Object(a.b)("h4",{id:"pose-recognition-from-webcam---demo"},"Pose-recognition from webcam - demo"),Object(a.b)("p",null,"(","This pose-recognition can't be done on openprocessing as it needs some other libraries ","(","ml5",")"," and openprocessing limits which libraries you can load.",")"),Object(a.b)("h3",{id:"bookmark-daniel-shiffman"},"Bookmark Daniel Shiffman"),Object(a.b)("p",null,'Subscribe to Daniel Shiffman\'s "coding train" channel!'),Object(a.b)("p",null,"Add the recommended course ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA"}),'"Code! Programming with p5.js"')," to your list of stuff to watch."),Object(a.b)("h3",{id:"documentation"},"Documentation"),Object(a.b)("p",null,"Find the documentation ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://p5js.org/reference/"}),"https://p5js.org/reference/")),Object(a.b)("p",null,"Check out some examples - each function has multiple examples of how it can be used."),Object(a.b)("h3",{id:"migrate-one-of-your-khan-academy-projects"},"Migrate one of your khan academy projects"),Object(a.b)("p",null,"Create a new sketch, and bring your favourite project across from khan academy."),Object(a.b)("p",null,"You will need to consider ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"from-khan-academy-processingjs-to-p5js.md#differences-between-khan-academy-processingjs-and-p5js"}),"these notes about migrating from khan academy processing.js to p5.js")),Object(a.b)("h2",{id:"other-starting-points"},"Other starting points"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you really want to use codepen, here's a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://codepen.io/enz0/pen/vYEXyZr?editors=1010"}),'p5.js starting "pen" in codepen')),Object(a.b)("li",{parentName:"ul"},"If you want to see the whole picture of html and javascript together, ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://glitch.com/~cyf-p5js-start"}),"here's a website project on glitch")," with html, css, and javascript files.")))}l.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||b[h]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);