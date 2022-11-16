"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83053],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return N}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=m(n),N=r,s=d["".concat(o,".").concat(N)]||d[N]||u[N]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96983:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={title:"\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668"},o=void 0,m={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",id:"version-2.6/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",title:"\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 Amazon EC2 \u670d\u52a1\u4e2d\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7528\u4e8e\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 EC2 \u4e0a\u7684\u591a\u4e2a\u5b9e\u4f8b\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",permalink:"/zh/v2.6/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e NGINX \u8d1f\u8f7d\u5747\u8861\u5668",permalink:"/zh/v2.6/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},next:{title:"\u5728 Rancher \u4e2d\u8bbe\u7f6e Kubernetes \u96c6\u7fa4",permalink:"/zh/v2.6/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"}},k={},u=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"1. \u521b\u5efa\u76ee\u6807\u7ec4",id:"1-\u521b\u5efa\u76ee\u6807\u7ec4",level:2},{value:"\u76ee\u6807\u7ec4\uff08TCP \u7aef\u53e3 443\uff09",id:"\u76ee\u6807\u7ec4tcp-\u7aef\u53e3-443",level:4},{value:"\u76ee\u6807\u7ec4\uff08TCP \u7aef\u53e3 80\uff09",id:"\u76ee\u6807\u7ec4tcp-\u7aef\u53e3-80",level:4},{value:"2. \u6ce8\u518c\u76ee\u6807",id:"2-\u6ce8\u518c\u76ee\u6807",level:2},{value:"3. \u521b\u5efa NLB",id:"3-\u521b\u5efa-nlb",level:2},{value:"\u6b65\u9aa4 1\uff1a\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",id:"\u6b65\u9aa4-1\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",level:3},{value:"\u6b65\u9aa4 2\uff1a\u914d\u7f6e\u8def\u7531",id:"\u6b65\u9aa4-2\u914d\u7f6e\u8def\u7531",level:3},{value:"\u6b65\u9aa4 3\uff1a\u6ce8\u518c\u76ee\u6807",id:"\u6b65\u9aa4-3\u6ce8\u518c\u76ee\u6807",level:3},{value:"\u6b65\u9aa4 4\uff1a\u5ba1\u6838",id:"\u6b65\u9aa4-4\u5ba1\u6838",level:3}],d={toc:u};function N(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 Amazon EC2 \u670d\u52a1\u4e2d\u8bbe\u7f6e Amazon NLB \u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7528\u4e8e\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 EC2 \u4e0a\u7684\u591a\u4e2a\u5b9e\u4f8b\u4e2d\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u793a\u4f8b\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230\u4e09\u4e2a Rancher Server \u8282\u70b9\u3002\u5982\u679c Rancher \u5b89\u88c5\u5728 RKE Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5219\u9700\u8981\u4e09\u4e2a\u8282\u70b9\u3002\u5982\u679c Rancher \u5b89\u88c5\u5728 K3s Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5219\u53ea\u9700\u8981\u4e24\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u7684\u53ea\u662f\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u3002\u5176\u4ed6\u8d1f\u8f7d\u5747\u8861\u5668\u5982\u4f20\u7edf\u8d1f\u8f7d\u8def\u7531\u5668\uff08Classic Load Balancer\uff09\u548c\u5e94\u7528\u8d1f\u8f7d\u8def\u7531\u5668\uff08Application Load Balancer\uff09\uff0c\u4e5f\u53ef\u4ee5\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Rancher Server \u8282\u70b9\u3002"),(0,l.kt)("p",null,"Rancher \u4ec5\u652f\u6301\u4f7f\u7528 Amazon NLB \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"TCP")," \u6a21\u5f0f\u7ec8\u6b62 443 \u7aef\u53e3\u7684\u6d41\u91cf\uff0c\u800c\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"TLS")," \u6a21\u5f0f\u3002\u8fd9\u8bd5\u56e0\u4e3a\u5728 NLB \u7ec8\u6b62\u65f6\uff0cNLB \u4e0d\u4f1a\u5c06\u6b63\u786e\u7684\u6807\u5934\u6ce8\u5165\u8bf7\u6c42\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u7531 Amazon Certificate Manager (ACM) \u6258\u7ba1\u7684\u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528 ALB\u3002"),(0,l.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,l.kt)("p",null,"\u4f60\u5df2\u5728 EC2 \u4e2d\u521b\u5efa\u4e86 Linux \u5b9e\u4f8b\u3002\u6b64\u5916\uff0c\u8d1f\u8f7d\u5747\u8861\u5668\u4f1a\u628a\u6d41\u91cf\u8f6c\u53d1\u5230\u8fd9\u4e9b\u8282\u70b9\u3002"),(0,l.kt)("h2",{id:"1-\u521b\u5efa\u76ee\u6807\u7ec4"},"1. \u521b\u5efa\u76ee\u6807\u7ec4"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"TCP")," \u534f\u8bae\u521b\u5efa\u4e24\u4e2a\u76ee\u6807\u7ec4\uff0c\u5176\u4e2d\u4e00\u4e2a\u4f7f\u7528 TCP \u7aef\u53e3 443\uff0c\u53e6\u4e00\u4e2a\u4f7f\u7528 TCP \u7aef\u53e3 80\uff08\u7528\u4e8e\u91cd\u5b9a\u5411\u5230 TCP \u7aef\u53e3 443\uff09\u3002\u7136\u540e\uff0c\u5c06 Linux \u8282\u70b9\u6dfb\u52a0\u5230\u8fd9\u4e9b\u7ec4\u4e2d\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e NLB \u7684\u7b2c\u4e00\u4e2a\u6b65\u9aa4\u662f\u521b\u5efa\u4e24\u4e2a\u76ee\u6807\u7ec4\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u7aef\u53e3 443 \u5c31\u53ef\u4ee5\u8bbf\u95ee Rancher\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u7aef\u53e3 80 \u7684\u6d41\u91cf\u4f1a\u88ab\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u7aef\u53e3 443\uff0c\u56e0\u6b64\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u7aef\u53e3 80 \u4e5f\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\u3002"),(0,l.kt)("p",null,"\u4e0d\u7ba1\u4f7f\u7528\u7684\u662f NGINX Ingress \u8fd8\u662f Traefik Ingress Controller\uff0cIngress \u90fd\u5e94\u8be5\u5c06\u7aef\u53e3 80 \u7684\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u7aef\u53e3 443\u3002\u4ee5\u4e0b\u4e3a\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 ",(0,l.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS \u63a7\u5236\u53f0"),"\u3002\u786e\u4fdd\u9009\u62e9\u7684",(0,l.kt)("strong",{parentName:"li"},"\u533a\u57df"),"\u662f\u4f60\u521b\u5efa EC2 \u5b9e\u4f8b \uff08Linux \u8282\u70b9\uff09\u7684\u533a\u57df\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1")," > ",(0,l.kt)("strong",{parentName:"li"},"EC2"),"\uff0c\u627e\u5230",(0,l.kt)("strong",{parentName:"li"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\u5e76\u6253\u5f00",(0,l.kt)("strong",{parentName:"li"},"\u76ee\u6807\u7ec4"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa\u76ee\u6807\u7ec4"),"\uff0c\u7136\u540e\u521b\u5efa\u7528\u4e8e TCP \u7aef\u53e3 443 \u7684\u7b2c\u4e00\u4e2a\u76ee\u6807\u7ec4\u3002")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0d\u540c Ingress \u7684\u5065\u5eb7\u68c0\u67e5\u5904\u7406\u65b9\u6cd5\u4e0d\u540c\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"#nginx-ingress-%E5%92%8C-traefik-ingress-%E7%9A%84%E5%81%A5%E5%BA%B7%E6%A3%80%E6%9F%A5%E8%B7%AF%E5%BE%84"},"\u672c\u8282"),"\u3002"))),(0,l.kt)("h4",{id:"\u76ee\u6807\u7ec4tcp-\u7aef\u53e3-443"},"\u76ee\u6807\u7ec4\uff08TCP \u7aef\u53e3 443\uff09"),(0,l.kt)("p",null,"\u6839\u636e\u4e0b\u8868\u914d\u7f6e\u7b2c\u4e00\u4e2a\u76ee\u6807\u7ec4\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7ec4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rancher-tcp-443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instance"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 VPC")))),(0,l.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\u8bbe\u7f6e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"override"),",",(0,l.kt)("inlineCode",{parentName:"td"},"80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u9608\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u6b63\u5e38\u9608\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6 \u79d2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10 \u79d2"))))),(0,l.kt)("p",null,"\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u76ee\u6807\u7ec4"),"\uff0c\u7136\u540e\u521b\u5efa\u7528\u4e8e TCP \u7aef\u53e3 80 \u7684\u7b2c\u4e8c\u4e2a\u76ee\u6807\u7ec4\u3002"),(0,l.kt)("h4",{id:"\u76ee\u6807\u7ec4tcp-\u7aef\u53e3-80"},"\u76ee\u6807\u7ec4\uff08TCP \u7aef\u53e3 80\uff09"),(0,l.kt)("p",null,"\u6839\u636e\u4e0b\u8868\u914d\u7f6e\u7b2c\u4e8c\u4e2a\u76ee\u6807\u7ec4\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7ec4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rancher-tcp-80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instance"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 VPC")))),(0,l.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\u8bbe\u7f6e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"traffic port"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u9608\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u6b63\u5e38\u9608\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6 \u79d2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10 \u79d2"))))),(0,l.kt)("h2",{id:"2-\u6ce8\u518c\u76ee\u6807"},"2. \u6ce8\u518c\u76ee\u6807"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c06 Linux \u8282\u70b9\u6dfb\u52a0\u5230\u4e24\u4e2a\u76ee\u6807\u7ec4\u4e2d\u3002"),(0,l.kt)("p",null,"\u9009\u62e9\u540d\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-443")," \u7684\u76ee\u6807\u7ec4\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u76ee\u6807"),"\u9009\u9879\u5361\u5e76\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8f91"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(85550).Z,width:"624",height:"736"})),(0,l.kt)("p",null,"\u9009\u62e9\u4f60\u8981\u6dfb\u52a0\u7684\u5b9e\u4f8b\uff08Linux \u8282\u70b9\uff09\uff0c\u7136\u540e\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5230\u5df2\u6ce8\u518c"),"\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c06\u76ee\u6807\u6dfb\u52a0\u5230\u76ee\u6807\u7ec4 TCP \u7aef\u53e3 443"),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(53623).Z,width:"1094",height:"1136"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5df2\u5c06\u76ee\u6807\u6dfb\u52a0\u5230\u76ee\u6807\u7ec4 TCP \u7aef\u53e3 443"),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(65392).Z,width:"1586",height:"656"})),(0,l.kt)("p",null,"\u6dfb\u52a0\u5b9e\u4f8b\u540e\uff0c\u5355\u51fb\u53f3\u4e0b\u65b9\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-443")," \u66ff\u6362\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-80"),"\uff0c\u7136\u540e\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\u3002\u4f60\u9700\u8981\u5c06\u76f8\u540c\u7684\u5b9e\u4f8b\u4f5c\u4e3a\u76ee\u6807\u6dfb\u52a0\u5230\u6b64\u76ee\u6807\u7ec4\u3002"),(0,l.kt)("h2",{id:"3-\u521b\u5efa-nlb"},"3. \u521b\u5efa NLB"),(0,l.kt)("p",null,"\u4f7f\u7528 Amazon \u7684\u5411\u5bfc\u521b\u5efa\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u5728 ",(0,l.kt)("a",{parentName:"p",href:"#1-%E5%88%9B%E5%BB%BA%E7%9B%AE%E6%A0%87%E7%BB%84"},"1. \u521b\u5efa\u76ee\u6807\u7ec4"),"\u4e2d\u521b\u5efa\u7684\u76ee\u6807\u7ec4\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7f51\u9875\u6d4f\u89c8\u5668\u4e2d\uff0c\u5bfc\u822a\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon EC2 \u63a7\u5236\u53f0"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5bfc\u822a\u680f\u4e2d\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u8d1f\u8f7d\u5747\u8861")," > ",(0,l.kt)("strong",{parentName:"p"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668"),"\u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002\u7136\u540e\uff0c\u586b\u5199\u6bcf\u4e2a\u8868\u683c\u3002"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%AD%A5%E9%AA%A4-1%EF%BC%9A%E9%85%8D%E7%BD%AE%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8"},"\u6b65\u9aa4 1\uff1a\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%AD%A5%E9%AA%A4-2%EF%BC%9A%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1"},"\u6b65\u9aa4 2\uff1a\u914d\u7f6e\u8def\u7531")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%AD%A5%E9%AA%A4-3%EF%BC%9A%E6%B3%A8%E5%86%8C%E7%9B%AE%E6%A0%87"},"\u6b65\u9aa4 3\uff1a\u6ce8\u518c\u76ee\u6807")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%AD%A5%E9%AA%A4-4%EF%BC%9A%E5%AE%A1%E6%A0%B8"},"\u6b65\u9aa4 4\uff1a\u5ba1\u6838"))),(0,l.kt)("h3",{id:"\u6b65\u9aa4-1\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"},"\u6b65\u9aa4 1\uff1a\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u5728\u8868\u5355\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"rancher")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scheme"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"internal")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"internet-facing"),"\u3002\u5b9e\u4f8b\u548c VPC \u7684\u914d\u7f6e\u51b3\u5b9a\u4e86 NLB \u7684 Scheme\u3002\u5982\u679c\u4f60\u7684\u5b9e\u4f8b\u6ca1\u6709\u7ed1\u5b9a\u516c\u5171 IP\uff0c\u6216\u8005\u4f60\u53ea\u9700\u8981\u901a\u8fc7\u5185\u7f51\u8bbf\u95ee Rancher\uff0c\u8bf7\u5c06 NLB \u7684 Scheme \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"internal")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"internet-facing"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u76d1\u542c\u5668"),"\uff1a\u8d1f\u8f7d\u5747\u8861\u5668\u534f\u8bae\u9700\u8981\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"TCP"),"\uff0c\u800c\u4e14\u8d1f\u8f7d\u5747\u8861\u5668\u7aef\u53e3\u9700\u8981\u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"443"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u7528\u533a\uff1a"),"\u9009\u62e9\u4f60\u7684",(0,l.kt)("strong",{parentName:"li"},"VPC"),"\u548c",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u7528\u533a"),"\u3002")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-2\u914d\u7f6e\u8def\u7531"},"\u6b65\u9aa4 2\uff1a\u914d\u7f6e\u8def\u7531"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece",(0,l.kt)("strong",{parentName:"li"},"\u76ee\u6807\u7ec4"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"\u73b0\u6709\u76ee\u6807\u7ec4"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece",(0,l.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher-tcp-443"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00",(0,l.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u5065\u5eb7\u68c0\u67e5\u8bbe\u7f6e"),"\uff0c\u5e76\u5c06",(0,l.kt)("strong",{parentName:"li"},"\u95f4\u9694"),"\u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"10 \u79d2"),"\u3002")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-3\u6ce8\u518c\u76ee\u6807"},"\u6b65\u9aa4 3\uff1a\u6ce8\u518c\u76ee\u6807"),(0,l.kt)("p",null,"\u7531\u4e8e\u4f60\u5df2\u7ecf\u5728\u5148\u524d\u6b65\u9aa4\u6ce8\u518c\u4e86\u76ee\u6807\uff0c\u56e0\u6b64\u4f60\u53ea\u9700\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65\uff1a\u5ba1\u6838"),"\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa4-4\u5ba1\u6838"},"\u6b65\u9aa4 4\uff1a\u5ba1\u6838"),(0,l.kt)("p",null,"\u68c0\u67e5\u8d1f\u8f7d\u5747\u8861\u5668\u4fe1\u606f\u65e0\u8bef\u540e\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("p",null,"AWS \u5b8c\u6210 NLB \u521b\u5efa\u540e\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u5173\u95ed"),"\u3002"),(0,l.kt)("h1",{id:"4-\u4e3a-tcp-\u7aef\u53e3-80-\u5411-nlb-\u6dfb\u52a0\u76d1\u542c\u5668"},"4. \u4e3a TCP \u7aef\u53e3 80 \u5411 NLB \u6dfb\u52a0\u76d1\u542c\u5668"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u65b0\u521b\u5efa\u7684 NLB \u5e76\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u76d1\u542c\u5668"),"\u9009\u9879\u5361\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u76d1\u542c\u5668"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"TCP"),":",(0,l.kt)("inlineCode",{parentName:"p"},"80")," \u4f5c\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u534f\u8bae"),":",(0,l.kt)("strong",{parentName:"p"},"\u7aef\u53e3"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u64cd\u4f5c"),"\u5e76\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u8f6c\u53d1\u5230.."),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ece",(0,l.kt)("strong",{parentName:"p"},"\u8f6c\u53d1\u5230"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-tcp-80"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,l.kt)("h1",{id:"nginx-ingress-\u548c-traefik-ingress-\u7684\u5065\u5eb7\u68c0\u67e5\u8def\u5f84"},"NGINX Ingress \u548c Traefik Ingress \u7684\u5065\u5eb7\u68c0\u67e5\u8def\u5f84"),(0,l.kt)("p",null,"K3s \u548c RKE Kubernetes \u96c6\u7fa4\u4f7f\u7528\u7684\u9ed8\u8ba4 Ingress \u4e0d\u540c\uff0c\u56e0\u6b64\u5bf9\u5e94\u7684\u5065\u5eb7\u68c0\u67e5\u65b9\u5f0f\u4e5f\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"RKE Kubernetes \u96c6\u7fa4\u9ed8\u8ba4\u4f7f\u7528 NGINX Ingress\uff0c\u800c K3s Kubernetes \u96c6\u7fa4\u9ed8\u8ba4\u4f7f\u7528 Traefik Ingress\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Traefik"),"\uff1a\u9ed8\u8ba4\u5065\u5eb7\u68c0\u67e5\u8def\u5f84\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/ping"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u7ba1\u4e3b\u673a\u5982\u4f55\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"/ping")," \u603b\u662f\u5339\u914d\uff0c\u800c\u4e14 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.traefik.io/operations/ping/"},"Traefik \u81ea\u8eab"),"\u603b\u4f1a\u54cd\u5e94\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NGINX Ingress"),"\uff1aNGINX Ingress Controller \u7684\u9ed8\u8ba4\u540e\u7aef\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"/healthz")," \u7aef\u70b9\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0d\u7ba1\u4e3b\u673a\u5982\u4f55\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"/healthz")," \u603b\u662f\u5339\u914d\uff0c\u800c\u4e14 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/blob/0cbe783f43a9313c9c26136e888324b1ee91a72f/charts/ingress-nginx/values.yaml#L212"},(0,l.kt)("inlineCode",{parentName:"a"},"ingress-nginx")," \u81ea\u8eab"),"\u603b\u4f1a\u54cd\u5e94\u3002")),(0,l.kt)("p",null,"\u60f3\u8981\u7cbe\u786e\u6a21\u62df\u5065\u5eb7\u68c0\u67e5\uff0c\u6700\u597d\u662f\u4f7f\u7528 Host \u6807\u5934\uff08Rancher hostname\uff09\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"/ping")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"/healthz"),"\uff08\u5206\u522b\u5bf9\u5e94 K3s \u548c RKE \u96c6\u7fa4\uff09\u6765\u83b7\u53d6 Rancher Pod \u7684\u54cd\u5e94\uff0c\u800c\u4e0d\u662f Ingress \u7684\u54cd\u5e94\u3002"))}N.isMDXComponent=!0},53623:function(t,e,n){e.Z=n.p+"assets/images/add-targets-targetgroup-443-331e2f186b568860b9d8700b7acfc1ea.png"},65392:function(t,e,n){e.Z=n.p+"assets/images/added-targets-targetgroup-443-e076e0c70c61c458767ccb7bc17e9361.png"},85550:function(t,e,n){e.Z=n.p+"assets/images/edit-targetgroup-443-1143314c2ed28b80d6b1daf6068bf52e.png"}}]);