"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43802],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40017:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={title:"Enabling Experimental Features"},o=void 0,u={unversionedId:"pages-for-subheaders/enable-experimental-features",id:"version-2.6/pages-for-subheaders/enable-experimental-features",title:"Enabling Experimental Features",description:"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an unsupported storage type outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/enable-experimental-features.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/enable-experimental-features",permalink:"/v2.6/pages-for-subheaders/enable-experimental-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/enable-experimental-features.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Enabling Experimental Features"},sidebar:"tutorialSidebar",previous:{title:"Create a Custom Benchmark Version for Running a Cluster Scan",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run"},next:{title:"Running on ARM64 (Experimental)",permalink:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64"}},h={},c=[{value:"Enabling Features when Starting Rancher",id:"enabling-features-when-starting-rancher",level:2},{value:"Enabling Features for Kubernetes Installs",id:"enabling-features-for-kubernetes-installs",level:3},{value:"Rendering the Helm Chart for Air Gap Installations",id:"rendering-the-helm-chart-for-air-gap-installations",level:3},{value:"Enabling Features for Docker Installs",id:"enabling-features-for-docker-installs",level:3},{value:"Enabling Features with the Rancher UI",id:"enabling-features-with-the-rancher-ui",level:2},{value:"Disabling Features with the Rancher UI",id:"disabling-features-with-the-rancher-ui",level:3},{value:"Enabling Features with the Rancher API",id:"enabling-features-with-the-rancher-api",level:2},{value:"Disabling Features with the Rancher API",id:"disabling-features-with-the-rancher-api",level:3}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher includes some features that are experimental and disabled by default. You might want to enable these features, for example, if you decide that the benefits of using an ",(0,l.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers"},"unsupported storage type")," outweighs the risk of using an untested feature. Feature flags were introduced to allow you to try these features that are not enabled by default."),(0,l.kt)("p",null,"The features can be enabled in three ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-when-starting-rancher"},"Enable features when starting Rancher.")," When installing Rancher with a CLI, you can use a feature flag to enable a feature by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-ui"},"Enable features from the Rancher UI")," by going to the ",(0,l.kt)("strong",{parentName:"li"},"Settings")," page."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabling-features-with-the-rancher-api"},"Enable features with the Rancher API")," after installing Rancher.")),(0,l.kt)("p",null,"Each feature has two values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A default value, which can be configured with a flag or environment variable from the command line"),(0,l.kt)("li",{parentName:"ul"},"A set value, which can be configured with the Rancher API or UI")),(0,l.kt)("p",null,"If no value has been set, Rancher uses the default value."),(0,l.kt)("p",null,"Because the API sets the actual value and the command line sets the default value, that means that if you enable or disable a feature with the API or UI, it will override any value set with the command line."),(0,l.kt)("p",null,"For example, if you install Rancher, then set a feature flag to true with the Rancher API, then upgrade Rancher with a command that sets the feature flag to false, the default value will still be false, but the feature will still be enabled because it was set with the Rancher API. If you then deleted the set value (true) with the Rancher API, setting it to NULL, the default value (false) would take effect. See the ",(0,l.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/installation-references/feature-flags"},"feature flags page")," for more information."),(0,l.kt)("h2",{id:"enabling-features-when-starting-rancher"},"Enabling Features when Starting Rancher"),(0,l.kt)("p",null,"When you install Rancher, enable the feature you want with a feature flag. The command is different depending on whether you are installing Rancher on a single node or if you are doing a Kubernetes Installation of Rancher."),(0,l.kt)("h3",{id:"enabling-features-for-kubernetes-installs"},"Enabling Features for Kubernetes Installs"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Values set from the Rancher API will override the value passed in through the command line."))),(0,l.kt)("p",null,"When installing Rancher with a Helm chart, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are installing an alpha version, Helm requires adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," option to the command."))),(0,l.kt)("h3",{id:"rendering-the-helm-chart-for-air-gap-installations"},"Rendering the Helm Chart for Air Gap Installations"),(0,l.kt)("p",null,"For an air gap installation of Rancher, you need to add a Helm chart repository and render a Helm template before installing Rancher with Helm. For details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap installation documentation.")),(0,l.kt)("p",null,"Here is an example of a command for passing in the feature flag names when rendering the Helm template. In the below example, two features are enabled by passing the feature flag names in a comma separated list."),(0,l.kt)("p",null,"The Helm command is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n  --no-hooks \\ # prevent files for Helm hooks from being generated\n  --namespace cattle-system \\\n  --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n  --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n  --set ingress.tls.source=secret \\\n  --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n  --set useBundledSystemChart=true # Use the packaged Rancher system charts\n  --set 'extraEnv[0].name=CATTLE_FEATURES'\n  --set 'extraEnv[0].value=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true'\n")),(0,l.kt)("h3",{id:"enabling-features-for-docker-installs"},"Enabling Features for Docker Installs"),(0,l.kt)("p",null,"When installing Rancher with Docker, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--features")," option. In the below example, two features are enabled by passing the feature flag names in a comma separated list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d -p 80:80 -p 443:443 \\\n  --restart=unless-stopped \\\n  rancher/rancher:rancher-latest \\\n  --features=<FEATURE-FLAG-NAME-1>=true,<FEATURE-FLAG-NAME-2>=true\n")),(0,l.kt)("h2",{id:"enabling-features-with-the-rancher-ui"},"Enabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Global Settings"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags"),"."),(0,l.kt)("li",{parentName:"ol"},"To enable a feature, go to the disabled feature you want to enable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > Activate"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-ui"},"Disabling Features with the Rancher UI"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > Global Settings"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Feature Flags"),". You will see a list of experimental features."),(0,l.kt)("li",{parentName:"ol"},"To disable a feature, go to the enabled feature you want to disable and click ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > Deactivate"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."),(0,l.kt)("h2",{id:"enabling-features-with-the-rancher-api"},"Enabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"True"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is enabled."),(0,l.kt)("h3",{id:"disabling-features-with-the-rancher-api"},"Disabling Features with the Rancher API"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"<RANCHER-SERVER-URL>/v3/features"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"data")," section, you will see an array containing all of the features that can be turned on with feature flags. The name of the feature is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," field. Click the name of the feature you want to enable."),(0,l.kt)("li",{parentName:"ol"},"In the upper left corner of the screen, under ",(0,l.kt)("strong",{parentName:"li"},"Operations,")," click ",(0,l.kt)("strong",{parentName:"li"},"Edit"),"."),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Value")," drop-down menu, click ",(0,l.kt)("strong",{parentName:"li"},"False"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Send Request"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Close"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The feature is disabled."))}d.isMDXComponent=!0}}]);