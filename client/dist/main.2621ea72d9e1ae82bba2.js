/*! For license information please see main.2621ea72d9e1ae82bba2.js.LICENSE.txt */
"use strict";(self.webpackChunkJATE=self.webpackChunkJATE||[]).push([[792],{744:(n,t,r)=>{var e=r(730),o=r(436);function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}function i(){i=function(){return t};var n,t={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(n,t,r){n[t]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{f({},"")}catch(n){f=function(n,t,r){return n[t]=r}}function h(n,t,r,e){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new N(e||[]);return o(i,"_invoke",{value:O(n,r,c)}),i}function d(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=h;var p="suspendedStart",b="suspendedYield",y="executing",v="completed",g={};function m(){}function w(){}function _(){}var x={};f(x,u,(function(){return this}));var k=Object.getPrototypeOf,j=k&&k(k(I([])));j&&j!==r&&e.call(j,u)&&(x=j);var S=_.prototype=m.prototype=Object.create(x);function L(n){["next","throw","return"].forEach((function(t){f(n,t,(function(n){return this._invoke(t,n)}))}))}function E(n,t){function r(o,i,c,u){var l=d(n[o],n,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&e.call(f,"__await")?t.resolve(f.__await).then((function(n){r("next",n,c,u)}),(function(n){r("throw",n,c,u)})):t.resolve(f).then((function(n){s.value=n,c(s)}),(function(n){return r("throw",n,c,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(n,e){function o(){return new t((function(t,o){r(n,e,t,o)}))}return i=i?i.then(o,o):o()}})}function O(t,r,e){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:n,done:!0}}for(e.method=a,e.arg=i;;){var c=e.delegate;if(c){var u=P(c,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=y;var l=d(t,r,e);if("normal"===l.type){if(o=e.done?v:b,l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=v,e.method="throw",e.arg=l.arg)}}}function P(t,r){var e=r.method,o=t.iterator[e];if(o===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=n,P(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function A(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function N(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(T,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return i.next=i}}throw new TypeError(a(t)+" is not iterable")}return w.prototype=_,o(S,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,_):(n.__proto__=_,f(n,s,"GeneratorFunction")),n.prototype=Object.create(S),n},t.awrap=function(n){return{__await:n}},L(E.prototype),f(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(n,r,e,o,a){void 0===a&&(a=Promise);var i=new E(h(n,r,e,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},L(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),l=e.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),g},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:I(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),g}},t}function c(n,t,r,e,o,a,i){try{var c=n[a](i),u=c.value}catch(n){return void r(n)}c.done?t(u):Promise.resolve(u).then(e,o)}function u(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var a=n.apply(t,r);function i(n){c(a,e,o,i,u,"next",n)}function u(n){c(a,e,o,i,u,"throw",n)}i(void 0)}))}}var l=function(){var n=u(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.P2)("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")||n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0})}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=u(i().mark((function n(t){var r,e,a,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.P2)("jate",1);case 2:return r=n.sent,e=r.transaction("jate","readwrite"),a=e.objectStore("jate"),c=a.put({id:1,value:t}),n.next=8,c;case 8:u=n.sent,console.log("Data saved to the database",u);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=u(i().mark((function n(){var t,r,e,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.P2)("jate",1);case 2:return t=n.sent,r=t.transaction("jate","readonly"),e=r.objectStore("jate"),a=e.get(1),n.next=8,a;case 8:return c=n.sent,console.log("Data retrieved from database",c),n.abrupt("return",null==c?void 0:c.value);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function h(n){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(n)}function d(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,b(e.key),e)}}function p(n,t,r){return t&&d(n.prototype,t),r&&d(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function b(n){var t=function(n,t){if("object"!=h(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=h(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==h(t)?t:t+""}l();var y=p((function n(){var t=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),f().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||r||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),s(localStorage.getItem("content"))}))})),v=r(72),g=r.n(v),m=r(825),w=r.n(m),_=r(659),x=r.n(_),k=r(56),j=r.n(k),S=r(540),L=r.n(S),E=r(113),O=r.n(E),P=r(16),T={};T.styleTagTransform=O(),T.setAttributes=j(),T.insert=x().bind(null,"head"),T.domAPI=w(),T.insertStyleElement=L(),g()(P.A,T),P.A&&P.A.locals&&P.A.locals;var A,N=document.querySelector("#main");N.innerHTML="",void 0===new y&&((A=document.createElement("div")).classList.add("spinner"),A.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',N.appendChild(A)),"serviceWorker"in navigator?new e.JK("/src-sw.js").register():console.error("Service workers are not supported in this browser.")},16:(n,t,r)=>{r.d(t,{A:()=>c});var e=r(601),o=r.n(e),a=r(314),i=r.n(a)()(o());i.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=i}},n=>{n.O(0,[429],(()=>(744,n(n.s=744)))),n.O()}]);
