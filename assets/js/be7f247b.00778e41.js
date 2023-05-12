"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8699:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section is designed for  the the latest version of Botanalytics, which is currently on private beta. "),(0,r.kt)("p",{parentName:"div"},"If you would like to join the beta and use the latest version of Botanalytics, ",(0,r.kt)("a",{parentName:"p",href:"https://beta.botanalytics.co/"},"follow the instructions"),"."))))}o.isMDXComponent=!0},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(2389),o=n(1548),i=n(6010);const s="tabItem_LplD";function p(e){var t,n;const{lazy:l,block:p,defaultValue:u,values:c,groupId:d,className:m}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,o.UB)(),[f,w]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=b[d];null!=e&&e!==f&&h.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==f&&(T(t),w(a),null!=d&&g(d,a))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},m)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":f===t})}),n??t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function u(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>v});var a=n(7462),r=(n(7294),n(3905)),l=n(8699);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The command above will upgrade your pip to the latest version. We recommend using pip 21.3 or later due to performance improvements. Previous versions would take long time to resolve dependencies."))))}i.isMDXComponent=!0;var s=n(9877),p=n(8215);const u={sidebar_position:1},c="Getting Started",d={unversionedId:"integration/sdks/python/getting-started",id:"integration/sdks/python/getting-started",title:"Getting Started",description:"This section describes how to use the Botanalytics Python SDK for your project.",source:"@site/docs/integration/sdks/python/getting-started.mdx",sourceDirName:"integration/sdks/python",slug:"/integration/sdks/python/getting-started",permalink:"/docs/integration/sdks/python/getting-started",editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/sdks/python/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Samsung Bixby",permalink:"/docs/integration/sdks/node/samsung-bixby"},next:{title:"Rasa",permalink:"/docs/integration/sdks/python/rasa"}},m={},v=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Installation",id:"quick-installation",level:2},{value:"Isolate your python project using a virtual environment.",id:"isolate-your-python-project-using-a-virtual-environment",level:4},{value:"Step-by-step Installation Guide",id:"step-by-step-installation-guide",level:2},{value:"1. Python Environment Setup",id:"1-python-environment-setup",level:3},{value:"2. Virtual Environment Setup",id:"2-virtual-environment-setup",level:3},{value:"3. Install Botanalytics Python SDK",id:"3-install-botanalytics-python-sdk",level:3}],h={toc:v};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"This section describes how to use the Botanalytics Python SDK for your project."),(0,r.kt)(l.ZP,{mdxType:"V3Warning"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Python project with python version 3.7 or above.")),(0,r.kt)("h2",{id:"quick-installation"},"Quick Installation"),(0,r.kt)("h4",{id:"isolate-your-python-project-using-a-virtual-environment"},"Isolate your python project using a virtual environment."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a new virtual environment by choosing a Python interpreter and making a ./venv directory to hold it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ./venv/bin/activate\n")),(0,r.kt)("p",null,"Install Botanalytics Python SDK using pip (requires Python 3.7, or above)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -U --user pip && pip3 install botanalytics==3.0.0\n")),(0,r.kt)(i,{mdxType:"PipWarning"})),(0,r.kt)(p.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a new virtual environment by choosing a Python interpreter and making a ./venv directory to hold it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ./venv/bin/activate\n")),(0,r.kt)("p",null,"Install Botanalytics Python SDK using pip (requires Python 3.7, or above)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -U --user pip && pip3 install botanalytics==3.0.0\n")),(0,r.kt)(i,{mdxType:"PipWarning"})),(0,r.kt)(p.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a new virtual environment by choosing a Python interpreter and making a .","\\","venv directory to hold it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> .\\venv\\Scripts\\activate\n")),(0,r.kt)("p",null,"Install Botanalytics Python SDK using pip (requires Python 3.7, or above)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -U --user pip && pip3 install botanalytics==3.0.0\n")),(0,r.kt)(i,{mdxType:"PipWarning"}))),(0,r.kt)("h2",{id:"step-by-step-installation-guide"},"Step-by-step Installation Guide"),(0,r.kt)("h3",{id:"1-python-environment-setup"},"1. Python Environment Setup"),(0,r.kt)("p",null,"Check if your Python environment is already configured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 --version\npip3 --version\n")),(0,r.kt)("p",null,"If these packages are already installed, these commands should display version numbers for each step, and you can skip to the next step."),(0,r.kt)("p",null,"Otherwise, proceed with the instructions below to install them."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},"Fetch the relevant packages using apt, and install virtualenv using pip.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3-dev python3-pip\n"))),(0,r.kt)(p.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},"Install the ",(0,r.kt)("a",{target:"\\_blank",href:"https://brew.sh/"},"Homebrew")," package manager if you haven't already.",(0,r.kt)("p",null,"Once you're done, you can install Python3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install python@3.7\n"))),(0,r.kt)(p.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},"Make sure the Microsoft VC++ Compiler is installed, so python can compile any dependencies.",(0,r.kt)("p",null,"You can get the compiler from ",(0,r.kt)("a",{target:"\\_blank",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"Visual Studio"),"."),(0,r.kt)("p",null,"Download the installer and select VC++ Build tools in the list. Install ",(0,r.kt)("a",{target:"\\_blank",href:"https://www.python.org/downloads/windows/"},"Python 3")," (64-bit version) for Windows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> pip3 install -U pip\n")))),(0,r.kt)("h3",{id:"2-virtual-environment-setup"},"2. Virtual Environment Setup"),(0,r.kt)("p",null,"This step is optional, but we strongly recommend isolating python projects using virtual environments."),(0,r.kt)("p",null,"Tools like ",(0,r.kt)("a",{target:"\\_blank",href:"https://virtualenv.pypa.io/en/latest/"},"virtualenv")," , ",(0,r.kt)("a",{target:"\\_blank",href:"https://virtualenvwrapper.readthedocs.io/en/latest/"},"virtualenvwrapper")," and ",(0,r.kt)("a",{target:"\\_blank",href:"https://pipenv.pypa.io/en/latest/"},"pipenv")," provide isolated Python environments, which are cleaner than installing packages system-wide (as they prevent dependency conflicts). They also let you install packages without root privileges."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},"Create a new virtual environment by choosing a Python interpreter and making a ./venv directory to hold it:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ./venv/bin/activate\n"))),(0,r.kt)(p.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},"Create a new virtual environment by choosing a Python interpreter and making a ./venv directory to hold it:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ./venv/bin/activate\n"))),(0,r.kt)(p.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},"Create a new virtual environment by choosing a Python interpreter and making a .\\\\venv directory to hold it:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> python3 -m venv ./venv\n")),(0,r.kt)("p",null,"Activate the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\> .\\venv\\Scripts\\activate\n")))),(0,r.kt)("h3",{id:"3-install-botanalytics-python-sdk"},"3. Install Botanalytics Python SDK"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"all",label:"Ubuntu/macOS/Windows",mdxType:"TabItem"},"First make sure your pip version is up to date:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -U pip\n")),(0,r.kt)("p",null,"To install Botanalytics Python SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install botanalytics==3.0.0\n")))))}y.isMDXComponent=!0}}]);