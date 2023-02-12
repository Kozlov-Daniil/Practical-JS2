(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #2196F3;\r\n   padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }\r\n\r\n .author{\r\n    font-size: .8rem;\r\n }\r\n\r\n.floating-btn{\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px;\r\n}\r\n\r\n.modal{\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n}\r\n\r\n.modal > h1{\r\n    text-align: center;\r\n}\r\n\r\n.modal .modal-content{\r\n    padding: 1rem;\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{static create(n){return fetch("https://practical-js2-default-rtdb.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>(n.id=e.name,n))).then(t).then(e.renderList)}static fetch(e){return e?fetch(`https://practical-js2-default-rtdb.firebaseio.com/question.json?auth=${e}`).then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=r(),t=e.length?e.map(o).join(" "):'<div class="mui--text-headline">Вы пока ничего не спрашивали</div>';document.getElementById("list").innerHTML=t}static listToHtml(e){return e.length?`<ol>${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function t(e){const t=r();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(e){return`\n    <div class="mui--text-black-54">\n        ${new Date(e.date).toLocaleDateString()}\n        ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.text}</div>\n    <br>\n    `}function a(e){return e.length>=10}function i(e,t){const n=document.createElement("div");n.classList.add("modal"),n.innerHTML=`\n    <h1>${e}</h1>\n    <div class="modal-content">${t}</div>\n    `,mui.overlay("on",n)}var s=n(379),c=n.n(s),d=n(795),l=n.n(d),u=n(569),p=n.n(u),m=n(565),f=n.n(m),h=n(216),v=n.n(h),b=n(589),y=n.n(b),g=n(28),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),c()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),E=S.querySelector("#submit");function j(t){t.preventDefault();const n=t.target.querySelector("button"),r=t.target.querySelector("#email").value,o=t.target.querySelector("#password").value;n.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDSYmB6ihaHcxINiRcTCEwwBUs4ERJoUo",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(r,o).then(e.fetch).then(C).then((()=>n.disabled=!1))}function C(t){"string"==typeof t?i("Ошибка",t):i("Список вопросов",e.listToHtml(t))}window.addEventListener("load",e.renderList),S.addEventListener("submit",(function(t){if(t.preventDefault(),a(T.value)){const t={text:T.value.trim(),date:(new Date).toJSON()};E.disabled=!0,e.create(t).then((()=>{T.value="",T.className="",E.disabled=!1}))}})),w.addEventListener("click",(function(){i("Авторизация",'\n    <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="email" id="email" required>\n            <label for="email">Email</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="password" id="password" required>\n            <label for="password">Пароль</label>\n        </div>\n        <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>\n    </form>\n    '),document.getElementById("auth-form").addEventListener("submit",j,{once:!0})})),T.addEventListener("input",(()=>{E.disabled=!a(T.value)}))})()})();