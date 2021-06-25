(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5557:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={id:"vote",title:"Vote"},p={unversionedId:"schema/objects/vote",id:"schema/objects/vote",isDocsHomePage:!1,title:"Vote",description:"No description",source:"@site/docs/schema/objects/vote.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/vote",permalink:"/tribute-contracts/docs/schema/objects/vote",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/objects/vote.mdx",version:"current",frontMatter:{id:"vote",title:"Vote"}},s=[{value:"Fields",id:"fields",children:[]}],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Vote {\n  id: ID!\n  nbNo: BigInt!\n  nbYes: BigInt!\n  adapterName: VotingAdapterName!\n  adapterAddress: Bytes!\n  proposal: Proposal\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"Unique identifier and primary key of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Vote")," entity"),(0,a.kt)("h4",{id:"nbno"},(0,a.kt)("inlineCode",{parentName:"h4"},"nbNo")),(0,a.kt)("h4",{id:"nbyes"},(0,a.kt)("inlineCode",{parentName:"h4"},"nbYes")),(0,a.kt)("h4",{id:"adaptername-votingadaptername"},(0,a.kt)("inlineCode",{parentName:"h4"},"adapterName")," (","[",(0,a.kt)("inlineCode",{parentName:"h4"},"VotingAdapterName!"),"]"),(0,a.kt)("h4",{id:"adapteraddress"},(0,a.kt)("inlineCode",{parentName:"h4"},"adapterAddress")),(0,a.kt)("h4",{id:"proposal-proposal"},(0,a.kt)("inlineCode",{parentName:"h4"},"proposal")," (","[",(0,a.kt)("inlineCode",{parentName:"h4"},"Proposal"),"]"))}d.isMDXComponent=!0}}]);