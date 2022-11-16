"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51999],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Bootstrap Password"},l=void 0,p={unversionedId:"getting-started/installation-and-upgrade/resources/bootstrap-password",id:"version-2.6/getting-started/installation-and-upgrade/resources/bootstrap-password",title:"Bootstrap Password",description:"When Rancher starts for the first time, a password is randomly generated for the first admin user. When the admin first logs in to Rancher, the UI shows commands that can be used to retrieve the bootstrap password. The admin needs to run those commands and log in with the bootstrap password. Then Rancher gives the admin an opportunity to reset the password.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/bootstrap-password.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/bootstrap-password",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/bootstrap-password",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/bootstrap-password.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Bootstrap Password"},sidebar:"tutorialSidebar",previous:{title:"Updating the Rancher Certificate",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},next:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/local-system-charts"}},c={},d=[{value:"Specifying the Bootstrap Password in Helm Installs",id:"specifying-the-bootstrap-password-in-helm-installs",level:3},{value:"Specifying the Bootstrap Password in Docker Installs",id:"specifying-the-bootstrap-password-in-docker-installs",level:3}],u={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Rancher starts for the first time, a password is randomly generated for the first admin user. When the admin first logs in to Rancher, the UI shows commands that can be used to retrieve the bootstrap password. The admin needs to run those commands and log in with the bootstrap password. Then Rancher gives the admin an opportunity to reset the password."),(0,a.kt)("p",null,"The bootstrap password is randomly generated if it is not set during installation with a variable. For details on how to set the bootstrap password using a variable, see below."),(0,a.kt)("h3",{id:"specifying-the-bootstrap-password-in-helm-installs"},"Specifying the Bootstrap Password in Helm Installs"),(0,a.kt)("p",null,"For a Helm install, users can specify the bootstrap password variable by configuring it in the Helm chart values with ",(0,a.kt)("inlineCode",{parentName:"p"},".Values.bootstrapPassword"),"."),(0,a.kt)("p",null,"The password will be stored in a Kubernetes secret. After Rancher is installed, the UI will show instructions for how to retrieve the password using kubectl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{ .data.bootstrapPassword|base64decode}}{{ \"\\n\" }}'\n")),(0,a.kt)("h3",{id:"specifying-the-bootstrap-password-in-docker-installs"},"Specifying the Bootstrap Password in Docker Installs"),(0,a.kt)("p",null,"For a Docker install, you can specify the bootstrap password by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"-e CATTLE_BOOTSTRAP_PASSWORD=password")," to the Docker install command."),(0,a.kt)("p",null,"The password will be stored in the Docker container logs. After Rancher is installed, the UI will show instructions for how to retrieve the password using the Docker container ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker logs  container-id  2>&1 | grep "Bootstrap Password:"\n')))}h.isMDXComponent=!0}}]);