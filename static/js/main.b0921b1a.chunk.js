(this["webpackJsonpwhere-is-waldo"]=this["webpackJsonpwhere-is-waldo"]||[]).push([[0],{66:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),r=a.n(o),i=(a(76),a(1)),s=a.n(i),l=a(6),d=a(14),j=a(96),u=(a(78),a(3)),h=function(e){var t={position:"absolute",left:"".concat(e.coordinates[0],"px"),top:"".concat(e.coordinates[1],"px")};return Object(u.jsxs)(j.a,{style:t,className:"charactersDropdown",children:[Object(u.jsx)(j.a.Item,{action:!0,variant:"dark",onClick:e.closeFoundCharacter,children:"Close"}),Object(u.jsx)(j.a.Item,{action:!0,children:"Character 1"}),Object(u.jsx)(j.a.Item,{action:!0,children:"Character 2"}),Object(u.jsx)(j.a.Item,{action:!0,children:"Character 3"})]})},b=a.p+"static/media/picture.a621ccfd.jpg",f=a(89);a(66);var O=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(d.a)(o,2),i=r[0],s=r[1],l=function(e){var t=e.pageX,a=e.pageY;console.log(t,a),s([t,a])};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f.a,{onClick:function(e){l(e),c(!a)},src:b,className:"picture"}),a&&Object(u.jsx)(h,{coordinates:i,closeFoundCharacter:function(){c(!1)}})]})},g=a(95),m=a(90),p=a(94);var w=function(e){return Object(u.jsx)(g.a,{bg:"dark",variant:"dark",fixed:"top",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a.Brand,{href:"#home",children:"Find Me!"}),Object(u.jsxs)(p.a,{className:"me-auto",children:[Object(u.jsx)(p.a.Link,{onClick:e.toggleShowGameOverModal,children:"Char1"}),Object(u.jsx)(p.a.Link,{children:"Char2"}),Object(u.jsx)(p.a.Link,{children:"Char3"}),Object(u.jsx)(p.a.Link,{disabled:!0,children:"Time"})]}),Object(u.jsx)(g.a.Text,{children:e.player})]})})},x=(a(84),a(85),a(92)),v=a(93),S=a(91),k=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),c=a[0],o=a[1];return Object(u.jsxs)(x.a,{show:e.showStartModal,onHide:e.toggleShowStartModal,children:[Object(u.jsx)(x.a.Header,{closeButton:!0,children:Object(u.jsxs)(x.a.Title,{children:["Welcome to ",Object(u.jsx)("strong",{children:"Find Me!"})," game"]})}),Object(u.jsxs)(v.a,{onSubmit:function(t){e.toggleShowStartModal(),e.handleStartModalSubmit(t,c),e.getResultsData()},children:[Object(u.jsx)(x.a.Body,{children:Object(u.jsxs)(v.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(v.a.Label,{className:"ps-1",children:"Enter your Nickname:"}),Object(u.jsx)(v.a.Control,{className:"my-2",placeholder:"Player1",onChange:function(e){return o(e.target.value)}}),Object(u.jsx)(v.a.Text,{className:"text-muted m-1  ",required:!0,children:"Your Nickname will be displayed on leaderboard"})]})}),Object(u.jsx)(x.a.Footer,{children:Object(u.jsx)(S.a,{type:"submit",variant:"primary",children:"Play"})})]})]})},y=a(69),C=a(47),M=Object(y.a)({apiKey:"AIzaSyAvQcbzXdQfFcp5j3LErFUWtHPik5Qfu38",authDomain:"where-is-waldo-fcfa2.firebaseapp.com",projectId:"where-is-waldo-fcfa2",storageBucket:"where-is-waldo-fcfa2.appspot.com",messagingSenderId:"318862658885",appId:"1:318862658885:web:cb2e2c6e6e4ab04f5ec22c"}),F=Object(C.c)(M),I=function(e){return Object(u.jsxs)(x.a,{show:e.showGameOverModal,onHide:e.toggleShowGameOverModal,children:[Object(u.jsx)(x.a.Header,{closeButton:!0,children:Object(u.jsx)(x.a.Title,{children:"Leaderboard"})}),Object(u.jsx)(x.a.Body,{children:Object(u.jsx)(j.a,{children:e.resultsData.map((function(e,t){return Object(u.jsxs)(j.a.Item,{children:[e.playerName,", time:",e.time,"s"]},t)}))})}),Object(u.jsx)(x.a.Footer,{children:Object(u.jsx)(S.a,{type:"submit",variant:"primary",onClick:e.toggleShowGameOverModal,children:"Close"})})]})};var N=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(d.a)(o,2),i=r[0],j=r[1],h=Object(n.useState)([]),b=Object(d.a)(h,2),f=b[0],g=b[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),x=p[0],v=p[1],S=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Object(C.b)(Object(C.a)(F,"results"));case 3:e.sent.forEach((function(e){t.push(e.data())})),g(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){c(!a)},M=function(){j(!i)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{getResultsData:S,showStartModal:a,toggleShowStartModal:y,handleStartModalSubmit:function(e,t){e.preventDefault(),v(t)}}),Object(u.jsx)(I,{showGameOverModal:i,toggleShowGameOverModal:M,resultsData:f}),Object(u.jsx)(w,{toggleShowStartModal:y,toggleShowGameOverModal:M,player:x}),Object(u.jsx)(O,{})]})},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/where-is-waldo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/where-is-waldo","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),W()}},[[87,1,2]]]);
//# sourceMappingURL=main.b0921b1a.chunk.js.map