"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),r=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=r(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=r(n),k=a,p=d["".concat(s,".").concat(k)]||d[k]||g[k]||i;return n?o.createElement(p,c(c({ref:t},h),{},{components:n})):o.createElement(p,c({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var r=2;r<i;r++)c[r]=n[r];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},31605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},c="Facebook Messenger",l={unversionedId:"integration/no-code/facebook-messenger",id:"integration/no-code/facebook-messenger",title:"Facebook Messenger",description:"Access Your Account Dashboard",source:"@site/docs/integration/no-code/facebook-messenger.md",sourceDirName:"integration/no-code",slug:"/integration/no-code/facebook-messenger",permalink:"/docs/integration/no-code/facebook-messenger",draft:!1,editUrl:"https://github.com/botanalytics/docs/tree/master/docs/integration/no-code/facebook-messenger.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/integration/overview"},next:{title:"Getting Started",permalink:"/docs/integration/sdks/node/getting-started"}},s={},r=[{value:"Access Your Account Dashboard",id:"access-your-account-dashboard",level:3},{value:"Navigate to Channel Settings",id:"navigate-to-channel-settings",level:3},{value:"Navigate to &quot;Channels&quot; Section",id:"navigate-to-channels-section",level:3},{value:"Connect New Channel",id:"connect-new-channel",level:3},{value:"Scenario 1: Logged into Botanalytics with Facebook Account",id:"scenario-1-logged-into-botanalytics-with-facebook-account",level:2},{value:"Select Facebook Integration",id:"select-facebook-integration",level:3},{value:"Connect With Facebook",id:"connect-with-facebook",level:3},{value:"Authorize Access",id:"authorize-access",level:3},{value:"Choose the Page",id:"choose-the-page",level:3},{value:"Allow Botanalytics permission",id:"allow-botanalytics-permission",level:3},{value:"Confirmation Message",id:"confirmation-message",level:3},{value:"Select the Page You Want To Connect With",id:"select-the-page-you-want-to-connect-with",level:2},{value:"Adding One Click Facebook Messenger Channel",id:"adding-one-click-facebook-messenger-channel",level:3},{value:"View Channel",id:"view-channel",level:3},{value:"Scenario 2: Not Signed in with Facebook Account",id:"scenario-2-not-signed-in-with-facebook-account",level:2},{value:"Sign In to Facebook",id:"sign-in-to-facebook",level:3},{value:"Connect With Facebook",id:"connect-with-facebook-1",level:3},{value:"Authorize Access",id:"authorize-access-1",level:3},{value:"Choose the Page",id:"choose-the-page-1",level:3},{value:"Allow Botanalytics permission",id:"allow-botanalytics-permission-1",level:3},{value:"Confirmation Message",id:"confirmation-message-1",level:3},{value:"Select the Page You Want To Connect With",id:"select-the-page-you-want-to-connect-with-1",level:2},{value:"Adding One Click Facebook Messenger Channel",id:"adding-one-click-facebook-messenger-channel-1",level:3},{value:"View Channel",id:"view-channel-1",level:3}],h={toc:r},d="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"facebook-messenger"},"Facebook Messenger"),(0,a.kt)("h3",{id:"access-your-account-dashboard"},"Access Your Account Dashboard"),(0,a.kt)("p",null,"Log in to your Botanalytics account using your credentials. Once logged in, click on the Botanalytics logo in the top left corner to access the dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Go to Project List",src:n(32843).Z,width:"1277",height:"882"})),(0,a.kt)("h3",{id:"navigate-to-channel-settings"},"Navigate to Channel Settings"),(0,a.kt)("p",null,"In the dashboard, locate the three dots (ellipsis) icon in the top right corner of the project you wish to add Facebook Integration to. Click on it to display a drop-down menu."),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"Project Menu",src:n(33462).Z,width:"1263",height:"805"})),(0,a.kt)("p",null,'From the drop-down menu, select "Settings."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Settings",src:n(90440).Z,width:"1263",height:"771"})),(0,a.kt)("h3",{id:"navigate-to-channels-section"},'Navigate to "Channels" Section'),(0,a.kt)("p",null,'In the settings window, click on "Channels" to manage your connected channels.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Settings",src:n(92709).Z,width:"1277",height:"618"})),(0,a.kt)("h3",{id:"connect-new-channel"},"Connect New Channel"),(0,a.kt)("p",null,'Under the "Channels" section, click on the "Connect New Channel" button.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Settings",src:n(33281).Z,width:"1277",height:"618"})),(0,a.kt)("h2",{id:"scenario-1-logged-into-botanalytics-with-facebook-account"},"Scenario 1: Logged into Botanalytics with Facebook Account"),(0,a.kt)("h3",{id:"select-facebook-integration"},"Select Facebook Integration"),(0,a.kt)("p",null,'A new window will appear, presenting a list of available channels.\nSelect "Messenger" to initiate the one-click integration process.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Messenger Direct Channel",src:n(1454).Z,width:"1430",height:"672"})),(0,a.kt)("h3",{id:"connect-with-facebook"},"Connect With Facebook"),(0,a.kt)("p",null,'In the pop-up window, click on "Connect with Facebook" to connect your account.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect With Facebook",src:n(25775).Z,width:"1919",height:"964"})),(0,a.kt)("h3",{id:"authorize-access"},"Authorize Access"),(0,a.kt)("p",null,'If you logged into Botanalytics with your Facebook account, you will be asked to continue with that account.\nClick on "Continue" in the account settings to proceed.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Authorize",src:n(2423).Z,width:"558",height:"588"})),(0,a.kt)("h3",{id:"choose-the-page"},"Choose the Page"),(0,a.kt)("p",null,"After authorizing access, you can choose the Facebook page you want to connect to Botanalytics."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Choose Pages",src:n(63639).Z,width:"1430",height:"672"})),(0,a.kt)("h3",{id:"allow-botanalytics-permission"},"Allow Botanalytics permission"),(0,a.kt)("p",null,"In the next page you will be asked to allow Botanalytics's app for permission. Click on the permissions and click on done to go to the next page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Permissions",src:n(26937).Z,width:"1430",height:"669"})),(0,a.kt)("h3",{id:"confirmation-message"},"Confirmation Message"),(0,a.kt)("p",null,'In the next page there will be a confirmation message , click on "OK" to go to the next step.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Authorization Confirmation OK",src:n(75004).Z,width:"936",height:"438"})),(0,a.kt)("h2",{id:"select-the-page-you-want-to-connect-with"},"Select the Page You Want To Connect With"),(0,a.kt)("p",null,'From dropdown "Which page would you like to connect with" shown below'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook Page Select Dropdown",src:n(2254).Z,width:"1919",height:"898"})),(0,a.kt)("p",null,"Select the facebook messenger page from the list of the pages."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook Select Page Dropdown",src:n(76927).Z,width:"1917",height:"959"})),(0,a.kt)("h3",{id:"adding-one-click-facebook-messenger-channel"},"Adding One Click Facebook Messenger Channel"),(0,a.kt)("p",null,"Click on add channel to add the channel."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add One Facebok Messenger Channel",src:n(57847).Z,width:"1919",height:"910"})),(0,a.kt)("h3",{id:"view-channel"},"View Channel"),(0,a.kt)("p",null,"You can now view the new channel in Channel Dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"View One Click Facebok Messenger Channel",src:n(31962).Z,width:"936",height:"436"})),(0,a.kt)("h2",{id:"scenario-2-not-signed-in-with-facebook-account"},"Scenario 2: Not Signed in with Facebook Account"),(0,a.kt)("h3",{id:"sign-in-to-facebook"},"Sign In to Facebook"),(0,a.kt)("p",null,"In the pop-up window, if you're not signed in with Facebook, a pop-up will appear.\nSign in to your Facebook account in this pop-up."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Not Logged In",src:n(5261).Z,width:"936",height:"436"})),(0,a.kt)("h3",{id:"connect-with-facebook-1"},"Connect With Facebook"),(0,a.kt)("p",null,'In the pop-up window, click on "Connect with Facebook" to connect your account.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect With Facebook",src:n(25775).Z,width:"1919",height:"964"})),(0,a.kt)("h3",{id:"authorize-access-1"},"Authorize Access"),(0,a.kt)("p",null,'If you logged into Botanalytics with your Facebook account, you will be asked to continue with that account.\nClick on "Continue" in the account settings to proceed.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Authorize",src:n(2423).Z,width:"558",height:"588"})),(0,a.kt)("h3",{id:"choose-the-page-1"},"Choose the Page"),(0,a.kt)("p",null,"After authorizing access, you can choose the Facebook page you want to connect to Botanalytics."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Choose Pages",src:n(63639).Z,width:"1430",height:"672"})),(0,a.kt)("h3",{id:"allow-botanalytics-permission-1"},"Allow Botanalytics permission"),(0,a.kt)("p",null,"In the next page you will be asked to allow Botanalytics's app for permission. Click on the permissions and click on done to go to the next page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Permissions",src:n(26937).Z,width:"1430",height:"669"})),(0,a.kt)("h3",{id:"confirmation-message-1"},"Confirmation Message"),(0,a.kt)("p",null,'In the next page there will be a confirmation message , click on "OK" to go to the next step.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebok Authorization Confirmation OK",src:n(75004).Z,width:"936",height:"438"})),(0,a.kt)("h2",{id:"select-the-page-you-want-to-connect-with-1"},"Select the Page You Want To Connect With"),(0,a.kt)("p",null,'From dropdown "Which page would you like to connect with" shown below'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook Page Select Dropdown",src:n(2254).Z,width:"1919",height:"898"})),(0,a.kt)("p",null,"Select the facebook messenger page from the list of the pages."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook Select Page Dropdown",src:n(76927).Z,width:"1917",height:"959"})),(0,a.kt)("h3",{id:"adding-one-click-facebook-messenger-channel-1"},"Adding One Click Facebook Messenger Channel"),(0,a.kt)("p",null,"Click on add channel to add the channel."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add One Facebok Messenger Channel",src:n(57847).Z,width:"1919",height:"910"})),(0,a.kt)("h3",{id:"view-channel-1"},"View Channel"),(0,a.kt)("p",null,"You can now view the new channel in Channel Dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"View One Click Facebok Messenger Channel",src:n(31962).Z,width:"936",height:"436"})))}g.isMDXComponent=!0},57847:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-facebook-one-click-164557f6130d60fe54e5d56cdf035905.png"},92709:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/channels-tab-1a6ff380818c88a0c6e3b562348efc68.png"},25775:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connect-with-facebook-096d821316146bd1a125ebf0f28acf25.png"},31962:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connected-facebook-one-click-channel-3e6e08125a69b630292340e987fa6e78.png"},1454:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/direct-facebook-channel-1bfe5c6fed33dbfde1c9a6128e065da8.png"},2423:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-authorize-79d791b01e9a4965b3f0a29d0a8c2142.png"},63639:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-choose-pages-8b6a04b8727a6d91f3967eeefc0ed20c.png"},75004:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-confirmation-ok-a42c9c8be77b9b8931b9078eddd2c686.png"},5261:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-not-logged-in-8700278ae3139a54f75058fb92a46ba8.png"},26937:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-permissions-df52f894b9e982fd4680081736fb62b3.png"},2254:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-select-page-e61d4368200ae248270bb28b1f5bd034.png"},76927:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/facebook-select-wanted-page-05beb5cefdb7b7b2f80cd97a8012813f.png"},32843:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/go-to-list-c18379b03f6d8fe513a856d537ee53ff.png"},33462:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/menu-icon-8ffe0074c8dc9ce19c86a6188aa2a903.png"},33281:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/settings-channels-21dccc0ac67d60d85f3a9ab0bf41e75e.png"},90440:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/settings-select-0be7323265973254416258990402a470.png"}}]);