(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={infoMenu:"MyInfoMenu_infoMenu__1_Ct7",infoMenu_active:"MyInfoMenu_infoMenu_active__1G9sL",infoMenu_disabled:"MyInfoMenu_infoMenu_disabled__BnQbZ",aboutMe:"MyInfoMenu_aboutMe__TtVcn",links:"MyInfoMenu_links__cYbvn",description:"MyInfoMenu_description__2p0Po",title:"MyInfoMenu_title__14UNL"}},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(6),s=n.n(o),c=(n(18),n(2)),l=n(4),r=n(8),m=n(3),u=n.n(m),_=function(e){var t=e.children,n=e.state,a=Object(r.a)(e,["children","state"]),o="";switch(n){case"active":o=u.a.nav__item_active;break;case"disabled":o=u.a.nav__item_disabled;break;case"menu":o=u.a.nav__item_menu}return i.a.createElement("button",Object.assign({},a,{className:u.a.nav__item+" ".concat(o)}),t)},f=n(1),d=n.n(f),g=function(e){var t=e.id,n=e.active,a=e.info,o=e.desc,s=e.title,c=e.img,l=e.links,r=n?d.a.infoMenu_active:d.a.infoMenu_disabled;return i.a.createElement("div",{key:t,className:d.a.infoMenu+" ".concat(r)},s?i.a.createElement("h1",{className:d.a.title},s):"",c||o?i.a.createElement("div",{className:d.a.aboutMe},c?i.a.createElement("img",{src:c.src,alt:c.alt}):"",o?i.a.createElement("div",{className:d.a.description},o):""):"",a?i.a.createElement("ul",{className:"info"},a.tel?i.a.createElement("li",{className:"info__tel"},a.tel):"",a.address?i.a.createElement("li",{className:"info__address"},a.address):"",a.email?i.a.createElement("li",{className:"info__email"},a.email):""):"",l?i.a.createElement("ul",{className:"links"},l.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:e.href,rel:"noopener noreferrer",target:"_blank"},e.text,e.img?i.a.createElement("img",{src:e.img,alt:"Screenshot of project"}):""))})):"")},p=function(e){var t=Object(a.useState)([{id:1,title:"About Me",state:"menu",infoMenu:{id:1,active:!1,img:{src:"./img/AboutMe/s2.webp",alt:"It's Me"},desc:"J'ai r\xe9alis\xe9 de nombreux projets de d\xe9veloppement front et back-end, et j'ai \xe9galement cr\xe9\xe9 un bot pour le r\xe9seau 'Telegram'. S\xe9rieux dans le travail, je me forme constamment aux langages sur le web.Je souhaite acqu\xe9rir ma premi\xe8re exp\xe9rience en entreprise dans la programmation lors d'un stage du 11 avril au 2 juin 2023.",title:"Gleb BUSHUKIN",info:{tel:"+33 6 28 34 46 21",address:"17 Rue du Colonel Fabie, 51100 Reims",email:"gleb.bushukin@gmail.com"},links:null}},{id:2,title:"Projects",state:"menu",infoMenu:{id:2,active:!1,img:null,desc:null,title:null,info:null,links:[{href:"https://nemozon.github.io/projects/manicure/",text:"Manicure (fr)",img:"./img/manicure.png"},{href:"https://nemozon.github.io/projects/puls/",text:"Puls (rus)",img:"./img/puls.png"},{href:"https://nemozon.github.io/projects/uber/",text:"Uber (rus)",img:"./img/uber.png"},{href:"https://nemozon.github.io/projects/minigame/",text:"Mini Game via Js (rus)",img:"./img/minigame.png"}]}}]),n=Object(l.a)(t,2),o=n[0],s=n[1];function r(e){var t;t="active"===o.find(function(t){return t.title===e.target.textContent}).state?o.map(function(e){return Object(c.a)({},e,{infoMenu:Object(c.a)({},e.infoMenu,{active:!1}),state:"menu"})}):o.map(function(t){return t.title===e.target.textContent?Object(c.a)({},t,{infoMenu:Object(c.a)({},t.infoMenu,{active:!0}),state:"active"}):Object(c.a)({},t,{infoMenu:Object(c.a)({},t.infoMenu,{active:!1}),state:"disabled"})}),s(t)}return i.a.createElement("nav",{className:"nav"},o.map(function(t){return i.a.createElement(_,Object.assign({},e,{state:t.state,onClick:r,key:t.id}),t.title)}),o.map(function(e){return i.a.createElement(g,{key:e.infoMenu.id,active:e.infoMenu.active,title:e.infoMenu.title,desc:e.infoMenu.desc,info:e.infoMenu.info,img:e.infoMenu.img,links:e.infoMenu.links})}))},b=n(7),v=n.n(b),M=function(e){var t=e.href,n=e.src,a=e.alt;return i.a.createElement("a",{href:t,className:v.a.icons__item,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("object",{type:"image/svg+xml",data:n,name:a},"Your browser does not support SVG"))},h=function(e){var t=Object(a.useState)([{id:1,href:"https://github.com/NemoZon",src:"./img/icons/icons8-github.svg",alt:"github"},{id:2,href:"https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvXnHdjdLPwTQnBKpfmxRNhnFjtgNFlLFXtVpjnNwrWJfWKzXTRfJdNMWjcvmnlTKPL",src:"./img/icons/icons8-google-plus.svg",alt:"google"},{id:3,href:"https://www.instagram.com/_gleb_bush_/",src:"./img/icons/icons8-instagram.svg",alt:"instagram"},{id:4,href:"https://www.linkedin.com/in/gleb-bushukin-b3a35024b/",src:"./img/icons/icons8-linkedin.svg",alt:"linkedin"},{id:5,href:"https://vk.com/lllllllllllllllllillli",src:"./img/icons/icons8-vk-com.svg",alt:"vk"},{id:6,href:"https://api.whatsapp.com/send/?phone=79373644330&text&type=phone_number&app_absent=0",src:"./img/icons/icons8-whatsapp.svg",alt:"whatsapp"}]),n=Object(l.a)(t,2),o=n[0];n[1];return i.a.createElement("div",{className:"icons"},o.map(function(e){return i.a.createElement(M,Object.assign({},e,{key:e.id}))}))};var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(h,null))};s.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)))},3:function(e,t,n){e.exports={nav__item:"MyNavButton_nav__item__1Qo7C",nav__item_active:"MyNavButton_nav__item_active__1uOlv",nav__item_disabled:"MyNavButton_nav__item_disabled__2urHV",nav__item_menu:"MyNavButton_nav__item_menu__8GqTJ"}},7:function(e,t,n){e.exports={icons__item:"MyIcon_icons__item__1VQVK","icons-opacity":"MyIcon_icons-opacity__1ma1m"}},9:function(e,t,n){e.exports=n(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.7797695c.chunk.js.map