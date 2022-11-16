"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80475],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003"},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",id:"version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",description:"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"},next:{title:"Monitoring \u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/monitoring-alerting-guides"}},p={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9650\u5236","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927 CPU \u91cf\uff08\u4ee5",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"\u6beb\u6838"),"\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9884\u7559","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f CPU \u91cf\uff08\u4ee5\u6beb\u6838\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9650\u5236","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9884\u7559","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u9884\u7559"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5b58\u50a8\u91cf\uff08\u4ee5\u5343\u5146\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u5668"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8282\u70b9\u7aef\u53e3"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8282\u70b9\u7aef\u53e3\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pod"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5728\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u4ee5\u975e\u7ec8\u7aef\u72b6\u6001\u5b58\u5728\u7684 pod \u7684\u6700\u5927\u6570\u91cf\uff08\u5373 ",(0,o.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," \u7b49\u4e8e true \u7684 pod\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 service \u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigMap"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684 ConfigMap \u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5377\u58f0\u660e"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6301\u4e45\u5377\u58f0\u660e\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReplicationController"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 ReplicationController \u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5bc6\u6587"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927\u5bc6\u6587\u6570\u91cf")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("strong",{parentName:"h5"},(0,o.kt)("sup",null,"*")))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u4f60\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6e\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\uff0c\u4ee5\u907f\u514d\u4e3a\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u663e\u5f0f\u8bbe\u7f6e\u8fd9\u4e9b\u9650\u5236\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes \u6587\u6863"),"\u3002"))))}m.isMDXComponent=!0}}]);