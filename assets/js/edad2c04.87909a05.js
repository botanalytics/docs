"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4070],{36853:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(85893),a=n(3905);function s(e){const t={admonition:"admonition",p:"p",...(0,a.ah)(),...e.components};return(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Please check available channels before adding a universal channel, If the channel you're about to add is available please use native channel and integration."})})}function i(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},54642:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(85893),a=n(3905);function s(e){const t={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,a.ah)(),...e.components};return(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsx)(t.p,{children:"This section is designed for  the the latest version of Botanalytics, which is currently on private beta."}),(0,r.jsxs)(t.p,{children:["If you would like to join the beta and use the latest version of Botanalytics, ",(0,r.jsx)(t.a,{href:"https://beta.botanalytics.co/",children:"follow the instructions"}),"."]})]})}function i(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},86867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(3905),s=n(54642);n(36853),n(74866),n(85162);const i={},l="Amazon Alexa",o={id:"integration/sdks/node/amazon-alexa",title:"Amazon Alexa",description:"This section describes how to integrate a Amazon Alexa channel with Botanalytics.",source:"@site/docs/integration/sdks/node/amazon-alexa.mdx",sourceDirName:"integration/sdks/node",slug:"/integration/sdks/node/amazon-alexa",permalink:"/docs/integration/sdks/node/amazon-alexa",draft:!1,unlisted:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/sdks/node/amazon-alexa.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/integration/sdks/node/getting-started"},next:{title:"Facebook Messenger",permalink:"/docs/integration/sdks/node/facebook-messenger"}},c={},d=[{value:"Integration",id:"integration",level:2},{value:"Include Botanalytics",id:"include-botanalytics",level:3},{value:"Create the client",id:"create-the-client",level:3},{value:"Configuration options",id:"configuration-options",level:3},{value:"Additional environment variables/options",id:"additional-environment-variablesoptions",level:3},{value:"Log request messages with Botanalytics client",id:"log-request-messages-with-botanalytics-client",level:3},{value:"Log response messages with Botanalytics client",id:"log-response-messages-with-botanalytics-client",level:3},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"amazon-alexa",children:"Amazon Alexa"}),"\n",(0,r.jsx)(t.p,{children:"This section describes how to integrate a Amazon Alexa channel with Botanalytics."}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsx)(t.p,{children:"Integrating Botanalytics into your Amazon Alexa voice assistant is quick and easy."}),"\n",(0,r.jsx)(t.h3,{id:"include-botanalytics",children:"Include Botanalytics"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const { AmazonAlexaClient } = require('@botanalytics/core');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-the-client",children:"Create the client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const botanalyticsClient = new AmazonAlexaClient();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"configuration-options",children:"Configuration options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Environment Variable"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"apiKey"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Has no default"})}),(0,r.jsx)(t.td,{children:"API key that is provided when a Universal channel is added to a project."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_API_KEY"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"debug"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsxs)(t.td,{children:["Enables logging. Set this to ",(0,r.jsx)(t.code,{children:"true"})," to enable."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_DEBUG"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"baseUrl"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"https://api.beta.botanalytics.co/v2"})}),(0,r.jsx)(t.td,{children:"Base URL to be used for sending requests. Do not change this unless instructed by the Botanalytics team."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_BASE_URL"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"additional-environment-variablesoptions",children:"Additional environment variables/options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Environment Variable"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Could only be set via environment variable."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"INFO"})}),(0,r.jsxs)(t.td,{children:["Log level for the logger. Could be set one of following options ",(0,r.jsx)(t.code,{children:"'fatal'"}),", ",(0,r.jsx)(t.code,{children:"'error'"}),", ",(0,r.jsx)(t.code,{children:"'warn'"}),", ",(0,r.jsx)(t.code,{children:"'info"}),"', ",(0,r.jsx)(t.code,{children:"'debug'"}),", ",(0,r.jsx)(t.code,{children:"'trace'"})," or ",(0,r.jsx)(t.code,{children:"'silent'"}),"."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_LOG_LEVEL"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"requestRetryLimit"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"10"})}),(0,r.jsx)(t.td,{children:"Request retry limit for the client"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_REQUEST_RETRY_LIMIT"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"requestTimeout"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"30000"})}),(0,r.jsx)(t.td,{children:"Request timeout for the client"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"BA_REQUEST_TIMEOUT"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"log-request-messages-with-botanalytics-client",children:"Log request messages with Botanalytics client"}),"\n",(0,r.jsxs)(t.p,{children:["Add Botanalytics client's request interceptor by passing ",(0,r.jsx)(t.code,{children:"botanalyticsClient.requestInterceptor()"})," to ",(0,r.jsx)(t.code,{children:"addRequestInterceptors"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"let handler = Alexa.SkillBuilders.custom()\n    ...\n    .addRequestInterceptors(\n      botanalyticsClient.requestInterceptor()\n    )\n    ...\n    .create();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"log-response-messages-with-botanalytics-client",children:"Log response messages with Botanalytics client"}),"\n",(0,r.jsxs)(t.p,{children:["Add Botanalytics client's response interceptor by passing ",(0,r.jsx)(t.code,{children:"botanalyticsClient.responseInterceptor(false)"})," to ",(0,r.jsx)(t.code,{children:"addResponseInterceptors"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"let handler = Alexa.SkillBuilders.custom()\n    ...   \n    .addResponseInterceptors(\n      botanalyticsClient.responseInterceptor(false)\n    )\n    ...\n    .create();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/botanalytics/node-sdk-examples/tree/master/amazon-alexa/celebrity-older-or-younger#amazon-alexa",children:"examples for Amazon Alexa"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),x=a,p=h["".concat(o,".").concat(x)]||h[x]||d[x]||s;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(86010),s=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:n,groupId:a}),[j,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=c??j;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}}}]);