"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8699:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section is designed for  the the latest version of Botanalytics, which is currently on private beta. "),(0,r.kt)("p",{parentName:"div"},"If you would like to join the beta and use the latest version of Botanalytics, ",(0,r.kt)("a",{parentName:"p",href:"https://beta.botanalytics.co/"},"follow the instructions"),"."))))}i.isMDXComponent=!0},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),o=n(2389),i=n(1548),s=n(6010);const l="tabItem_LplD";function c(e){var t,n;const{lazy:o,block:c,defaultValue:u,values:d,groupId:p,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.lx)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,i.UB)(),[k,N]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=p){const e=f[p];null!=e&&e!==k&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==k&&(x(t),N(a),null!=p&&y(p,a))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function u(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},7051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(8699),i=n(9877),s=n(8215);const l={sidebar_position:1},c="Getting Started",u={unversionedId:"integration/sdks/node/getting-started",id:"integration/sdks/node/getting-started",title:"Getting Started",description:"This section describes how to use the Botanalytics Node.js SDK for your project.",source:"@site/docs/integration/sdks/node/getting-started.mdx",sourceDirName:"integration/sdks/node",slug:"/integration/sdks/node/getting-started",permalink:"/docs/integration/sdks/node/getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integration/sdks/node/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Facebook Messenger",permalink:"/docs/integration/no-code/facebook-messenger"},next:{title:"Samsung Bixby",permalink:"/docs/integration/sdks/node/samsung-bixby"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing SDK module",id:"installing-sdk-module",level:2}],m={toc:p};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This section describes how to use the Botanalytics Node.js SDK for your project."),(0,r.kt)(o.ZP,{mdxType:"V3Warning"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For Samsung Bixy, you can skip this step and go directly to the ",(0,r.kt)("a",{parentName:"p",href:"samsung-bixby"},"Samsung Bixby page"),"."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An NPM project. For information on how to set up a NPM project, please see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/getting-started/creating-node-modules"},"this"),"."),(0,r.kt)("li",{parentName:"ul"},"A Node.js environment with Node version 6.x or above.")),(0,r.kt)("h2",{id:"installing-sdk-module"},"Installing SDK module"),(0,r.kt)("p",null,"Within your project, run the following command depending on the package manager you use:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @botanalytics/core\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @botanalytics/core\n")))))}v.isMDXComponent=!0}}]);