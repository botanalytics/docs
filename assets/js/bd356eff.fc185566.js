"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8604],{33831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=t(85893),r=t(3905),s=t(44380);const o={sidebar_position:3,sidebar_label:"Sunburst",hide_title:!0},a=void 0,l={id:"metrics/behavior/flows/sunburst",title:"sunburst",description:"Flows Sunburst",source:"@site/docs/metrics/behavior/flows/sunburst.md",sourceDirName:"metrics/behavior/flows",slug:"/metrics/behavior/flows/sunburst",permalink:"/docs/metrics/behavior/flows/sunburst",draft:!1,unlisted:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/metrics/behavior/flows/sunburst.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sunburst",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Tree",permalink:"/docs/metrics/behavior/flows/tree"},next:{title:"Bubble Plot",permalink:"/docs/metrics/behavior/events/bubble-plot"}},c={},h=[{value:"Flows Sunburst",id:"flows-sunburst",level:2},{value:"Interpreting and Understanding the Sunburst Graph",id:"interpreting-and-understanding-the-sunburst-graph",level:3},{value:"Hierarchy Visualization",id:"hierarchy-visualization",level:4},{value:"Nodes and Rings",id:"nodes-and-rings",level:4},{value:"Central Node",id:"central-node",level:4},{value:"Outer Rings",id:"outer-rings",level:4},{value:"Nodes and Segments",id:"nodes-and-segments",level:4},{value:"Colors and Labels",id:"colors-and-labels",level:4},{value:"Interpreting a Sunburst Graph for a Chatbot",id:"interpreting-a-sunburst-graph-for-a-chatbot",level:3},{value:"Hierarchy of Conversation",id:"hierarchy-of-conversation",level:4},{value:"Relative Importance",id:"relative-importance",level:4},{value:"Flow of Conversation",id:"flow-of-conversation",level:4},{value:"Event-Driven Behavior",id:"event-driven-behavior",level:4},{value:"Use Cases for Sunburst Graph Analysis",id:"use-cases-for-sunburst-graph-analysis",level:3},{value:"Conversation Structure Optimization",id:"conversation-structure-optimization",level:4},{value:"Identifying Exit Points",id:"identifying-exit-points",level:4},{value:"Event-Driven Insights",id:"event-driven-insights",level:4},{value:"Visualizing Composition",id:"visualizing-composition",level:4},{value:"Summary",id:"summary",level:3}];function d(e){const n={h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,r.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"flows-sunburst",children:"Flows Sunburst"}),"\n",(0,i.jsx)(n.p,{children:'A flows sunburst graph for a chatbot is a visual representation that displays the hierarchical structure of a chatbot\'s conversation components, including intents, chatbot actions, events/composite events, fallback, exit points (when users leave the conversation due to non-completed tasks), escalation, and built-in events (such as "message delivered" and "message read"). It takes the form of a sunburst, which consists of concentric rings radiating outward from a central point, each representing a level of hierarchy within the chatbot\'s conversation.'}),"\n",(0,i.jsx)("img",{src:s.Z,alt:"FlowsSunburst"}),"\n",(0,i.jsx)(n.h3,{id:"interpreting-and-understanding-the-sunburst-graph",children:"Interpreting and Understanding the Sunburst Graph"}),"\n",(0,i.jsx)(n.h4,{id:"hierarchy-visualization",children:"Hierarchy Visualization"}),"\n",(0,i.jsx)(n.p,{children:"The sunburst graph organizes chatbot conversation elements hierarchically, with the central point representing the root of the hierarchy and the outer rings representing different levels of conversation elements."}),"\n",(0,i.jsx)(n.h4,{id:"nodes-and-rings",children:"Nodes and Rings"}),"\n",(0,i.jsx)(n.p,{children:"Each ring in the sunburst graph represents a level of the conversation hierarchy, with nodes placed within these rings to represent specific conversation elements."}),"\n",(0,i.jsx)(n.h4,{id:"central-node",children:"Central Node"}),"\n",(0,i.jsx)(n.p,{children:"The central node typically represents the starting point of a conversation or a general context."}),"\n",(0,i.jsx)(n.h4,{id:"outer-rings",children:"Outer Rings"}),"\n",(0,i.jsx)(n.p,{children:"Moving outward from the central node, each ring corresponds to a more specific level of the conversation. For example, the first outer ring might contain nodes representing high-level intents, while subsequent rings might contain nodes representing chatbot actions and events."}),"\n",(0,i.jsx)(n.h4,{id:"nodes-and-segments",children:"Nodes and Segments"}),"\n",(0,i.jsx)(n.p,{children:"Nodes within each ring are arranged as segments, with their size representing various attributes such as frequency of use, importance, or relevance."}),"\n",(0,i.jsx)(n.h4,{id:"colors-and-labels",children:"Colors and Labels"}),"\n",(0,i.jsx)(n.p,{children:"Different colors and labels distinguish between types of conversation elements, aiding in understanding the composition of the chatbot's conversation."}),"\n",(0,i.jsx)(n.h3,{id:"interpreting-a-sunburst-graph-for-a-chatbot",children:"Interpreting a Sunburst Graph for a Chatbot"}),"\n",(0,i.jsx)(n.h4,{id:"hierarchy-of-conversation",children:"Hierarchy of Conversation"}),"\n",(0,i.jsx)(n.p,{children:"The sunburst graph provides a visual representation of how different conversation elements are organized within the chatbot's interactions, from the central node to the outer rings."}),"\n",(0,i.jsx)(n.h4,{id:"relative-importance",children:"Relative Importance"}),"\n",(0,i.jsx)(n.p,{children:"The size or prominence of nodes within each ring can indicate the relative importance or frequency of usage of specific conversation elements. Larger nodes may represent more significant intents or actions."}),"\n",(0,i.jsx)(n.h4,{id:"flow-of-conversation",children:"Flow of Conversation"}),"\n",(0,i.jsx)(n.p,{children:"By following segments from the central node outward, users can track the flow of a conversation as it progresses through different intents, actions, events, and potential exit points."}),"\n",(0,i.jsx)(n.h4,{id:"event-driven-behavior",children:"Event-Driven Behavior"}),"\n",(0,i.jsx)(n.p,{children:"The sunburst graph highlights how events, both user-generated and system-generated, influence the flow and direction of the conversation, offering insights into event-driven behavior."}),"\n",(0,i.jsx)(n.h3,{id:"use-cases-for-sunburst-graph-analysis",children:"Use Cases for Sunburst Graph Analysis"}),"\n",(0,i.jsx)(n.h4,{id:"conversation-structure-optimization",children:"Conversation Structure Optimization"}),"\n",(0,i.jsx)(n.p,{children:"Designers and developers can optimize the structure and hierarchy of a chatbot's conversation based on insights from the sunburst graph, ensuring alignment with user needs and goals."}),"\n",(0,i.jsx)(n.h4,{id:"identifying-exit-points",children:"Identifying Exit Points"}),"\n",(0,i.jsx)(n.p,{children:"The graph helps identify common exit points where users leave the conversation, enabling improvements in user engagement and task completion."}),"\n",(0,i.jsx)(n.h4,{id:"event-driven-insights",children:"Event-Driven Insights"}),"\n",(0,i.jsx)(n.p,{children:"Analysis of the graph provides insights into how events impact the chatbot's conversation flow and responses, aiding in event-driven optimization."}),"\n",(0,i.jsx)(n.h4,{id:"visualizing-composition",children:"Visualizing Composition"}),"\n",(0,i.jsx)(n.p,{children:"The sunburst graph visually represents the composition of the chatbot's interactions, facilitating understanding of complexity and diversity in conversation elements."}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In summary, a sunburst graph for a chatbot offers a unique visual perspective on conversation hierarchy, composition, and flow, aiding in conversation design, optimization, and event-driven pattern identification."})]})}function u(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,v=u["".concat(l,".").concat(p)]||u[p]||h[p]||s;return t?i.createElement(v,o(o({ref:n},d),{},{components:t})):i.createElement(v,o({ref:n},d))}));d.displayName="MDXCreateElement"},44380:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Flows-Tree-6479970a72af13f6b44bcbeebdb0d62d.png"}}]);