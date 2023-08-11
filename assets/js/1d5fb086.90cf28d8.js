"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=s,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"Outputs"},i=void 0,o={unversionedId:"integration/rest-api/Messages/Samsung Bixby/Outputs/outputs",id:"integration/rest-api/Messages/Samsung Bixby/Outputs/outputs",title:"outputs",description:"Output message with userId",source:"@site/docs/integration/rest-api/Messages/Samsung Bixby/Outputs/outputs.md",sourceDirName:"integration/rest-api/Messages/Samsung Bixby/Outputs",slug:"/integration/rest-api/Messages/Samsung Bixby/Outputs/",permalink:"/docs/integration/rest-api/Messages/Samsung Bixby/Outputs/",editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/rest-api/Messages/Samsung Bixby/Outputs/outputs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Outputs"},sidebar:"tutorialSidebar",previous:{title:"Inputs",permalink:"/docs/integration/rest-api/Messages/Samsung Bixby/Inputs/"},next:{title:"Introduction",permalink:"/docs/metrics/intro"}},l={},u=[{value:"Output message with userId",id:"output-message-with-userid",level:2},{value:"Output message with bixbyUserId",id:"output-message-with-bixbyuserid",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"output-message-with-userid"},"Output message with userId"),(0,s.kt)("p",null,"The output message type represents a message sent by the virtual agent in a text format. It can contain plain text or various formatting options."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Here's an example of a output message JSON:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n        "timestamp": "",\n        "output": "Output",\n        "action": "mail-action",\n        "$vivContext": {\n            "canTypeId": "bixby-mobile-en-US",\n            "device": "bixby-mobile",\n            "userId": "u1",\n            "locale": "en-US",\n            "timezone": "America/Los_Angeles",\n            "testToday": null,\n            "accessToken": null,\n            "svcId": null,\n            "rampcode": null,\n            "conversationId": null,\n            "requestId": null,\n            "sessionId": "0a8ff565bfbace92f7739f521824d15816f056588af43205415984598d0aebfd",\n            "handsFree": false,\n            "storeCountry": "",\n            "deviceModel": "",\n            "productCode": null,\n            "screenLocked": false,\n            "utterance": null,\n            "clientAppId": null,\n            "clientAppVersion": null,\n            "drivingMode": false,\n            "grantedPermissions": {},\n            "is24HourFormat": false,\n            "bixbyUserId": null,\n            "allowLockScreenExecution": false\n        }\n      }\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Please note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"message object")," within ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," array above has the Bixby's native input format plus ",(0,s.kt)("inlineCode",{parentName:"p"},"timestamp")," field which is required for each message object."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Field Descriptions")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"messages")," (array): An array containing the user messages.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," (object): Represents an individual user message.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")," (number): The timestamp when the message was sent.")))))),(0,s.kt)("h2",{id:"output-message-with-bixbyuserid"},"Output message with bixbyUserId"),(0,s.kt)("p",null,"The output message type represents a message sent by the virtual agent in a text format. It can contain plain text or various formatting options."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Here's an example of a output message JSON:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n        "timestamp": "",\n        "output": "Output",\n        "action": "mail-action",\n        "$vivContext": {\n            "canTypeId": "bixby-mobile-en-US",\n            "device": "bixby-mobile",\n            "bixbyUserId": "u1",\n            "locale": "en-US",\n            "timezone": "America/Los_Angeles",\n            "testToday": null,\n            "accessToken": null,\n            "svcId": null,\n            "rampcode": null,\n            "conversationId": null,\n            "requestId": null,\n            "sessionId": "0a8ff565bfbace92f7739f521824d15816f056588af43205415984598d0aebfd",\n            "handsFree": false,\n            "storeCountry": "",\n            "deviceModel": "",\n            "productCode": null,\n            "screenLocked": false,\n            "utterance": null,\n            "clientAppId": null,\n            "clientAppVersion": null,\n            "drivingMode": false,\n            "grantedPermissions": {},\n            "is24HourFormat": false,\n            "allowLockScreenExecution": false\n        }\n      }\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Please note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"message object")," within ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," array above has the Bixby's native input format plus ",(0,s.kt)("inlineCode",{parentName:"p"},"timestamp")," field which is required for each message object."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Field Descriptions")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"messages")," (array): An array containing the user messages.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," (object): Represents an individual user message.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")," (number): The timestamp when the message was sent.")))))))}m.isMDXComponent=!0}}]);