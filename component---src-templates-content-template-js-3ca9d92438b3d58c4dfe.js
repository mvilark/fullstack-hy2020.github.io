(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/4ef":function(e,a,t){},"0v46":function(e,a,t){},N1om:function(e,a,t){var n=t("sgoq")((function(e,a,t){return e+(t?"-":"")+a.toLowerCase()}));e.exports=n},U4Ha:function(e){e.exports=JSON.parse('{"en":13,"es":10,"fi":13,"fr":7,"ptbr":5,"zh":13}')},XFRJ:function(e,a,t){"use strict";t("m4Pe");var n=t("jsr+"),o=t("Wbzz"),r=t("q1tI"),s=t.n(r),i=t("u1fg");const c=e=>{let{className:a,wrapperClassName:t,link:r,content:c,stack:l,bold:d,thickBorder:u,upperCase:p,...m}=e;const b=s.a.createElement("div",{className:"arrow__container arrows--horizontal "+a},c.map((e,a)=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return s.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},m),s.a.createElement("div",{className:"arrow__rectangle "+(d?"bold":"")+" "+(u?"arrow__rectangle--thick-border":""),style:t},e.link?s.a.createElement(o.Link,{to:e.link},p?e.text.toUpperCase():e.text):p?e.text.toUpperCase():e.text),s.a.createElement("div",{className:"arrow__point "+(u?"arrow__point--thick-border":""),style:t}))}));let g;return l||r?!l&&r?g=s.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},s.a.createElement(o.Link,{to:r,style:{display:"inline-block"}},b)):l&&(g=s.a.createElement("div",{className:"col-10 spacing--after "+t},s.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},c.map(e=>{const t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===i.black?"white":i.black};return s.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+a},m),s.a.createElement(n.a,{flex:!0,className:"arrow__rectangle",style:t},s.a.createElement("p",{className:"arrow--stacked-title"},s.a.createElement("span",null,e.text))),s.a.createElement("div",{className:"arrow__point",style:t}))})))):g=s.a.createElement("div",{className:"col-10 spacing--after"},b),g};c.defaultProps={className:"",wrapperClassName:""},a.a=c},Zosa:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"part10-light-blue",11:"purple",12:"pale-pink",13:"sqlgreen"}},fEpP:function(e,a,t){},gqR3:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin JavaScript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on JavaScript based modern web development by University of Helsinki and Houston Inc..",es:"Curso en línea abierto de desarrollo web moderno basado en JavaScript por la Universidad de Helsinki y Houston Inc.."}},jyfX:function(e,a,t){var n=t("sZCt")("kebabCase",t("N1om"),t("Eszj"));n.placeholder=t("wuTn"),e.exports=n},kl3L:function(e,a,t){"use strict";t("l54/");var n=t("U4Ha"),o=t("jsr+"),r=t("Wbzz"),s=t("q1tI"),i=t.n(s),c=t("ymbu"),l=t.n(c),d=t("c7NW"),u=t.n(d),p=t("9Koi");const m=e=>String.fromCharCode(e.charCodeAt(0)-1),b=e=>String.fromCharCode(e.charCodeAt(0)+1),g=(e,a)=>Object.keys(l.a[a]).includes(e.toString()),h=(e,a,t)=>b(e)in l.a[t][a],k=(e,a,t)=>!e&&g(a+1,t)||e&&h(e,a,t),v=e=>"fi"===e?"Osa":"Part",f=e=>"fi"===e?"/osa":"/"+e+"/part",y=e=>{let{part:a,letter:t,lang:s}=e;const{t:c}=Object(p.a)();return i.a.createElement(o.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&g(a-1,s)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+f(s)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",a-1),i.a.createElement("b",null,c("previousPart")))),k(t,a,s)&&i.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+f(s)+a+"/"+u()(l.a[s][a][m(t)]),className:"col-4--mobile push-right-1 prev"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",""+a+m(t)),i.a.createElement("b",null,c("previousPart")))),k(t,a,s)&&i.a.createElement("div",{className:"col-1--mobile separator"})):g(a-1,s)?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Link,{to:""+f(s)+(a-1),className:"col-4--mobile push-right-1 prev"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",a-1),i.a.createElement("b",null,c("previousPart")))),k(t,a,s)&&i.a.createElement("div",{className:"col-1--mobile separator"})):i.a.createElement(o.a,{className:"push-right-1"}):i.a.createElement(o.a,{className:"push-right-1"}),!t&&g(a+1,s)?(n[s]<=a&&(s="en"),i.a.createElement(r.Link,{to:""+f(s)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",a+1),i.a.createElement("b",null,c("nextPart"))))):t?h(t,a,s)?i.a.createElement(r.Link,{to:""+f(s)+a+"/"+u()(l.a[s][a][b(t)]),className:"col-4--mobile push-left-1 next"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",""+a+b(t)),i.a.createElement("b",null,c("nextPart")))):g(a+1,s)?i.a.createElement(r.Link,{to:""+f(s)+(a+1),className:"col-4--mobile push-left-1 next"},i.a.createElement(o.a,{flex:!0,dirColumn:!0},i.a.createElement("p",null,v(s)," ",a+1),i.a.createElement("b",null,c("nextPart")))):i.a.createElement(o.a,{className:"push-left-1"}):i.a.createElement(o.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},a.a=y},"l54/":function(e,a,t){},m4Pe:function(e,a,t){},mt4B:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("rXWv");var n=t("q1tI"),o=t.n(n);const r=e=>{let{className:a,backgroundColor:t,...n}=e;const r=t?{backgroundColor:t}:null;return o.a.createElement("div",Object.assign({className:"banner "+a,style:r},n))};r.defaultProps={className:""}},rXWv:function(e,a,t){},tkMx:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t("KQm4"),o=t("dI71"),r=(t("xPXs"),t("q1tI")),s=t.n(r),i=t("XFRJ"),c=t("y2O/"),l=t.n(c),d=t("mt4B"),u=t("9Koi"),p=t("jsr+");t("/4ef");var m=e=>{let{part:a,letter:t}=e;const{t:n,i18n:o}=Object(u.a)(),r=o.language,i="https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/edit/source/src/content/"+a+"/"+r+"/"+("fi"===r?"osa"+a:"part"+a)+t+".md";return s.a.createElement(p.a,{flex:!0,className:"container spacing",centered:!0},s.a.createElement("a",{className:"edit-link",target:"__BLANK",href:i},s.a.createElement("span",null,n("proposeChanges"))))},b=t("Bl7J"),g=t("76ZC"),h=t.n(g),k=t("kl3L"),v=t("vrFN"),f=(t("0v46"),t("XSxc")),y=t("Wbzz"),E=t("jyfX"),C=t.n(E),x=t("ymbu"),N=t.n(x),R=t("c7NW"),w=t.n(R),I=t("xB9W");let S=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=()=>{const e=Array.from(document.querySelectorAll("h3")).map(e=>(e.id=C()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}));t.setState({headings:e}),window.addEventListener("scroll",t.scrollHandler)},t.scrollHandler=()=>{t.scrollTimer&&clearTimeout(t.scrollTimer),t.scrollTimer=setTimeout(()=>{const e=window.scrollY;let a=t.state.headings[0];for(const n of t.state.headings){const t=document.getElementById(n.id);if(t&&t.offsetTop>=e)break;a=n}t.state.selectedItem!==a.id&&t.setState({selectedItem:a.id})},50)},t.loopThroughPartsNode=e=>{const{headings:a}=t.state,{part:n,letter:o,currentPath:r,currentPartTitle:i,colorCode:c,lang:l}=t.props;let d=[];for(let u in e)i!==e[u]?d.push(s.a.createElement(y.Link,{key:u,className:"left-navigation-link",style:{borderColor:c},to:Object(I.a)(l,n,"/"+w()(e[u]))},u+" "+e[u])):d.push(s.a.createElement(f.a,{containerClassName:"accordion--side-navigation",style:{color:c},titleStyle:{backgroundColor:c,borderColor:c},initiallyOpened:!0,key:u,title:o+" "+e[u],selectedItem:t.state.selectedItem,list:a.map(e=>({id:e.id,href:r+"#"+e.id,text:e.text}))}));return d},t.state={headings:[],selectedItem:null},t}Object(o.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},t.render=function(){const{part:e}=this.props;return s.a.createElement(p.a,{className:"scroll-navigation-container"},s.a.createElement(p.a,{className:"scroll-navigation-container-inner"},s.a.createElement(p.a,{tag:"ul",dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(N.a[this.props.lang][e]))))},a}(r.Component);S.defaultProps={className:"",lang:"fi"};var j=S,T=t("K4iA"),A=t("u1fg"),L=t("GkXj"),P=t.n(L),F=t("gqR3"),M=t.n(F),B=t("5I0T"),D=t.n(B),G=t("Zosa"),z=t("33yf"),O=t.n(z);t("fEpP");const q=void 0!==typeof document;let _=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleScroll=()=>{window.scrollY>300&&!t.state.showArrowUp?t.setState({showArrowUp:!0}):window.scrollY<=300&&t.state.showArrowUp&&t.setState({showArrowUp:!1})},t.state={h1Title:"",otherTitles:"",showArrowUp:!1},t}Object(o.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){const e=Array.from(document.querySelectorAll("a:not(.skip-to-content")),a=document.querySelector("h1"),t=document.querySelectorAll("h3"),o=Array.from(t).map(e=>e.innerText),{frontmatter:r}=this.props.data.markdownRemark;e.map(e=>(e.style="border-color: "+A[G.a[r.part]],!e.classList.contains("language-switcher__language")&&(e.target="_blank"),e.onmouseover=function(){e.style.backgroundColor=A[G.a[r.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null)),this.setState({h1Title:a.innerText,otherTitles:Object(n.a)(o)}),window.addEventListener("scroll",this.handleScroll),function(){if(q){function e(){let e=this.parentElement.querySelectorAll("code")[0];navigator.clipboard.writeText(e.innerText)}document.querySelectorAll("pre").forEach(a=>{let t=document.createElement("button");t.classList.add("copy-code-button"),t.innerText="copy",t.addEventListener("click",e),a.appendChild(t)})}}()},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){const{markdownRemark:e}=this.props.data,{frontmatter:a,html:t}=e,{mainImage:o,letter:r,part:c,lang:u}=a,g=A[G.a[c]],f={replace:e=>{const{type:a,name:t,attribs:n,children:o}=e;if("tag"===a&&"picture"===t){const e=o[0].attribs.alt?o[0].attribs.alt:"fullstack content";return s.a.createElement("picture",null,s.a.createElement("img",{style:{borderColor:g},alt:e,src:o[0].attribs.src}))}return"tag"===a&&"pre"===t?s.a.createElement("pre",null,P()(o,f)):"tag"===a&&"content"===n.class?s.a.createElement(p.a,{className:"course-content"},s.a.createElement(p.a,{className:"course-content-inner"},P()(o,f))):"tag"===a&&"tasks"===n.class?s.a.createElement(d.a,{style:{backgroundColor:g,borderColor:g},className:"spacing tasks content-banner"},s.a.createElement(p.a,{className:"course-content",style:{borderColor:g,backgroundColor:"transparent"}},s.a.createElement(p.a,{className:"course-content-inner"},"pre"===o.name?s.a.createElement("pre",null,P()(o,f)):P()(o,f)))):void 0}};return s.a.createElement(b.a,{isCoursePage:!0},s.a.createElement(v.a,{lang:u,title:"Fullstack "+("fi"===u?"osa":"part")+c+" | "+this.state.h1Title,description:M.a[u],keywords:[].concat(Object(n.a)(D.a),[this.state.h1Title],Object(n.a)(this.state.otherTitles))}),this.state.showArrowUp&&s.a.createElement("div",{className:"arrow-go-up",onClick:()=>window.scrollTo({top:0,left:0,behavior:"smooth"})},s.a.createElement("img",{src:l.a,alt:"arrow-up"})),s.a.createElement("div",{className:"course-container spacing--after"},s.a.createElement(d.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:g,style:{backgroundImage:"url("+O.a.resolve(o.publicURL)+")",backgroundColor:g}},s.a.createElement("div",{className:"container spacing--after"},s.a.createElement(i.a,{className:"breadcrumb",content:[{backgroundColor:g,text:"Fullstack",link:"/"+("fi"===u?"":u+"/")+"#course-contents"},{backgroundColor:g,text:("fi"===u?"Osa":"Part")+" "+c,link:Object(I.a)(u,c)},{backgroundColor:A.black,text:N.a[u][c][r]}]}))),s.a.createElement(p.a,{className:"course",id:"course-main-content"},s.a.createElement(j,{part:c,letter:r,lang:u,currentPartTitle:N.a[u][c][r],currentPath:Object(I.a)(u,c,"/"+w()(N.a[u][c][r])),colorCode:g}),s.a.createElement(p.a,{className:"course-content-container"},s.a.createElement(p.a,{className:"course-content",autoBottomMargin:!0},s.a.createElement(p.a,{className:"course-content-inner"},s.a.createElement("p",{className:"col-1 letter",style:{borderColor:g}},r),s.a.createElement(T.a,{headingLevel:"h1",text:N.a[u][c][r]}))),h()(t,f))),s.a.createElement(m,{part:c,letter:r,lang:u}),s.a.createElement(k.a,{part:c,letter:r,lang:u})))},a}(r.Component)},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2","pale-pink":"#F9B9D3","sqlgreen":"#C5FF73"}')},xB9W:function(e,a,t){"use strict";var n=t("U4Ha");a.a=function(e,a,t){return void 0===t&&(t=""),n[e]<a?"/en/part"+a+t:"fi"===e?"/osa"+a+t:"/"+e+"/part"+a+t}},xPXs:function(e,a,t){},"y2O/":function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},ymbu:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"JavaScriptia",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen",e:"Legacy: testaaminen Jestiä käyttäen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus: Playwright",e:"End to end -testaus: Cypress"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"React Query, useReducer ja context"},7:{a:"React Router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"},9:{},10:{},11:{},12:{},13:{a:"Relaatiotietokannan käyttö Sequelize-kirjastolla",b:"Liitostaulut ja -kyselyt",c:"Migraatiot, monen suhde moneen -yhteydet"}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication",e:"Legacy: Testing with Jest"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end testing: Playwright",e:"End to end testing: Cypress"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a Redux application",d:"React Query, useReducer and the context"},7:{a:"React Router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with TypeScript",c:"Typing an Express app",d:"React with types",e:"Grande finale: Patientor"},10:{a:"Introduction to React Native",b:"React Native basics",c:"Communicating with server",d:"Testing and extending our application"},11:{a:"Introduction to CI/CD",b:"Getting started with GitHub Actions",c:"Deployment",d:"Keeping green",e:"Expanding Further"},12:{a:"Introduction to Containers",b:"Building and configuring environments",c:"Basics of Orchestration"},13:{a:"Using relational databases with Sequelize",b:"Join tables and queries",c:"Migrations, many-to-many relationships"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前端的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"TypeScript的一小步",c:"TypeScript版的express应用",d:"利用TypeScript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"},11:{a:"CI/CD 简介",b:"开始认识 GitHub Actions 吧",c:"部署",d:"保持健康状态",e:"再扩展一下"},12:{a:"容器介绍",b:"构建配置环境",c:"编排基础"},13:{a:"用 Sequelize 使用关系型数据库",b:"加入表与查询",c:"迁移，多对多关系"}},es:{0:{a:"Información general",b:"Fundamentos de las aplicaciones web"},1:{a:"Introducción a React",b:"JavaScript",c:"Estado del componente, controladores de eventos",d:"Un estado más complejo, depurando aplicaciones React"},2:{a:"Renderizando una colección, módulos",b:"Formularios",c:"Obteniendo datos del servidor",d:"Alterando datos en el servidor",e:"Agregar estilos a la aplicación React"},3:{a:"Node.js y Express",b:"Despliegue de la aplicación a Internet",c:"Guardando datos en MongoDB",d:"Validación y ESLint"},4:{a:"Estructura de la aplicación backend, introducción a las pruebas",b:"Probando el backend",c:"Administración de usuarios",d:"Autenticación basada en token"},5:{a:"Iniciar sesión en la interfaz",b:"props.children y proptypes",c:"Probando aplicaciones React",d:"Pruebas de extremo a extremo"},6:{a:"Flux-architecture y Redux",b:"Muchos reducers",c:"Comunicarse con el servidor en una aplicación redux",d:"React Query, useReducer y  el contexto"},7:{a:"React-router",b:"Hooks personalizados",c:"Más sobre estilos",d:"Webpack",e:"Componentes de clases, varios",f:"Ejercicios: ampliar la lista de blogs"},8:{a:"Servidor GraphQL",b:"React y GraphQL",c:"Administración de bases de datos y usuarios",d:"Iniciar sesión y actualizar la caché",e:"Fragmentos y suscripciones"},9:{a:"Antecedentes e introducción",b:"Primeros pasos con TypeScript",c:"Tipando una aplicación Express",d:"React con tipos",e:"Grande finale: Patientor"},10:{a:"Introducción a React Native",b:"Conceptos básicos de React Native",c:"Comunicándose con el servidor",d:"Probar y ampliar nuestra aplicación"},11:{a:"Introducción a CI/CD",b:"Introducción a las acciones de Github",c:"Despliegue",d:"Manteniéndose verde",e:"Expandiéndose aún más"},12:{a:"Introducción a los Contenedores",b:"Construir y configurar entornos",c:"Conceptos básicos de orquestación"},13:{a:"Uso de bases de datos relacionales con Sequelize",b:"Unir tablas y consultas",c:"Migraciones, relaciones de muchos-a-muchos"}},fr:{0:{a:"Informations générales",b:"Introduction aux applications Web"},1:{a:"Premiers pas avec React",b:"JavaScript",c:"État des composants, gestionnaires d'événements",d:"Plongez dans le débogage d'applications React"},2:{a:"Rendu de collections, modules",b:"Formulaires",c:"Obtenir des données du serveur",d:"Modification des données côté serveur",e:"Styliser vos applications React"},3:{a:"Node.js et Express",b:"Déployer votre application sur Internet",c:"Stocker des données sur MongoDB",d:"Validation et ESLint"},4:{a:"Structure de l'application backend, introduction aux tests",b:"Tester le backend",c:"Gestion des utilisateurs",d:"Jeton d'authentification"},5:{a:"Connexion front-end",b:"props.children et proptypes",c:"Tester les applications React",d:"Tests de bout en bout"},6:{a:"Architecture de flux et Redux",b:"Quelques reducers",c:"Communiquer avec le backend dans l'application Redux",d:"React Query, useReducer et le contexte"},7:{a:"React-router",b:"Hooks personnalisés",c:"Allez-plus loin avec le style",d:"Webpack",e:"Apprivoisez les composants classe",f:"Exercices: étendre la bloglist"},8:{a:"Serveur GraphQL",b:"React et GraphQL",c:"Base de données et gestion des utilisateurs",d:"Connexion et mise à jour du cache",e:"Fragments et subscriptions"},9:{a:"Contexte et introduction",b:"Premiers pas avec TypeScript",c:"De l'application express à TypeScript",d:"Écrire des applications React avec TypeScript"},10:{a:"Introduction à React Native",b:"Les bases de React Native",c:"Communiquer avec le serveur",d:"Tester et étendre notre application"},11:{a:"Introduction au CI/CD",b:"Premiers pas avec GitHub Actions",c:"Déploiement",d:"Rester dans le vert",e:"Allez plus loin"},12:{a:"Introduction aux Conteneurs",b:"Construire et configurer des environnements",c:"Bases de l'Orchestration"},13:{a:"Bases de données relationnelles avec Sequelize",b:"Joindre tables et requêtes",c:"Migrations, relations plusieurs-à-plusieurs"}},ptbr:{0:{a:"Informações gerais",b:"Fundamentos de aplicações web"},1:{a:"Introdução à biblioteca React",b:"JavaScript",c:"Estado de componente e gerenciadores de eventos",d:"Um estado mais complexo e depuração de aplicações React"},2:{a:"Renderização de uma coleção e módulos",b:"Formulários",c:"Obtendo dados do servidor",d:"Alterando dados no servidor",e:"Adicionando estilos à aplicação React"},3:{a:"Node.js e Express",b:"Implantação da aplicação na internet",c:"Salvando dados no MongoDB",d:"Validação e ESLint"},4:{a:"Estrutura de uma aplicação back-end, introdução a testes",b:"Testando o back-end",c:"Administração de usuários",d:"Autenticação por token"},5:{a:"Login no front-end",b:"props.children e proptypes",c:"Testando aplicações React",d:"Testes end-to-end"},6:{a:"Arquitetura Flux e Redux",b:"Muitos Reducers",c:"Comunicação com o servidor em uma aplicação Redux",d:"connect"},7:{a:"React-router",b:"Hooks personalizados",c:"Mais sobre estilos",d:"Webpack",e:"Componentes de classe, Miscelâneos",f:"Exercícios: estendendo o bloglist"},8:{a:"Servidor GraphQL",b:"React e GraphQL",c:"Banco de dados e administração de usuários",d:"Login e atualização do cache",e:"Fragmentos e assinaturas"},9:{a:"Background e introdução",b:"Primeiros passos com TypeScript",c:"Tipando a aplicação Express",d:"React com tipos"},10:{a:"Introdução à biblioteca React Native",b:"Conceitos básicos de React Native",c:"Comunicação com o servidor",d:"Testando e estendendo nossa aplicação"},11:{a:"Introdução a CI/CD",b:"Começando com GitHub Actions",c:"Deployment",d:'Mantendo tudo "limpo"',e:"Expandindo ainda mais"},12:{a:"Introdução a Containers",b:"Construindo e configurando ambientes",c:"Conceitos básicos de Orquestração"},13:{a:"Usando bancos de dados relacionais com Sequelize",b:"Tabelas de junção e consultas",c:"Migrações e Relacionamentos de Muitos para Muitos"}}}}}]);
//# sourceMappingURL=component---src-templates-content-template-js-3ca9d92438b3d58c4dfe.js.map