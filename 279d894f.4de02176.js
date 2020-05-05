(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var o=r(1),n=r(9),a=(r(0),r(174)),i={id:"the-review-process",title:"The Review Process",sidebar_label:"The Review Process"},s={id:"room-creation/the-review-process",title:"The Review Process",description:"## Private Rooms",source:"@site/docs/room-creation/the-review-process.md",permalink:"/docs/room-creation/the-review-process",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/room-creation/the-review-process.md",lastUpdatedBy:"Ben (CMNatic)",lastUpdatedAt:1588683063,sidebar_label:"The Review Process",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/room-creation/room-creation-getting-started"},next:{title:"Student Discount",permalink:"/docs/sales-billing/sales-billing-student"}},c=[{value:"Private Rooms",id:"private-rooms",children:[]},{value:"Public Rooms",id:"public-rooms",children:[{value:"My Room has been Rejected?",id:"my-room-has-been-rejected",children:[]}]}],l={rightToc:c};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"private-rooms"},"Private Rooms"),Object(a.b)("p",null,'Rooms that are not marked as "Publicly Accessible" are considered private and are not reviewed by room testers, making them perfect to share with your friends or students.'),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/dq4l7rK.png",alt:"publicy-accessible-false"}))),Object(a.b)("p",null,'TryHackMe uses "room codes" to identify the various rooms throughout the platform. You can share your "room code" with your friends or students. This code is located in the Design Tab when managing your room, found in the screenshot below.'),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/5b35XgI.png",alt:"thm-room-code"}))),Object(a.b)("p",null,"In this case, the room code is ",Object(a.b)("strong",{parentName:"p"},"phantom"),". Yours will be different and you can change it as you like (assuming it is not already in use and is appropriate for the platform.)"),Object(a.b)("p",null,"Other users can join this room by appending ",Object(a.b)("inlineCode",{parentName:"p"},"/jr/")," and the ",Object(a.b)("strong",{parentName:"p"},"room code")," to ",Object(a.b)("inlineCode",{parentName:"p"},"tryhackme.com"),". Continuing with the example above, a user will have to visit the following URL to join the room:\n",Object(a.b)("inlineCode",{parentName:"p"},"https://tryhackme.com/jr/phantom")),Object(a.b)("p",null,'Once the user joins the room, they can interact with it like normal and it will appear on their "My Rooms" page on the platform.'),Object(a.b)("p",null,"Even with private rooms, if the room creator bans them, they are not able to join again."),Object(a.b)("h2",{id:"public-rooms"},"Public Rooms"),Object(a.b)("p",null,"These rooms are of the majority on the TryHackMe platform. Public rooms go through a review process where volunteer members will attempt to solve the room themselves, critiquing the content against the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.tryhackme.com/docs/room-creation/room-creation-getting-started"}),Object(a.b)("strong",{parentName:"a"},"Room Creation Notes")),", amongst other criteria such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Grammar"),Object(a.b)("li",{parentName:"ul"},'"Task" and "Question" suitability, formatting and use of hints where appropriate.'),Object(a.b)("li",{parentName:"ul"},'Whether or not the room is needed at the time it is submitted. For example, we have a lot of "Challenge" type rooms on Cryptography. We\'re much more inclined to accept a room that teaches a topic about Cryptography or a tool rather than another cypher "Challenge" style room.')),Object(a.b)("p",null,"You can submit your room to the queue by pressing ",Object(a.b)("strong",{parentName:"p"},"True"),' on "Publicly Accessible" but please do not do this until you are sure the room is in a state for public use.'),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/lHDGYdz.png",alt:"publicy-accessible-true"}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},'If you are submitting a "Challenge" room, please ensure you have submitted an official writeup.')," Room testers will use this as a reference point."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/S0N7wis.png",alt:"official-writeup"}))),Object(a.b)("p",null,"Room testing is often a time-consuming process, ensuring that content released is appropriate, engaging, reliable and all-around works. There is a finite amount of testers and often a numerous amount of rooms being tested at the same time. Because of this, patience is appreciated. We aim to get your room evaluated within a reasonable amount of time with valuable comments justifying the decision on whether or not the room has been approved."),Object(a.b)("p",null,'Once the room has been approved, it will be released according to the Admins release schedule for TryHackMe. Whilst this timetable isn\'t definitive, it should provide a good idea:\n"Walkthrough" rooms every Tuesday\n"Challenge" rooms every Friday'),Object(a.b)("p",null,"Again, there can be multiple rooms in the queue, so even after your room being approved, there can still be a bit of a wait for it be finally published."),Object(a.b)("h3",{id:"my-room-has-been-rejected"},"My Room has been Rejected?"),Object(a.b)("p",null,"The room tester will have left comments in the room if it has been rejected. The room will have been rejected for the reasons listed above, however, most commonly due to small oversights such as grammar or issues with Tasks/Questions/Hints."),Object(a.b)("p",null,"Review the comments left and apply the various fixes. Please resubmit when you are comfortable with it. If the issues are minor such as a few grammar mistakes or having to re-word a few tasks, your room would most likely be reviewed again pretty quickly often by the same reviewer."),Object(a.b)("p",null,'However, rooms that must be re-submitted with "bigger" issues such as problems with the VM or contents will be re-visited at a time depending on the size of the submission queue.'),Object(a.b)("p",null,"Most of the room testers are in the TryHackMe Discord so any queries regarding your submission are best placed there!"))}m.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(r),b=o,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return r?n.a.createElement(h,s({ref:t},l,{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);