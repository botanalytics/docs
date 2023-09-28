"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),g=r,p=m["".concat(l,".").concat(g)]||m[g]||h[g]||s;return t?a.createElement(p,i(i({ref:n},u),{},{components:t})):a.createElement(p,i({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},41582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={sidebar_position:2,sidebar_label:"Message Volume by Channel",hide_title:!0},i=void 0,o={unversionedId:"metrics/overview/message-volume-by-channel",id:"metrics/overview/message-volume-by-channel",title:"message-volume-by-channel",description:"Message Volume by Channel",source:"@site/docs/metrics/overview/message-volume-by-channel.md",sourceDirName:"metrics/overview",slug:"/metrics/overview/message-volume-by-channel",permalink:"/docs/metrics/overview/message-volume-by-channel",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/metrics/overview/message-volume-by-channel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Message Volume by Channel",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Power User Histogram",permalink:"/docs/metrics/overview/power-user-histogram"},next:{title:"New Users",permalink:"/docs/metrics/overview/new-users"}},l={},c=[{value:"Message Volume by Channel",id:"message-volume-by-channel",level:2},{value:"Y-Axis (Channels and Integration Channels)",id:"y-axis-channels-and-integration-channels",level:3},{value:"X-Axis (Number of Messages)",id:"x-axis-number-of-messages",level:3},{value:"Horizontal Bar Graph",id:"horizontal-bar-graph",level:3},{value:"Significance and Use Cases",id:"significance-and-use-cases",level:3},{value:"Real-time Insights",id:"real-time-insights",level:4},{value:"Weekly Trends",id:"weekly-trends",level:4},{value:"Resource Allocation",id:"resource-allocation",level:4},{value:"Performance Evaluation",id:"performance-evaluation",level:4},{value:"Channel-Specific Strategies",id:"channel-specific-strategies",level:4},{value:"Campaign Assessment",id:"campaign-assessment",level:4},{value:"User Engagement",id:"user-engagement",level:4}],u={toc:c},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"message-volume-by-channel"},"Message Volume by Channel"),(0,r.kt)("p",null,'A "Message Volume by Channel" horizontal bar graph for the current week in a chatbot analytics dashboard displays the distribution of messages across various communication channels and integration channels specifically for the ongoing week. Here\'s an explanation of this dynamic graph:'),(0,r.kt)("h3",{id:"y-axis-channels-and-integration-channels"},"Y-Axis (Channels and Integration Channels)"),(0,r.kt)("p",null,"On the Y-axis, you have a list of communication channels and integration channels. These include channels like Facebook Messenger, Amazon Alexa, Google Assistant, Samsung Bixby, and integration channels such as Microsoft Bot Framework, Rasa, and others. These represent the mediums through which users interact with the chatbot."),(0,r.kt)("h3",{id:"x-axis-number-of-messages"},"X-Axis (Number of Messages)"),(0,r.kt)("p",null,"The X-axis represents the number of messages sent or received by each specific channel or integration platform. It's a quantitative measure, typically showing message counts."),(0,r.kt)("h3",{id:"horizontal-bar-graph"},"Horizontal Bar Graph"),(0,r.kt)("p",null,"Each channel or integration platform is represented as a horizontal bar in the graph. The length or height of each bar corresponds to the number of messages associated with that channel during the current week. Longer bars indicate a higher volume of messages for that specific channel or platform."),(0,r.kt)("h3",{id:"significance-and-use-cases"},"Significance and Use Cases"),(0,r.kt)("h4",{id:"real-time-insights"},"Real-time Insights"),(0,r.kt)("p",null,"Focusing on the current week provides real-time insights into message distribution, helping you stay updated on the latest trends and user interactions."),(0,r.kt)("h4",{id:"weekly-trends"},"Weekly Trends"),(0,r.kt)("p",null,"You can monitor weekly trends in message volume by channel, which can reveal patterns related to user engagement, marketing campaigns, or platform-specific events."),(0,r.kt)("h4",{id:"resource-allocation"},"Resource Allocation"),(0,r.kt)("p",null,"Identifying channels with high message volumes in the current week allows you to allocate resources effectively for ongoing support and development efforts."),(0,r.kt)("h4",{id:"performance-evaluation"},"Performance Evaluation"),(0,r.kt)("p",null,"It helps evaluate the immediate impact of any changes or updates made to specific channels or integration channels during the current week."),(0,r.kt)("h4",{id:"channel-specific-strategies"},"Channel-Specific Strategies"),(0,r.kt)("p",null,"Based on the data, you can formulate channel-specific strategies for improving user engagement or addressing issues."),(0,r.kt)("h4",{id:"campaign-assessment"},"Campaign Assessment"),(0,r.kt)("p",null,"If you've run specific campaigns or promotions during the week, you can assess their effectiveness by examining message volumes on relevant channels."),(0,r.kt)("h4",{id:"user-engagement"},"User Engagement"),(0,r.kt)("p",null,"Identifying channels with low message volumes during the week may warrant efforts to boost user engagement on those channels."),(0,r.kt)("p",null,"In summary, a Message Volume by Channel horizontal bar graph for the current week provides an up-to-date view of message distribution across various communication channels and integration platforms. This information is invaluable for making real-time decisions related to resource allocation, user engagement, and overall chatbot performance enhancement."))}h.isMDXComponent=!0}}]);