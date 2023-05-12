"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Introduction",s={unversionedId:"basics/intro",id:"basics/intro",title:"Introduction",description:"The Botanalytics API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API token in any public website's client-side code). JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.",source:"@site/docs/basics/intro.md",sourceDirName:"basics",slug:"/basics/intro",permalink:"/docs/basics/intro",editUrl:"https://github.com/botanalytics/docs/tree/master/docs/basics/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/docs/integration/overview"}},c={},l=[{value:"Authentication",id:"authentication",level:2},{value:"Errors",id:"errors",level:2},{value:"API libraries",id:"api-libraries",level:2},{value:"API Endpoint",id:"api-endpoint",level:4}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Botanalytics API is organized around ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Representational_State_Transfer"},"REST."))," Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"cross-origin resource sharing")),", allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API token in any public website's client-side code). ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.json.org/json-en.html"},"JSON"))," is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects."),(0,o.kt)("p",null,"Be sure to subscribe to Botanalytics's API announce mailing list to receive information on new additions and changes to Botanalytics's API and language libraries."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The Botanalytics API authentication is organized around ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://jwt.io/introduction"},"JWT authentication.")),"  Authenticate your account by including your JWT token in API requests. You can manage your API tokens for the each channel in the Project settings. Your JWT API token carry many privileges, so be sure to keep them secure! Do not share your JWT API token in publicly accessible areas such GitHub, client-side code, and so forth. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail."),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("p",null,"Botanalytics uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"2xx")," range indicate success. Codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx"),"  range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," range indicate an error with Botanalytics's servers."),(0,o.kt)("p",null,"200, 201 ",(0,o.kt)("inlineCode",{parentName:"p"},"OK")," Everything worked as expected (some API calls may return 201 instead)."),(0,o.kt)("p",null,"400 ",(0,o.kt)("inlineCode",{parentName:"p"},"Bad Request")," The request was unacceptable, often due to missing a required parameter."),(0,o.kt)("p",null,"401 ",(0,o.kt)("inlineCode",{parentName:"p"},"Unauthorized")," You forgot to include your API token or it is wrong."),(0,o.kt)("p",null,"404 ",(0,o.kt)("inlineCode",{parentName:"p"},"Not Found")," The requested resource doesn't exist."),(0,o.kt)("h2",{id:"api-libraries"},"API libraries"),(0,o.kt)("p",null,"Official libraries for the Botanalytics API are available in several languages such as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/botanalytics"},"Node.js"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://pypi.python.org/pypi/botanalytics/"},"Python."))),(0,o.kt)("h4",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://api.botanalytics.co/v2/"},"https://api.botanalytics.co/v2/"))))}p.isMDXComponent=!0}}]);