"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94501],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,k=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},46696:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Upgrading Workloads"},p=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",title:"Upgrading Workloads",description:"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Upgrading Workloads"},sidebar:"tutorialSidebar",previous:{title:"Rolling Back Workloads",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},next:{title:"Adding a Sidecar",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"}},l={},d=[],c={toc:d};function g(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a new version of an application image is released on Docker Hub, you can upgrade any workloads running a previous version of the application to the new one."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the cluster where you want to upgrade a workload and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"p"},"Workload"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the workload that you want to upgrade and select ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the ",(0,a.kt)("strong",{parentName:"p"},"Container Image")," and any options that you want to change.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review and edit the workload's ",(0,a.kt)("strong",{parentName:"p"},"Scaling and Upgrade Policy"),"."),(0,a.kt)("p",{parentName:"li"},"These options control how the upgrade rolls out to containers that are currently running. For example, for scalable deployments, you can choose whether you want to stop old pods before deploying new ones, or vice versa, as well as the upgrade batch size.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The workload begins upgrading its containers, per your specifications. Note that scaling up the deployment or updating the upgrade/scaling policy won't result in the pods recreation."))}g.isMDXComponent=!0}}]);