(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1889],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6154:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={id:"tribute-dao",title:"tributeDao"},u={unversionedId:"schema/subscriptions/tribute-dao",id:"schema/subscriptions/tribute-dao",isDocsHomePage:!1,title:"tributeDao",description:"No description",source:"@site/docs/schema/subscriptions/tribute-dao.mdx",sourceDirName:"schema/subscriptions",slug:"/schema/subscriptions/tribute-dao",permalink:"/tribute-contracts/docs/schema/subscriptions/tribute-dao",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/subscriptions/tribute-dao.mdx",version:"current",frontMatter:{id:"tribute-dao",title:"tributeDao"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"tributeDao(\n  id: ID!\n  block: Block_height\n): TributeDao\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("h4",{id:"block-block_height"},(0,i.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,i.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,i.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,i.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"tributedao"},"[",(0,i.kt)("inlineCode",{parentName:"h4"},"TributeDao"),"]"))}p.isMDXComponent=!0}}]);