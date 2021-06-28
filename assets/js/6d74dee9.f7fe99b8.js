(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3218],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"access-control",title:"Access Control Layer"},c={unversionedId:"intro/design/access-control",id:"intro/design/access-control",isDocsHomePage:!1,title:"Access Control Layer",description:"The Access Control Layer (ACL) is implemented using Access Flags to indicate which permissions an Adapter must have in order to access and modify the DAO state.",source:"@site/docs/intro/design/AccessControlLayer.md",sourceDirName:"intro/design",slug:"/intro/design/access-control",permalink:"/tribute-contracts/docs/intro/design/access-control",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/intro/design/AccessControlLayer.md",version:"current",frontMatter:{id:"access-control",title:"Access Control Layer"},sidebar:"docs",previous:{title:"Adapters",permalink:"/tribute-contracts/docs/intro/design/adapters/introduction"},next:{title:"Installation",permalink:"/tribute-contracts/docs/tutorial/dao/installation"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Access Control Layer (ACL) is implemented using Access Flags to indicate which permissions an Adapter must have in order to access and modify the DAO state."),(0,o.kt)("p",null,"A flag is essentially 1 bit of a 256 bits array controlled by two helper functions defined in the DAO Constants Contract."),(0,o.kt)("p",null,"In order to enable an access flag, one must compute the flag value using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setFlag")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setFlag(\n  uint256 flags,\n  uint256 flag,\n  bool value\n) public pure returns (uint256) {\n  if (getFlag(flags, flag) != value) {\n    if (value) {\n      return flags + 2**flag;\n    } else {\n      return flags - 2**flag;\n    }\n  } else {\n    return flags;\n  }\n}\n\n")),(0,o.kt)("p",null,"Read the value of the flag to check if it is enabled or not. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFlag")," helper function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getFlag(uint256 flags, uint256 flag) public pure returns (bool) {\n  return (flags >> uint8(flag)) % 2 == 1;\n}\n\n")),(0,o.kt)("p",null,"The Access Flags are defined in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/core/dao-registry#access-flags"},"DAO Registry Contract"))," use the modifier ",(0,o.kt)("inlineCode",{parentName:"p"},"hasAccess"),". That's a common pattern that you can also use. For example, suposing you created an Adapter that calls the DAO Registry function ",(0,o.kt)("inlineCode",{parentName:"p"},"potentialNewMember"),", this function uses the modifier ",(0,o.kt)("inlineCode",{parentName:"p"},"hasAccess(this, AclFlag.NEW_MEMBER)"),", it means that your Adapter needs to be configured with the Access Flag ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW_MEMBER"),", otherwise the call will revert."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Access Flags of each Adapter must be provided to the DAOFactory when the ",(0,o.kt)("inlineCode",{parentName:"p"},"daoFactory.addAdapters")," function is called. These flags will grant the access to the DAO Registry contract, and the same process must be done to grant the access of each Adapter to the Extensions it may use (function",(0,o.kt)("inlineCode",{parentName:"p"},"daoFactory.configureExtension"),")."))),(0,o.kt)("p",null,"In order to create an Adapter with the proper Access Flags one needs to first map out all the functions that the Adapter will be calling in the DAO Registry and/or Extensions, and provide these Access Flags using the DAO Factory as described above."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each Extension defines its own Access Flags. Checkout the documentation of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/intro/design/extensions/introduction#existing-extensions"},"existing Extensions"))," to make sure you configured your adapters with the correct flags."))))}d.isMDXComponent=!0}}]);