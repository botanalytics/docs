"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36451:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294);const r="https://god.gw.postman.com/run-collection/23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226%26entityType%3Dcollection%26workspaceId%3Db14a14fd-1a0b-4fb3-8730-02214bec0158";function o(){return a.createElement("a",{href:r,target:"_blank",rel:"noreferrer","aria-label":"Run in Postman"},a.createElement("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman",width:128,height:32}))}},23303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=t(87462),r=(t(67294),t(3905)),o=t(36451);const i={sidebar_position:1,sidebar_label:"Send Api"},s="Facebook Messenger Send Api",p={unversionedId:"integration/rest-api/Facebook Messenger/Send Api/Send-Api",id:"integration/rest-api/Facebook Messenger/Send Api/Send-Api",title:"Facebook Messenger Send Api",description:"Please refer to send api objects in Facebook Messenger's documentation.",source:"@site/docs/integration/rest-api/Facebook Messenger/Send Api/Send-Api.mdx",sourceDirName:"integration/rest-api/Facebook Messenger/Send Api",slug:"/integration/rest-api/Facebook Messenger/Send Api/Send-Api",permalink:"/docs/integration/rest-api/Facebook Messenger/Send Api/Send-Api",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/rest-api/Facebook Messenger/Send Api/Send-Api.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Send Api"},sidebar:"tutorialSidebar",previous:{title:"Webhook",permalink:"/docs/integration/rest-api/Facebook Messenger/Webhook/"},next:{title:"Activities",permalink:"/docs/integration/rest-api/Microsoft Bot Framework/Activities/"}},l={},c=[{value:"Example of single message payload in JSON format",id:"example-of-single-message-payload-in-json-format",level:3},{value:"Example of multiple messages payload in JSON format",id:"example-of-multiple-messages-payload-in-json-format",level:3}],m={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"facebook-messenger-send-api"},"Facebook Messenger Send Api"),(0,r.kt)(o.Z,{mdxType:"RunInPostmanButton"}),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developers.facebook.com/docs/messenger-platform/reference/send-api/"},"send api objects"))," in Facebook Messenger's documentation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --include \\\n--request POST \\\n--header "Authorization: Token BOTANALYTICS_CHANNEL_TOKEN" \\\n--header "Content-Type: application/json"\n--data "{\n   \'messages\': [\n      {\n         \'message\': {\n           \n         }\n      }\n   ]\n}" \\\nhttps://api.beta.botanalytics.co/v2/messages\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Field Descriptions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"messages")," (array): An array containing messages.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," (object): Represents an individual message.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"message object")," within ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," array above has the Facebook Messenger's native send api format.")),(0,r.kt)("h3",{id:"example-of-single-message-payload-in-json-format"},"Example of single message payload in JSON format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n         "messaging_type": "RESPONSE",\n         "message": {\n            "text": "Simple text message"\n         },\n         "recipient": {\n            "id": "1968991829825082"\n         }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"example-of-multiple-messages-payload-in-json-format"},"Example of multiple messages payload in JSON format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n        "messaging_type": "RESPONSE",\n         "message": {\n            "text": "Simple text message"\n         },\n         "recipient": {\n            "id": "1968991829825082"\n         }\n      }\n    },\n    {\n      "message": {\n        "messaging_type": "RESPONSE",\n        "message": {\n           "text": "Simple text message",\n           "quick_replies": [\n               {\n                  "content_type": "text",\n                  "title": "Red",\n                  "payload": "<POSTBACK_PAYLOAD>",\n                  "image_url": "http://example.com/img/red.png"\n               },\n               {\n                  "content_type": "text",\n                  "title": "Green",\n                  "payload": "<POSTBACK_PAYLOAD>",\n                  "image_url": "http://example.com/img/green.png"\n               }\n           ]\n         },\n         "recipient": {\n             "id": "1968991829825082"\n         }\n      }\n    }\n  ]\n}\n')))}g.isMDXComponent=!0}}]);