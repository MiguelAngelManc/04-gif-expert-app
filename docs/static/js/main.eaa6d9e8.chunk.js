(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=(n(16),n(2)),u=n(9),o=function(e){var t=e.setCategorias,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&t((function(e){return[i].concat(Object(u.a)(e))}))},children:[Object(a.jsx)("h2",{children:"Add category"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})]})},j=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("img",{src:n})]})},l=n(6),f=n.n(l),p=n(8),b=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"8jfZDBe1e4BHxCcP1wXE5ngoE5I6sVLX",10,n="https://api.giphy.com/v1/gifs/search?api_key=".concat("8jfZDBe1e4BHxCcP1wXE5ngoE5I6sVLX","&q=").concat(encodeURI(t),"&limit=").concat(10),e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(1),m=h.useState,x=h.useEffect,O=function(e){var t=e.categoria,n=function(e){var t=m({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return x((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[]),a}(t),c=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:t}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando... "}),Object(a.jsx)("div",{className:"card-grid ",children:c.map((function(e){return Object(a.jsx)(d,Object(j.a)({},e))}))})]})},g=function(){var e=Object(c.useState)(["One Punch","Samurai X","Dragon Ball"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategorias:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)(O,{categoria:e},e)}))})]})};i.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.eaa6d9e8.chunk.js.map