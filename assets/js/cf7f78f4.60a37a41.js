"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36451:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const i="https://god.gw.postman.com/run-collection/23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226%26entityType%3Dcollection%26workspaceId%3Db14a14fd-1a0b-4fb3-8730-02214bec0158";function r(){return a.createElement("a",{href:i,target:"_blank",rel:"noreferrer","aria-label":"Run in Postman"},a.createElement("img",{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman",width:128,height:32}))}},37724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(36451);const o={sidebar_position:1,sidebar_label:"Activities",hide_title:!0},s="Microsoft Bot Framework Activities",c={unversionedId:"integration/rest-api/Microsoft Bot Framework/Activities/Activities",id:"integration/rest-api/Microsoft Bot Framework/Activities/Activities",title:"Microsoft Bot Framework Activities",description:"Whenever your conversational agent logs an activity send it to our end as followed.",source:"@site/docs/integration/rest-api/Microsoft Bot Framework/Activities/Activities.mdx",sourceDirName:"integration/rest-api/Microsoft Bot Framework/Activities",slug:"/integration/rest-api/Microsoft Bot Framework/Activities/",permalink:"/docs/integration/rest-api/Microsoft Bot Framework/Activities/",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/rest-api/Microsoft Bot Framework/Activities/Activities.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Activities",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Send Api",permalink:"/docs/integration/rest-api/Facebook Messenger/Send Api/Send-Api"},next:{title:"Events",permalink:"/docs/integration/rest-api/Rasa/Events/"}},l={},p=[{value:"Example of single message payload in JSON format",id:"example-of-single-message-payload-in-json-format",level:3},{value:"Example of multiple messages payload in JSON format",id:"example-of-multiple-messages-payload-in-json-format",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microsoft-bot-framework-activities"},"Microsoft Bot Framework Activities"),(0,i.kt)(r.Z,{mdxType:"RunInPostmanButton"}),(0,i.kt)("p",null,"Whenever your conversational agent logs an activity send it to our end as followed."),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Microsoft/botframework-sdk/blob/main/specs/botframework-activity/botframework-activity.md"},"activity objects"))," in Microsoft Bot Framework's documentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --include \\\n--request POST \\\n--header \"Authorization: Token BOTANALYTICS_CHANNEL_TOKEN\" \\\n--header \"Content-Type: application/json\"\n--data \"{\n   'messages': [\n      {\n         'message': {\n            'activity':,\n            'timestamp': \n         }\n      }\n   ]\n}\" \\\nhttps://api.beta.botanalytics.co/v2/messages\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Field Descriptions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages")," (array): An array containing messages.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," (object): Represents an individual message.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activity")," (object): The activity object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," (number): The timestamp (in milliseconds) of the activity.")))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"message object")," within ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," array above has the Microsoft Bot Framework's native activity format plus ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," field which is required for each message object.")),(0,i.kt)("h3",{id:"example-of-single-message-payload-in-json-format"},"Example of single message payload in JSON format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n          "activity": {\n              "text": "You are seeing this message because the bot received at least one \'ConversationUpdate\' event, indicating you (and possibly others) joined the conversation. If you are using the emulator, pressing the \'Start Over\' button to trigger this event again. The specifics of the \'ConversationUpdate\' event depends on the channel. You can read more information at https://aka.ms/about-botframework-welcome-user",\n              "inputHint": "acceptingInput",\n              "channelId": "emulator",\n              "locale": "en-US",\n              "serviceUrl": "http://localhost:54362",\n              "conversation": {\n                  "id": "a50192d0-6715-11eb-9b27-dbbae1c236b1|livechat"\n              },\n              "from": {\n                  "id": "77b98540-6700-11eb-9b27-dbbae1c236b1",\n                  "name": "Bot",\n                  "role": "bot"\n              },\n              "recipient": {\n                  "id": "u1",\n                  "name": "User",\n                  "role": "user"\n              },\n              "replyToId": "a50fc3a0-6715-11eb-8d52-47a269e439e1",\n              "type": "message"\n          },\n          "timestamp": 1458692752478\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"example-of-multiple-messages-payload-in-json-format"},"Example of multiple messages payload in JSON format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "message": {\n          "activity": {\n              "text": "You are seeing this message because the bot received at least one \'ConversationUpdate\' event, indicating you (and possibly others) joined the conversation. If you are using the emulator, pressing the \'Start Over\' button to trigger this event again. The specifics of the \'ConversationUpdate\' event depends on the channel. You can read more information at https://aka.ms/about-botframework-welcome-user",\n              "inputHint": "acceptingInput",\n              "channelId": "emulator",\n              "locale": "en-US",\n              "serviceUrl": "http://localhost:54362",\n              "conversation": {\n                  "id": "a50192d0-6715-11eb-9b27-dbbae1c236b1|livechat"\n              },\n              "from": {\n                  "id": "77b98540-6700-11eb-9b27-dbbae1c236b1",\n                  "name": "Bot",\n                  "role": "bot"\n              },\n              "recipient": {\n                  "id": "u1",\n                  "name": "User",\n                  "role": "user"\n              },\n              "replyToId": "a50fc3a0-6715-11eb-8d52-47a269e439e1",\n              "type": "message"\n          },\n          "timestamp": 1458692752478\n      }\n    },\n    {\n      "message": {\n           "activity": {\n                "channelData": {\n                    "postBack": true,\n                    "clientActivityID": "1612558418279eeu9ir5hl8",\n                    "clientTimestamp": "2021-02-05T20:53:38.280Z"\n                },\n                "text": "Blue",\n                "type": "message",\n                "channelId": "emulator",\n                "from": {\n                    "id": "u1",\n                    "name": "User",\n                    "role": "user"\n                },\n                "locale": "en-US",\n                "timestamp": "2021-02-05T20:53:38.325Z",\n                "entities": [\n                    {\n                        "requiresBotState": true,\n                        "supportsListening": true,\n                        "supportsTts": true,\n                        "type": "ClientCapabilities"\n                    }\n                ],\n                "conversation": {\n                    "id": "190fd040-67f4-11eb-82d7-cb7f44f65e5e|livechat"\n                },\n                "id": "388b0c50-67f4-11eb-82d7-cb7f44f65e5e",\n                "localTimestamp": "2021-02-05T20:53:38.000Z",\n                "recipient": {\n                    "id": "1909b5c0-67f4-11eb-ad43-cb132b189f8d",\n                    "name": "Bot",\n                    "role": "bot"\n                },\n                "serviceUrl": "http://localhost:60631",\n                "rawTimestamp": "2021-02-05T20:53:38.325Z",\n                "rawLocalTimestamp": "2021-02-05T23:53:38+03:00"\n          },\n          "timestamp": 1458692752500\n      }\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);