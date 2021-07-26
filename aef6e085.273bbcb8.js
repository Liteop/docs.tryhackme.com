(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(99)),c={id:"accessing-deployed-vms",title:"Accessing Deployed VMs",sidebar_label:"Accessing Deployed VMs"},i={unversionedId:"rooms/accessing-deployed-vms",id:"rooms/accessing-deployed-vms",isDocsHomePage:!1,title:"Accessing Deployed VMs",description:"You have the ability to deploy virtual machines attached to particular rooms and tasks. These machines can only be accessed using a VPN connection. In this case, users need to download an OpenVPN configuration file from here. Once a user deploys a machine they will be given a internal IP address which they will be able to communicate with using the OpenVPN connection.",source:"@site/docs/rooms/Accessing Deployed VMs.md",slug:"/rooms/accessing-deployed-vms",permalink:"/docs/rooms/accessing-deployed-vms",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/rooms/Accessing Deployed VMs.md",version:"current",lastUpdatedBy:"Kent55",lastUpdatedAt:1590800631,sidebar_label:"Accessing Deployed VMs",sidebar:"docs",previous:{title:"How Points Work",permalink:"/docs/rooms/how-points-work"},next:{title:"Room Difficulty Levels",permalink:"/docs/rooms/room-difficulty-levels"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You have the ability to deploy virtual machines attached to particular rooms and tasks. These machines can only be accessed using a VPN connection. In this case, users need to download an OpenVPN configuration file from here. Once a user deploys a machine they will be given a internal IP address which they will be able to communicate with using the OpenVPN connection."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Our OpenVPN configuration will only route users traffic if they're trying to access one of the machines on our network, all other traffic is routed through their own connection"),". "),Object(a.b)("p",null,"To reiterate, when a user is connected through our OpenVPN connection only traffic for 10.",Object(a.b)("em",{parentName:"p"},"."),".* networks are routed through the VPN."),Object(a.b)("p",null,"It's important to note that you can't just open the IP address in a browser. That would only work if there's a webserver running on port 80. Read the material carefully, you may be provided SSH creds for some walkthrough rooms. Most of the time, gaining access is part of the challenge."),Object(a.b)("p",null,"A very limited number of rooms have in browser remote accesss. These are the exceptions, not the rule. Do not expect this behaviour by default."))}u.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);