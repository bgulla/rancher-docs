"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73947],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(t),v=a,k=h["".concat(o,".").concat(v)]||h[v]||c[v]||i;return t?n.createElement(k,l(l({ref:r},u),{},{components:t})):n.createElement(k,l({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2041:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],s={title:"\u5728 vSphere \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4"},o=void 0,p={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",id:"version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",title:"\u5728 vSphere \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Rancher \u5728 vSphere \u4e2d\u5b89\u88c5 RKE Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u5728 vSphere \u4e2d\u914d\u7f6e Kubernetes \u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa vSphere \u96c6\u7fa4",permalink:"/zh/v2.6/pages-for-subheaders/vsphere"},next:{title:"\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u51ed\u8bc1",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"}},u={},c=[{value:"\u5728 vSphere \u4e2d\u521b\u5efa\u51ed\u8bc1",id:"\u5728-vsphere-\u4e2d\u521b\u5efa\u51ed\u8bc1",level:3},{value:"\u7f51\u7edc\u6743\u9650",id:"\u7f51\u7edc\u6743\u9650",level:3},{value:"\u7528\u4e8e vSphere API \u8bbf\u95ee\u7684\u6709\u6548 ESXi \u8bb8\u53ef\u8bc1",id:"\u7528\u4e8e-vsphere-api-\u8bbf\u95ee\u7684\u6709\u6548-esxi-\u8bb8\u53ef\u8bc1",level:3},{value:"\u5177\u6709 DRS \u7684\u96c6\u7fa4\u7684 VM-VM \u5173\u8054\u89c4\u5219",id:"\u5177\u6709-drs-\u7684\u96c6\u7fa4\u7684-vm-vm-\u5173\u8054\u89c4\u5219",level:3},{value:"\u521b\u5efa vSphere \u96c6\u7fa4",id:"\u521b\u5efa-vsphere-\u96c6\u7fa4",level:2},{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1",level:3},{value:"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f",id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f",level:3},{value:"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",level:3},{value:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4",id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4",level:2}],h={toc:c};function v(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Rancher \u5728 vSphere \u4e2d\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5728 Rancher \u4e2d\u8bbe\u7f6e\u4f60\u7684 vSphere \u4e91\u51ed\u8bc1\u3002\u7136\u540e\uff0c\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6a21\u677f\uff0cRancher \u5c06\u4f7f\u7528\u8be5\u6a21\u677f\u5728 vSphere \u4e2d\u914d\u7f6e\u8282\u70b9\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u5728 Rancher \u4e2d\u521b\u5efa\u4e00\u4e2a vSphere \u96c6\u7fa4\uff0c\u5e76\u5728\u914d\u7f6e\u65b0\u96c6\u7fa4\u65f6\u4e3a\u96c6\u7fa4\u5b9a\u4e49\u8282\u70b9\u6c60\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u6709\u4e00\u4e2a etcd\u3001controlplane \u6216 worker \u7684 Kubernetes \u89d2\u8272\u3002Rancher \u4f1a\u5728\u65b0\u8282\u70b9\u4e0a\u5b89\u88c5 RKE Kubernetes\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u8282\u70b9\u6c60\u5b9a\u4e49\u7684 Kubernetes \u89d2\u8272\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u914d\u7f6e vSphere \u8282\u70b9\u6a21\u677f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5728 Rancher \u4e2d\u914d\u7f6e RKE Kubernetes \u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8F%82%E8%80%83"},"\u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vsphere-%E4%B8%AD%E7%9A%84%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"vSphere \u4e2d\u7684\u51c6\u5907\u5de5\u4f5c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA-vsphere-%E9%9B%86%E7%BE%A4"},"\u521b\u5efa vSphere \u96c6\u7fa4"))),(0,i.kt)("h1",{id:"vsphere-\u4e2d\u7684\u51c6\u5907\u5de5\u4f5c"},"vSphere \u4e2d\u7684\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u8bbe\u7f6e vSphere \u7684\u8981\u6c42\uff0c\u4ee5\u4fbf Rancher \u53ef\u4ee5\u914d\u7f6e\u865a\u62df\u673a\u548c\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u5df2\u4f7f\u7528 vSphere Web Services API 6.5 \u7248\u672c\u8fdb\u884c\u8bb0\u5f55\u548c\u6d4b\u8bd5\u3002"),(0,i.kt)("h3",{id:"\u5728-vsphere-\u4e2d\u521b\u5efa\u51ed\u8bc1"},"\u5728 vSphere \u4e2d\u521b\u5efa\u51ed\u8bc1"),(0,i.kt)("p",null,"\u5728\u7ee7\u7eed\u521b\u5efa\u96c6\u7fa4\u4e4b\u524d\uff0c\u786e\u4fdd\u4f60\u7684 vSphere \u7528\u6237\u62e5\u6709\u8db3\u591f\u7684\u6743\u9650\u3002\u8bbe\u7f6e\u8282\u70b9\u6a21\u677f\u65f6\uff0c\u6a21\u677f\u5c06\u9700\u8981\u4f7f\u7528\u8fd9\u4e9b vSphere \u51ed\u8bc1\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 vSphere \u4e2d\u521b\u5efa\u5177\u6709\u6240\u9700\u6743\u9650\u7684\u7528\u6237\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6b64",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},"\u64cd\u4f5c\u6307\u5357"),"\u3002\u8fd9\u4e9b\u6b65\u9aa4\u4f1a\u4ea7\u751f\u9700\u8981\u5411 Rancher \u63d0\u4f9b\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4ece\u800c\u5141\u8bb8 Rancher \u5728 vSphere \u4e2d\u914d\u7f6e\u8d44\u6e90\u3002"),(0,i.kt)("h3",{id:"\u7f51\u7edc\u6743\u9650"},"\u7f51\u7edc\u6743\u9650"),(0,i.kt)("p",null,"\u5fc5\u987b\u786e\u4fdd\u8fd0\u884c Rancher Server \u7684\u4e3b\u673a\u80fd\u591f\u5efa\u7acb\u4ee5\u4e0b\u7f51\u7edc\u8fde\u63a5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230 vCenter Server \u4e0a\u7684 vSphere API\uff08\u901a\u5e38\u662f\u7aef\u53e3 443/TCP\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u7528\u4e8e\u5b9e\u4f8b\u5316\u96c6\u7fa4\u865a\u62df\u673a\u7684\u6240\u6709 ESXi \u4e3b\u673a\u4e0a\u7684 Host API\uff08\u7aef\u53e3 443/TCP\uff09\uff08",(0,i.kt)("em",{parentName:"li"},"\u4ec5\u5728\u4f7f\u7528 ISO \u521b\u5efa\u6a21\u5f0f\u65f6\u9700\u8981"),"\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u521b\u5efa\u7684 VM \u4e0a\u7684 22/TCP \u548c 2376/TCP \u7aef\u53e3\u3002")),(0,i.kt)("p",null,"\u6709\u5173\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e0a\u521b\u5efa\u8282\u70b9\u7684\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"},"\u8282\u70b9\u7f51\u7edc\u8981\u6c42"),"\u3002"),(0,i.kt)("h3",{id:"\u7528\u4e8e-vsphere-api-\u8bbf\u95ee\u7684\u6709\u6548-esxi-\u8bb8\u53ef\u8bc1"},"\u7528\u4e8e vSphere API \u8bbf\u95ee\u7684\u6709\u6548 ESXi \u8bb8\u53ef\u8bc1"),(0,i.kt)("p",null,"\u514d\u8d39\u7684 ESXi \u8bb8\u53ef\u8bc1\u4e0d\u652f\u6301 API \u8bbf\u95ee\u3002vSphere Server \u5fc5\u987b\u5177\u6709\u6709\u6548\u6216\u8bc4\u4f30\u7684 ESXi \u8bb8\u53ef\u8bc1\u3002"),(0,i.kt)("h3",{id:"\u5177\u6709-drs-\u7684\u96c6\u7fa4\u7684-vm-vm-\u5173\u8054\u89c4\u5219"},"\u5177\u6709 DRS \u7684\u96c6\u7fa4\u7684 VM-VM \u5173\u8054\u89c4\u5219"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u542f\u7528\u4e86 DRS\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-7297C302-378F-4AF2-9BD6-6EDB1E0A850A.html"},"VM-VM \u5173\u8054\u89c4\u5219"),"\u3002\u8fd9\u4e9b\u89c4\u5219\u5141\u8bb8\u5206\u914d\u4e86 etcd \u548c controlplane \u89d2\u8272\u7684\u865a\u62df\u673a\u5728\u5206\u914d\u7ed9\u4e0d\u540c\u8282\u70b9\u6c60\u65f6\uff0c\u5728\u5355\u72ec\u7684 ESXi \u4e3b\u673a\u4e0a\u8fd0\u884c\u3002\u8fd9\u79cd\u505a\u6cd5\u53ef\u786e\u4fdd\u5355\u4e2a\u7269\u7406\u673a\u7684\u6545\u969c\u4e0d\u4f1a\u5f71\u54cd\u8fd9\u4e9b\u5e73\u9762\u7684\u53ef\u7528\u6027\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa-vsphere-\u96c6\u7fa4"},"\u521b\u5efa vSphere \u96c6\u7fa4"),(0,i.kt)("p",null,"\u5728 Rancher \u4e2d\u521b\u5efa vSphere \u96c6\u7fa4\u7684\u64cd\u4f5c\u53d6\u51b3\u4e8e Rancher \u7684\u7248\u672c\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E4%BA%91%E5%87%AD%E8%AF%81"},"\u521b\u5efa\u4e91\u51ed\u8bc1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-%E4%BD%BF%E7%94%A8%E4%BA%91%E5%87%AD%E8%AF%81%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-%E4%BD%BF%E7%94%A8%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E5%85%B7%E6%9C%89%E8%8A%82%E7%82%B9%E6%B1%A0%E7%9A%84%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"))),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"VMware vSphere"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4f60\u7684 vSphere \u51ed\u8bc1\u3002\u5982\u9700\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"\u8282\u70b9\u6a21\u677f\u914d\u7f6e\u53c2\u8003"),"\u4e2d\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d26\u53f7\u8bbf\u95ee"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e\u8282\u70b9\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u8282\u70b9\u6a21\u677f\u6216\u96c6\u7fa4\u4e2d\u590d\u7528\u8fd9\u4e9b\u51ed\u8bc1\u3002"),(0,i.kt)("h3",{id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f"},"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u8282\u70b9\u6a21\u677f"),(0,i.kt)("p",null,"\u4e3a vSphere \u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u4f1a\u5141\u8bb8 Rancher \u5728 vSphere \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u5176\u4ed6\u96c6\u7fa4\u53ef\u4ee5\u590d\u7528\u8282\u70b9\u6a21\u677f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"RKE1 \u914d\u7f6e > \u8282\u70b9\u6a21\u677f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6a21\u677f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"vSphere"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u586b\u5199 vSphere \u7684\u8282\u70b9\u6a21\u677f\u3002\u6709\u5173\u586b\u5199\u8868\u683c\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 vSphere \u8282\u70b9\u6a21\u677f",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("h3",{id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"},"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"),(0,i.kt)("p",null,"\u4f7f\u7528 Rancher \u5728 vSphere \u4e2d\u521b\u5efa Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"VMware vSphere"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u5e76\u4f7f\u7528\u4f60\u7684 vSphere \u4e91\u51ed\u8bc1\u3002\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u7ee7\u7eed"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u8981\u67e5\u770b\u66f4\u591a\u96c6\u7fa4\u9009\u9879\uff0c\u8bf7\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u3002\u5982\u9700\u83b7\u53d6\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u60f3\u7a0d\u540e\u52a8\u6001\u914d\u7f6e\u6301\u4e45\u5b58\u50a8\u6216\u5176\u4ed6\u57fa\u7840\u8bbe\u65bd\uff0c\u4f60\u9700\u8981\u4fee\u6539\u96c6\u7fa4 YAML \u6587\u4ef6\u6765\u542f\u7528 vSphere \u4e91\u63d0\u4f9b\u5546\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"},"\u6811\u5185 vSphere cloud provider \u6587\u6863"),"\u548c",(0,i.kt)("a",{parentName:"li",href:"../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere"},"\u6811\u5916 vSphere cloud provider \u6587\u6863"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u5230\u4f60\u7684\u96c6\u7fa4\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u6765\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u6709\u5173\u8282\u70b9\u6c60\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4e3a\u8282\u70b9\u5206\u914d Kubernetes \u89d2\u8272\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%B1%A0"},"\u672c\u8282"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u5e76\u786e\u8ba4\u4f60\u7684\u9009\u9879\u3002\u7136\u540e\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,i.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,i.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,i.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,i.kt)("h2",{id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"},"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"),(0,i.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u8bbf\u95ee\u96c6\u7fa4\u3002\u6700\u4f73\u5b9e\u8df5\u5efa\u8bae\u4f60\u8bbe\u7f6e\u4ee5\u4e0b\u8bbf\u95ee\u96c6\u7fa4\u7684\u5907\u7528\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%AB%99%E4%BD%BF%E7%94%A8-kubectl-%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5728\u4f60\u7684\u5de5\u4f5c\u7ad9\u4e0a\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u901a\u8fc7 Rancher Server \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e Rancher \u4f1a\u8ba9\u4f60\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002\u6b64\u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u6ca1\u6709 Rancher UI \u7684\u60c5\u51b5\u4e0b\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u4f7f\u7528\u6388\u6743\u7684\u96c6\u7fa4\u7aef\u70b9\u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u76f4\u63a5\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u6b64\u66ff\u4ee3\u65b9\u6cd5\u6765\u8bbf\u95ee\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u5728\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher \u65f6\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u5b58\u50a8"),"\uff1a\u6709\u5173\u5982\u4f55\u4f7f\u7528 Rancher \u5728 vSphere \u4e2d\u914d\u7f6e\u5b58\u50a8\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/provisioning-storage-examples"},"\u672c\u8282"),"\u3002\u8981\u5728 vSphere \u4e2d\u52a8\u6001\u914d\u7f6e\u5b58\u50a8\uff0c\u4f60\u5fc5\u987b\u542f\u7528 vSphere \u4e91\u63d0\u4f9b\u5546\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"},"\u6811\u5185 vSphere cloud provider \u6587\u6863"),"\u548c",(0,i.kt)("a",{parentName:"li",href:"../../../../../how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere"},"\u6811\u5916 vSphere cloud provider \u6587\u6863"),"\u3002")))}v.isMDXComponent=!0}}]);