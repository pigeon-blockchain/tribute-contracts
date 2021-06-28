(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6237],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6411:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"local-development",title:"Development"},p={unversionedId:"subgraph/setup/local-development",id:"subgraph/setup/local-development",isDocsHomePage:!1,title:"Development",description:"The Graph preconfigured Docker image for running a Graph Node.",source:"@site/docs/subgraph/setup/LocalDevelopment.md",sourceDirName:"subgraph/setup",slug:"/subgraph/setup/local-development",permalink:"/tribute-contracts/docs/subgraph/setup/local-development",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/subgraph/setup/LocalDevelopment.md",version:"current",frontMatter:{id:"local-development",title:"Development"},sidebar:"docs",previous:{title:"Definition",permalink:"/tribute-contracts/docs/subgraph/definition"},next:{title:"Deployment",permalink:"/tribute-contracts/docs/subgraph/deployment"}},c=[{value:"Terminal 1",id:"terminal-1",children:[]},{value:"Terminal 2",id:"terminal-2",children:[]},{value:"Terminal 3",id:"terminal-3",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Graph preconfigured Docker image for running a Graph Node.")),(0,o.kt)("h2",{id:"terminal-1"},"Terminal 1"),(0,o.kt)("p",null,"Start ganache with in one terminal window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ganache-cli --host 0.0.0.0 \\\n  --port 7545 \\\n  --networkId 1337 \\\n  --blockTime 10 \\\n  --mnemonic "twelve words including quotes"\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that -h 0.0.0.0 is necessary for Ganache to be accessible from within Docker and from other machines. By default, Ganache only binds to 127.0.0.1, which can only be accessed from the host machine that Ganache runs on. ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/quick-start#1.-set-up-ganache-cli"},"The Graph"),"."))),(0,o.kt)("h2",{id:"terminal-2"},"Terminal 2"),(0,o.kt)("p",null,"In the new terminal window run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy:ganache\n")),(0,o.kt)("p",null,"and copy the ",(0,o.kt)("strong",{parentName:"p"},"DaoFactory")," contract address and block number into the respective ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"startBlock"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure the block number starts from 1 previous block, for example, if the block number is 19 add 18 as the ",(0,o.kt)("strong",{parentName:"p"},"startBlock")," for the ",(0,o.kt)("strong",{parentName:"p"},"DaoFactory")," source in ",(0,o.kt)("inlineCode",{parentName:"p"},"subgraph/subgraph.yaml")))),(0,o.kt)("p",null,"Then execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/\ndocker-compose up\n")),(0,o.kt)("p",null,"This will start IPFS, Postgres and Graph Node in Docker and create persistent\ndata directories for IPFS and Postgres in ",(0,o.kt)("inlineCode",{parentName:"p"},"./data/ipfs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./data/postgres"),". You\ncan access these via:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Graph Node:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GraphiQL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/")),(0,o.kt)("li",{parentName:"ul"},"HTTP: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/subgraphs/name/<subgraph-name>")),(0,o.kt)("li",{parentName:"ul"},"WebSockets: ",(0,o.kt)("inlineCode",{parentName:"li"},"ws://localhost:8001/subgraphs/name/<subgraph-name>")),(0,o.kt)("li",{parentName:"ul"},"Admin: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8020/")))),(0,o.kt)("li",{parentName:"ul"},"IPFS:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1:5001")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"/ip4/127.0.0.1/tcp/5001")))),(0,o.kt)("li",{parentName:"ul"},"Postgres:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postgresql://graph-node:let-me-in@localhost:5432/graph-node"))))),(0,o.kt)("h2",{id:"terminal-3"},"Terminal 3"),(0,o.kt)("p",null,"Once this is up and running, you can create and deploy your subgraph to the running Graph Node. To do this, from the project root directory, ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle compile")," to build the contracts, if they aren't already built."),(0,o.kt)("p",null,"Then from the ",(0,o.kt)("inlineCode",{parentName:"p"},"subgraph")," directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm ci")," to install dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run codegen")," to run the code generation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn create-local")," to allocate the subgraph name in the Graph Node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn deploy-local")," to deploy the subgraph to your local Graph Node")))}m.isMDXComponent=!0}}]);