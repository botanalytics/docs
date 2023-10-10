"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o="Events",i={unversionedId:"get-started/what-are/events/events",id:"get-started/what-are/events/events",title:"Events",description:"Events can be associated with or contained within a user/virtual-agent/human-agent's message. This means that when a user/virtual-agent/human-agent sends a message to the chat thread, that message can include special event indicators or triggers.",source:"@site/docs/get-started/what-are/events/events.md",sourceDirName:"get-started/what-are/events",slug:"/get-started/what-are/events/",permalink:"/docs/get-started/what-are/events/",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/get-started/what-are/events/events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intents",permalink:"/docs/get-started/what-are/intents/"},next:{title:"Funnels",permalink:"/docs/get-started/what-are/funnels/"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h1",{id:"what-are-events"},"What are events?"),(0,a.kt)("p",null,"Events can be associated with or contained within a user/virtual-agent/human-agent's message. This means that when a user/virtual-agent/human-agent sends a message to the chat thread, that message can include special event indicators or triggers. "),(0,a.kt)("p",null,'Events can be composite events that are constructed from a combination of different elements, including other events, intents, and possibly system-generated built-in events like (e.g., "message delivered" or "message read"). These composite events are used to define more complex triggers or conditions for the chatbot. '),(0,a.kt)("p",null,"Events can provide information about the conversation's progress and status. These events are used to define the chatbot's behavior and make interactions more dynamic and context-aware."))}p.isMDXComponent=!0}}]);