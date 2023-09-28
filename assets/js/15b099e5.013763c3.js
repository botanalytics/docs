"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2095],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>g});var n=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function a(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(s),p=i,g=d["".concat(u,".").concat(p)]||d[p]||h[p]||r;return s?n.createElement(g,o(o({ref:t},c),{},{components:s})):n.createElement(g,o({ref:t},c))}));function g(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=s.length,o=new Array(r);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<r;l++)o[l]=s[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},44718:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(87462),i=(s(67294),s(3905));const r={sidebar_position:1,sidebar_label:"Per User Distribution",hide_title:!0},o=void 0,a={unversionedId:"metrics/sessions/session-count/per-user-distribution",id:"metrics/sessions/session-count/per-user-distribution",title:"per-user-distribution",description:"Session Count Per User Distribution",source:"@site/docs/metrics/sessions/session-count/per-user-distribution.md",sourceDirName:"metrics/sessions/session-count",slug:"/metrics/sessions/session-count/per-user-distribution",permalink:"/docs/metrics/sessions/session-count/per-user-distribution",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/metrics/sessions/session-count/per-user-distribution.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Per User Distribution",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Trends",permalink:"/docs/metrics/sessions/session-duration/trends"},next:{title:"Trends",permalink:"/docs/metrics/sessions/session-count/trends"}},u={},l=[{value:"Session Count Per User Distribution",id:"session-count-per-user-distribution",level:2},{value:"X-Axis (Session Count)",id:"x-axis-session-count",level:3},{value:"Y-Axis (Number of Users)",id:"y-axis-number-of-users",level:3},{value:"Histogram Bars",id:"histogram-bars",level:3},{value:"Distribution Shape",id:"distribution-shape",level:3},{value:"Mean and Median",id:"mean-and-median",level:3},{value:"Interpreting a Session Count Per User Histogram for a Chatbot",id:"interpreting-a-session-count-per-user-histogram-for-a-chatbot",level:3},{value:"Distribution Shape",id:"distribution-shape-1",level:4},{value:"User Engagement Levels",id:"user-engagement-levels",level:4},{value:"Outliers",id:"outliers",level:4},{value:"Retention Analysis",id:"retention-analysis",level:4},{value:"Optimization Opportunities",id:"optimization-opportunities",level:4},{value:"Use Cases for Session Count Per User Histogram Analysis",id:"use-cases-for-session-count-per-user-histogram-analysis",level:3},{value:"User Engagement Analysis",id:"user-engagement-analysis",level:4},{value:"Retention Strategies",id:"retention-strategies",level:4},{value:"Personalization Strategies",id:"personalization-strategies",level:4},{value:"Product Development",id:"product-development",level:4}],c={toc:l},d="wrapper";function h(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"session-count-per-user-distribution"},"Session Count Per User Distribution"),(0,i.kt)("p",null,"A Session Count Per User Histogram for a chatbot is a graphical representation that displays the distribution of the number of ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/what-are/conversations"},(0,i.kt)("em",{parentName:"a"},"sessions"))," initiated by individual users. Each bin in the histogram represents a range of session counts, and the height of each bar indicates the number of users falling within that range. This histogram provides insights into user engagement by showing how many users had a specific number of sessions with the chatbot. "),(0,i.kt)("p",null,"Here's how to interpret and understand a Session Count Per User Histogram for a chatbot"),(0,i.kt)("h3",{id:"x-axis-session-count"},"X-Axis (Session Count)"),(0,i.kt)("p",null,"The x-axis of the histogram represents the number of sessions per user, typically organized into bins or ranges. Each bin represents a specific range of session counts (e.g., 1-5 sessions, 6-10 sessions, etc.)."),(0,i.kt)("h3",{id:"y-axis-number-of-users"},"Y-Axis (Number of Users)"),(0,i.kt)("p",null,"The y-axis represents the number of users falling within each session count range (bin). It indicates the count of users who had a particular number of sessions falling within that range."),(0,i.kt)("h3",{id:"histogram-bars"},"Histogram Bars"),(0,i.kt)("p",null,"The histogram consists of bars, each corresponding to a bin on the x-axis. The height of each bar represents the number of users (or user accounts) that fall within the specific session count range associated with that bin."),(0,i.kt)("h3",{id:"distribution-shape"},"Distribution Shape"),(0,i.kt)("p",null,"The overall shape of the histogram provides insights into the distribution of user engagement. For instance, it may be:"),(0,i.kt)("p",null,"Skewed to the right: Indicating that a majority of users have a low number of sessions (e.g., many users with 1-5 sessions)."),(0,i.kt)("p",null,"Skewed to the left: Suggesting that some users have a very high number of sessions (e.g., a few users with 50+ sessions)."),(0,i.kt)("h3",{id:"mean-and-median"},"Mean and Median"),(0,i.kt)("p",null,"The mean (average) and median (middle value) session counts per user can be calculated from the data and are often marked on the graph. They provide central measures of session counts and help identify the typical engagement level."),(0,i.kt)("h3",{id:"interpreting-a-session-count-per-user-histogram-for-a-chatbot"},"Interpreting a Session Count Per User Histogram for a Chatbot"),(0,i.kt)("h4",{id:"distribution-shape-1"},"Distribution Shape"),(0,i.kt)("p",null,"Understanding the shape of the histogram helps identify user engagement patterns. For instance, a right-skewed distribution indicates that a large portion of users have fewer sessions, while a left-skewed distribution suggests a few users have a high number of sessions."),(0,i.kt)("h4",{id:"user-engagement-levels"},"User Engagement Levels"),(0,i.kt)("p",null,"Analyzing the histogram can help categorize users based on their engagement levels with the chatbot, such as occasional users, regular users, or power users."),(0,i.kt)("h4",{id:"outliers"},"Outliers"),(0,i.kt)("p",null,"Examining the histogram may reveal outliers, representing users with an exceptionally high number of sessions. These outliers can be further analyzed to understand their behavior and engagement."),(0,i.kt)("h4",{id:"retention-analysis"},"Retention Analysis"),(0,i.kt)("p",null,"Over time, this histogram can be used to track changes in user engagement and retention. For example, an increase in the number of users in higher session count bins may indicate improved retention efforts."),(0,i.kt)("h4",{id:"optimization-opportunities"},"Optimization Opportunities"),(0,i.kt)("p",null,"Understanding the distribution of session counts can guide optimization efforts. For instance, if a large portion of users has only one session, it may prompt improvements to encourage more repeat interactions."),(0,i.kt)("h3",{id:"use-cases-for-session-count-per-user-histogram-analysis"},"Use Cases for Session Count Per User Histogram Analysis"),(0,i.kt)("h4",{id:"user-engagement-analysis"},"User Engagement Analysis"),(0,i.kt)("p",null,"It helps in understanding how engaged users are with the chatbot and the distribution of engagement levels among users."),(0,i.kt)("h4",{id:"retention-strategies"},"Retention Strategies"),(0,i.kt)("p",null,"Analyzing the histogram over time can assist in designing retention strategies to encourage users to have more sessions."),(0,i.kt)("h4",{id:"personalization-strategies"},"Personalization Strategies"),(0,i.kt)("p",null,"Understanding the distribution of session counts per user can guide personalization strategies to cater to different user segments based on their engagement levels."),(0,i.kt)("h4",{id:"product-development"},"Product Development"),(0,i.kt)("p",null,"Insights from the histogram can inform the development of features or improvements aimed at increasing user engagement and encouraging more frequent interactions."),(0,i.kt)("p",null,"In summary, a Session Count Per User Histogram for a chatbot is a useful visualization for understanding user engagement patterns by displaying the distribution of session counts per user. It provides insights into user engagement levels and can guide strategies to optimize user engagement and overall user experience with the chatbot."))}h.isMDXComponent=!0}}]);