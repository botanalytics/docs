"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return n?a.createElement(v,i(i({ref:t},h),{},{components:n})):a.createElement(v,i({ref:t},h))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:2,sidebar_label:"Tree",hide_title:!0},i=void 0,o={unversionedId:"metrics/behavior/flows/tree",id:"metrics/behavior/flows/tree",title:"tree",description:"Flows Tree",source:"@site/docs/metrics/behavior/flows/tree.md",sourceDirName:"metrics/behavior/flows",slug:"/metrics/behavior/flows/tree",permalink:"/docs/metrics/behavior/flows/tree",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/metrics/behavior/flows/tree.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Tree",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Sankey",permalink:"/docs/metrics/behavior/flows/sankey"},next:{title:"Sunburst",permalink:"/docs/metrics/behavior/flows/sunburst"}},l={},c=[{value:"Flows Tree",id:"flows-tree",level:2},{value:"Nodes",id:"nodes",level:3},{value:"Intents",id:"intents",level:4},{value:"Chatbot Actions",id:"chatbot-actions",level:4},{value:"Events/Composite Events",id:"eventscomposite-events",level:4},{value:"Fallback",id:"fallback",level:4},{value:"Exit (User Leaves Conversation)",id:"exit-user-leaves-conversation",level:4},{value:"Escalation",id:"escalation",level:4},{value:"Built-In Events",id:"built-in-events",level:4},{value:"Tree Structure",id:"tree-structure",level:3},{value:"Branches and Sub-Branches",id:"branches-and-sub-branches",level:3},{value:"Colors and Labels",id:"colors-and-labels",level:3},{value:"Interpreting a Flows Tree Graph for a Chatbot",id:"interpreting-a-flows-tree-graph-for-a-chatbot",level:3},{value:"Conversation Structure",id:"conversation-structure",level:4},{value:"Fallback and Escalation Paths",id:"fallback-and-escalation-paths",level:4},{value:"Exit Points Analysis",id:"exit-points-analysis",level:4},{value:"Event-Driven Behavior",id:"event-driven-behavior",level:4},{value:"Use Cases for Flows Tree Graph Analysis",id:"use-cases-for-flows-tree-graph-analysis",level:3},{value:"Chatbot Conversation Design",id:"chatbot-conversation-design",level:4},{value:"Exit Point Optimization",id:"exit-point-optimization",level:4},{value:"User Experience Enhancement",id:"user-experience-enhancement",level:4},{value:"Training and Development",id:"training-and-development",level:4}],h={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"flows-tree"},"Flows Tree"),(0,r.kt)("p",null,"A flows tree graph for a chatbot, with nodes representing intents, chatbot actions, events/composite events, fallback, exit (when users leave the conversation due to non-completed tasks), escalation, and built-in events, is a visual representation that illustrates the flow of interactions within a chatbot's conversation space in a hierarchical tree-like structure. Unlike a Sankey graph that shows transitions between nodes, a tree graph focuses on displaying the chatbot's conversation structure, making it easier to understand the hierarchy of intents, actions, and events. "),(0,r.kt)("p",null,"Here's how to interpret and understand this tree graph"),(0,r.kt)("h3",{id:"nodes"},"Nodes"),(0,r.kt)("h4",{id:"intents"},"Intents"),(0,r.kt)("p",null,'Intents represent the user\'s purpose or goal behind their input. Each intent reflects a specific user request or inquiry, such as "Book a Flight," "Check Account Balance," or "Order Pizza."'),(0,r.kt)("h4",{id:"chatbot-actions"},"Chatbot Actions"),(0,r.kt)("p",null,'Chatbot actions are the specific tasks or operations that the chatbot performs to fulfill user requests. These actions include actions like "Retrieve Flight Options," "Process Payment," or "Retrieve Weather Information."'),(0,r.kt)("h4",{id:"eventscomposite-events"},"Events/Composite Events"),(0,r.kt)("p",null,'Events represent specific triggers or occurrences within the conversation that may lead to particular actions or transitions. Events can include user expressions and other contextual cues. For instance, "User Asks for Help," "User Expresses Frustration,".'),(0,r.kt)("p",null,'Composite events are combinations of intents, events, and built-in events that represent complex user input or scenarios. These events may be part of a sentence or composition of other intents, events, and built-in events. For example, "Change Flight Date" could be a composite event comprising the intent "Modify Booking," the event "Change Date," and a built-in event like "Message Delivered."'),(0,r.kt)("h4",{id:"fallback"},"Fallback"),(0,r.kt)("p",null,"Fallback represents a state where the chatbot is unable to understand or determine the user's intent from their input. It typically triggers a default or general response seeking clarification or providing assistance."),(0,r.kt)("h4",{id:"exit-user-leaves-conversation"},"Exit (User Leaves Conversation)"),(0,r.kt)("p",null,"Exit represents a point in the conversation where the user decides to leave the interaction due to non-completed tasks or other reasons. It indicates the end of the conversation without resolution."),(0,r.kt)("h4",{id:"escalation"},"Escalation"),(0,r.kt)("p",null,"Escalation represents a transition where the conversation is passed on or escalated to a human agent or a higher level of support due to complexity, user request, or other specific criteria."),(0,r.kt)("h4",{id:"built-in-events"},"Built-In Events"),(0,r.kt)("p",null,'Built-in events are system-generated events that are not directly initiated by the user but are part of the chatbot platform\'s functioning. Examples include "Message Delivered" (indicating the delivery of a chat message) and "Message Read" (indicating that the user has read a message).'),(0,r.kt)("h3",{id:"tree-structure"},"Tree Structure"),(0,r.kt)("p",null,"In the tree graph, nodes are organized hierarchically, with intents, actions, events, composite events, and built-in events forming branches and sub-branches of the conversation tree."),(0,r.kt)("h3",{id:"branches-and-sub-branches"},"Branches and Sub-Branches"),(0,r.kt)("p",null,"The graph visually shows how different intents, actions, events, and other nodes are connected and organized within the conversation flow. Each branch represents a specific user interaction path."),(0,r.kt)("h3",{id:"colors-and-labels"},"Colors and Labels"),(0,r.kt)("p",null,"Colors and labels can be used to differentiate between the different types of nodes (intents, chatbot actions, composite events, events, built-in events, fallback, exit, escalation) and help in understanding the graph more easily."),(0,r.kt)("h3",{id:"interpreting-a-flows-tree-graph-for-a-chatbot"},"Interpreting a Flows Tree Graph for a Chatbot"),(0,r.kt)("h4",{id:"conversation-structure"},"Conversation Structure"),(0,r.kt)("p",null,"The tree graph offers a clear view of the hierarchy and structure of the chatbot's conversation. It shows how different intents, actions, and events are organized within the conversation flow."),(0,r.kt)("h4",{id:"fallback-and-escalation-paths"},"Fallback and Escalation Paths"),(0,r.kt)("p",null,"The tree graph highlights the paths that lead to fallback responses and escalation to human agents, providing insights into the chatbot's response strategies."),(0,r.kt)("h4",{id:"exit-points-analysis"},"Exit Points Analysis"),(0,r.kt)("p",null,"It helps in identifying where users commonly leave the conversation due to non-completed tasks or other reasons. This information is valuable for improving user engagement and task completion."),(0,r.kt)("h4",{id:"event-driven-behavior"},"Event-Driven Behavior"),(0,r.kt)("p",null,"The graph also indicates how different events, including user-generated and system events, influence the flow of the conversation and trigger specific actions."),(0,r.kt)("h3",{id:"use-cases-for-flows-tree-graph-analysis"},"Use Cases for Flows Tree Graph Analysis"),(0,r.kt)("h4",{id:"chatbot-conversation-design"},"Chatbot Conversation Design"),(0,r.kt)("p",null,"Developers and designers can use the tree graph to visualize and refine the chatbot's conversation structure, making it more intuitive and user-friendly."),(0,r.kt)("h4",{id:"exit-point-optimization"},"Exit Point Optimization"),(0,r.kt)("p",null,"Analysis of exit nodes helps in identifying reasons why users leave the conversation and allows for improvements to enhance user engagement and task completion."),(0,r.kt)("h4",{id:"user-experience-enhancement"},"User Experience Enhancement"),(0,r.kt)("p",null,"Insights from the graph help in optimizing the user experience by addressing issues related to conversation flow and engagement."),(0,r.kt)("h4",{id:"training-and-development"},"Training and Development"),(0,r.kt)("p",null,"Developers can use this analysis to train the chatbot to handle various conversation paths and events more effectively."),(0,r.kt)("p",null,"In summary, a flows tree graph for a chatbot, considering nodes as intents, chatbot actions, events/composite events, fallback, exit (user leaves conversation due to non-completed tasks), escalation, and built-in events, provides a visual representation of the chatbot's conversation structure and flow. It helps in understanding how different nodes are connected and organized within the chatbot's"))}u.isMDXComponent=!0}}]);