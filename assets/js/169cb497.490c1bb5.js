"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84284],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65615:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Setting up Local System Charts for Air Gapped Installations"},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/local-system-charts",id:"version-2.6/getting-started/installation-and-upgrade/resources/local-system-charts",title:"Setting up Local System Charts for Air Gapped Installations",description:"The System Charts repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/local-system-charts.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/local-system-charts",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/local-system-charts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/local-system-charts.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Setting up Local System Charts for Air Gapped Installations"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Password",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/bootstrap-password"},next:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/v2.6/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"}},u={},p=[{value:"Using Local System Charts",id:"using-local-system-charts",level:2}],d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts"},"System Charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS."),(0,o.kt)("p",null,"In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag."),(0,o.kt)("h2",{id:"using-local-system-charts"},"Using Local System Charts"),(0,o.kt)("p",null,"A local copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," has been packaged into the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_SYSTEM_CATALOG=bundled"),", which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub."),(0,o.kt)("p",null,"Example commands for a Rancher installation with a bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"system-charts")," are included in the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installation")," instructions for Docker and Helm installs."))}g.isMDXComponent=!0}}]);