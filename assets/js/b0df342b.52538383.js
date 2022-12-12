"use strict";(self.webpackChunkapiv_2_docs=self.webpackChunkapiv_2_docs||[]).push([[773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={},l="Online",a={unversionedId:"models/online",id:"models/online",title:"Online",description:"Fields",source:"@site/docs/models/online.md",sourceDirName:"models",slug:"/models/online",permalink:"/docs/models/online",draft:!1,editUrl:"https://github.com/vatsimnetwork/apiv2-docs/tree/master/docs/docs/models/online.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Member",permalink:"/docs/models/member"},next:{title:"Introduction",permalink:"/docs/webhooks/"}},c={},s=[{value:"Fields",id:"fields",level:2},{value:"<code>Online.id</code>",id:"onlineid",level:4},{value:"<code>Online.callsign</code>",id:"onlinecallsign",level:4},{value:"<code>Online.start</code>",id:"onlinestart",level:4},{value:"<code>Online.server</code>",id:"onlineserver",level:4},{value:"<code>Online.fp</code>",id:"onlinefp",level:4}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"online"},"Online"),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"onlineid"},(0,o.kt)("inlineCode",{parentName:"h4"},"Online.id")),(0,o.kt)("p",null,"The cert ID (CID) of the Member."),(0,o.kt)("h4",{id:"onlinecallsign"},(0,o.kt)("inlineCode",{parentName:"h4"},"Online.callsign")),(0,o.kt)("h4",{id:"onlinestart"},(0,o.kt)("inlineCode",{parentName:"h4"},"Online.start")),(0,o.kt)("p",null,"The login date for this session"),(0,o.kt)("h4",{id:"onlineserver"},(0,o.kt)("inlineCode",{parentName:"h4"},"Online.server")),(0,o.kt)("p",null,"The VATSIM server for this session"),(0,o.kt)("h4",{id:"onlinefp"},(0,o.kt)("inlineCode",{parentName:"h4"},"Online.fp")),(0,o.kt)("p",null,"Latest flightplan of the Member"))}p.isMDXComponent=!0}}]);