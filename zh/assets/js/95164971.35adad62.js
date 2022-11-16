"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57235],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33614:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"\u8fd8\u539f Rancher"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",id:"version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",title:"\u8fd8\u539f Rancher",description:"\u672c\u9875\u6982\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528 Rancher \u6267\u884c\u6062\u590d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u8fd8\u539f Rancher"},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd Rancher",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},next:{title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"}},l={},u=[{value:"\u4f7f\u7528 Rancher 2.6.4+ \u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4",id:"\u4f7f\u7528-rancher-264-\u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4",level:3},{value:"\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u521b\u5efa-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:3},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:3},{value:"\u6e05\u7406",id:"\u6e05\u7406",level:3},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:3}],d={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u9875\u6982\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528 Rancher \u6267\u884c\u6062\u590d\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6309\u7167\u6b64\u9875\u9762\u4e0a\u7684\u8bf4\u660e\u5728\u5df2\u5907\u4efd\u7684\u540c\u4e00\u96c6\u7fa4\u4e0a\u8fd8\u539f Rancher\u3002\u8981\u628a Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4\uff0c\u8bf7\u53c2\u7167\u6b65\u9aa4",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u8fc1\u79fb Rancher"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u76f8\u540c\u8bbe\u7f6e\u8fd8\u539f Rancher \u65f6\uff0coperator \u5c06\u5728\u8fd8\u539f\u5f00\u59cb\u65f6\u7f29\u51cf Rancher deployment\uff0c\u8fd8\u539f\u5b8c\u6210\u540e\u53c8\u4f1a\u6269\u5c55 deployment\u3002\u56e0\u6b64\uff0cRancher \u5728\u8fd8\u539f\u671f\u95f4\u5c06\u4e0d\u53ef\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9700\u8981\u5728\u5347\u7ea7\u540e\u5c06 Rancher \u8fd8\u539f\u5230\u5148\u524d\u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"\u56de\u6eda"),"\u3002")))),(0,o.kt)("h3",{id:"\u4f7f\u7528-rancher-264-\u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4"},"\u4f7f\u7528 Rancher 2.6.4+ \u8fdb\u884c\u56de\u6eda\u7684\u5176\u4ed6\u6b65\u9aa4"),(0,o.kt)("p",null,"\u5728 Rancher v2.6.4 \u4e2d\uff0ccluster-api \u6a21\u5757\u5df2\u4ece v0.4.4 \u5347\u7ea7\u5230 v1.0.2\uff0c\u5176\u4e2d CAPI CRD \u7684 apiVersion \u5df2\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1alpha4")," \u5347\u7ea7\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1beta1"),"\u3002\u7531\u4e8e\u9700\u8981\u56de\u6eda\u7684 CRD \u5728 v1beta1 \u4e2d\u4e0d\u518d\u53ef\u7528\uff0c\u56e0\u6b64\u4ece Rancher v2.6.4 \u56de\u6eda\u5230\u4efb\u4f55 Rancher v2.6.x \u5148\u524d\u7248\u672c\u90fd\u4f1a\u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u5728\u8fd8\u539f\u6216\u56de\u6eda",(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u5148\u8fd0\u884c Rancher \u8d44\u6e90\u6e05\u7406\u811a\u672c\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e24\u4e2a\u811a\u672c\u6765\u5e2e\u52a9\u4f60\u8fdb\u884c\u64cd\u4f5c\uff0c\u4e00\u4e2a\u7528\u4e8e\u6e05\u7406\u96c6\u7fa4\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup.sh"),")\uff0c\u4e00\u4e2a\u7528\u4e8e\u68c0\u67e5\u96c6\u7fa4\u4e2d\u4e0e Rancher \u76f8\u5173\u7684\u8d44\u6e90 (",(0,o.kt)("inlineCode",{parentName:"p"},"verify.sh"),"\uff09\u3002\u6709\u5173\u6e05\u7406\u811a\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"rancher/rancher-cleanup repo"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Rancher \u5c06\u5728\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")," \u811a\u672c\u65f6\u5173\u95ed\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5220\u9664 Rancher \u521b\u5efa\u7684\u8d44\u6e90\u3002"))),(0,o.kt)("p",null,"\u989d\u5916\u51c6\u5907\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher-cleanup/blob/main/README.md"},"\u8bf4\u660e"),"\u8fd0\u884c\u811a\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/"},"\u8bf4\u660e"),"\u5728\u73b0\u6709\u96c6\u7fa4\u4e0a\u5b89\u88c5 rancher-backup Helm Chart \u5e76\u6062\u590d\u4e4b\u524d\u7684\u72b6\u6001\u3002",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u7701\u7565\u6b65\u9aa4 3\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u5230\u7b2c 4 \u6b65\u65f6\uff0c\u5728\u8981\u56de\u6eda\u7684\u672c\u5730\u96c6\u7fa4\u4e0a\u5b89\u88c5\u6240\u9700\u7684 Rancher 2.6.x \u7248\u672c\u3002")))),(0,o.kt)("h3",{id:"\u521b\u5efa-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,o.kt)("p",null,"\u8fd8\u539f\u662f\u901a\u8fc7\u521b\u5efa Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u5e76\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002Rancher Server \u8fd0\u884c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u4e2d\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Rancher \u5907\u4efd > \u8fd8\u539f"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8868\u5355\u6216 YAML \u521b\u5efa Restore\u3002\u5982\u9700\u83b7\u53d6\u4f7f\u7528\u8868\u5355\u521b\u5efa Restore \u8d44\u6e90\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/restore-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/examples"},"\u793a\u4f8b"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u4f7f\u7528 YAML \u7f16\u8f91\u5668\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa > \u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002\u8f93\u5165 Restore YAML\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"\u5982\u9700\u83b7\u5f97\u914d\u7f6e Restore \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/restore-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/examples"},"\u793a\u4f8b"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1arancher-operator \u5728\u8fd8\u539f\u8fc7\u7a0b\u4e2d\u5c06 Rancher deployment \u7f29\u5bb9\uff0c\u5e76\u5728\u8fd8\u539f\u5b8c\u6210\u540e\u5c06\u5b83\u91cd\u65b0\u6269\u5bb9\u3002\u8d44\u6e90\u8fd8\u539f\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08CRD\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u8303\u56f4\u8d44\u6e90"),(0,o.kt)("li",{parentName:"ol"},"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90")),(0,o.kt)("h3",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,o.kt)("p",null,"\u5982\u9700\u67e5\u770b\u8fd8\u539f\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u8bf7\u68c0\u67e5 Operator \u7684\u65e5\u5fd7\u3002\u67e5\u770b\u65e5\u5fd7\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,o.kt)("h3",{id:"\u6e05\u7406"},"\u6e05\u7406"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 kubectl \u521b\u5efa\u4e86 Restore \u8d44\u6e90\uff0c\u8bf7\u5220\u9664\u8be5\u8d44\u6e90\u4ee5\u9632\u6b62\u4e0e\u672a\u6765\u7684\u8fd8\u539f\u53d1\u751f\u547d\u540d\u51b2\u7a81\u3002"),(0,o.kt)("h3",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6062\u590d\u5907\u4efd\u540e\uff0cRancher \u65e5\u5fd7\u4f1a\u663e\u793a\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021/10/05 21:30:45 [ERROR] error syncing 'c-89d82/m-4067aa68dd78': handler rke-worker-upgrader: clusters.management.cattle.io \"c-89d82\" not found, requeuing\n")),(0,o.kt)("p",null,"\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u7684\u539f\u56e0\u662f\uff0c\u521a\u521a\u8fd8\u539f\u7684\u67d0\u4e2a\u8d44\u6e90\u6709 finalizer\uff0c\u4f46\u76f8\u5173\u7684\u8d44\u6e90\u5df2\u7ecf\u88ab\u5220\u9664\uff0c\u5bfc\u81f4\u5904\u7406\u7a0b\u5e8f\u65e0\u6cd5\u627e\u5230\u8be5\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u6d88\u9664\u8fd9\u4e9b\u9519\u8bef\uff0c\u4f60\u9700\u8981\u627e\u5230\u5e76\u5220\u9664\u5bfc\u81f4\u9519\u8bef\u7684\u8d44\u6e90\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/35050#issuecomment-937968556"},"\u6b64\u5904"),"\u3002"))}m.isMDXComponent=!0}}]);