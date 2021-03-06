/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}var e=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",n=/\[([^]*?)\]/gm;function s(t,e){for(var i=[],n=0,s=t.length;n<s;n++)i.push(t[n].substr(0,e));return i}var r=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function o(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,s=e;n<s.length;n++){var r=s[n];for(var o in r)t[o]=r[o]}return t}var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"],l=s(c,3),d={dayNamesShort:s(a,3),dayNames:a,monthNamesShort:l,monthNames:c,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},h=o({},d),u=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},p={D:function(t){return String(t.getDate())},DD:function(t){return u(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return u(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return u(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return u(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return u(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return u(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return u(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return u(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return u(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return u(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return u(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(Math.floor(Math.abs(e)/60),2)+":"+u(Math.abs(e)%60,2)}},f=function(t){return+t-1},m=[null,"[1-9]\\d?"],g=[null,i],y=["isPm",i,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],_=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],v=(r("monthNamesShort"),r("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var S=function(t,i,s){if(void 0===i&&(i=v.default),void 0===s&&(s={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var r=[];i=(i=v[i]||i).replace(n,(function(t,e){return r.push(e),"@@@"}));var a=o(o({},h),s);return(i=i.replace(e,(function(e){return p[e](t,a)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function w(t){return t.substr(0,t.indexOf("."))}var b=["closed","locked","off"],x=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s},C=function(t){x(window,"haptic",t)},E=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,s=w(e),r="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(r,n,{entity_id:e})}(t,e,b.includes(t.states[e].state))},N=function(t,e,i,n,s){var r;if(s&&i.double_tap_action?r=i.double_tap_action:n&&i.hold_action?r=i.hold_action:!n&&i.tap_action&&(r=i.tap_action),r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?"))switch(r.action){case"more-info":(r.entity||i.entity||i.camera_image)&&(x(t,"hass-more-info",{entityId:r.entity?r.entity:i.entity?i.entity:i.camera_image}),r.haptic&&C(r.haptic));break;case"navigate":r.navigation_path&&(function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),x(window,"location-changed",{replace:i})}(0,r.navigation_path),r.haptic&&C(r.haptic));break;case"url":r.url_path&&window.open(r.url_path),r.haptic&&C(r.haptic);break;case"toggle":i.entity&&(E(e,i.entity),r.haptic&&C(r.haptic));break;case"call-service":if(!r.service)return;var o=r.service.split(".",2),a=o[0],c=o[1],l=Object.assign({},r.service_data);"entity"===l.entity_id&&(l.entity_id=i.entity),e.callService(a,c,l),r.haptic&&C(r.haptic)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,T=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},M=`{{lit-${String(Math.random()).slice(2)}}}`,A=`\x3c!--${M}--\x3e`,O=new RegExp(`${M}|${A}`);class V{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)$(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=c[a],i=Y.exec(e)[2],n=i.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const r=s.split(O);this.parts.push({type:"attribute",index:o,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(M)>=0){const n=t.parentNode,s=e.split(O),r=s.length-1;for(let e=0;e<r;e++){let i,r=s[e];if(""===r)i=D();else{const t=Y.exec(r);null!==t&&$(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===s[r]?(n.insertBefore(D(),t),i.push(t)):t.data=s[r],a+=r}}else if(8===t.nodeType)if(t.data===M){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(D(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(M,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const $=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},k=t=>-1!==t.index,D=()=>document.createComment(""),Y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function F(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=U(n),o=n[r],a=-1,c=0;const l=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,r=U(n,r),o=n[r]}l.forEach(t=>t.parentNode.removeChild(t))}const H=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},U=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(k(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const j=new WeakMap,R=t=>"function"==typeof t&&j.has(t),I={},z={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class L{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let s,r=0,o=0,a=n.nextNode();for(;r<i.length;)if(s=i[r],k(s)){for(;o<s.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return P&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const q=` ${M} `;class B{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===t.indexOf("--\x3e",s+1);const r=Y.exec(t);e+=null===r?t+(i?q:A):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+M}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const W=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Z{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new G(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(W(t)||!J(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class G{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===I||W(t)&&t===this.value||(this.value=t,R(t)||(this.committer.dirty=!0))}commit(){for(;R(this.value);){const t=this.value;this.value=I,t(this)}this.value!==I&&this.committer.commit()}}class K{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(D()),this.endNode=t.appendChild(D())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=D()),t.__insert(this.endNode=D())}insertAfterPart(t){t.__insert(this.startNode=D()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;R(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=I,t(this)}const t=this.__pendingValue;t!==I&&(W(t)?t!==this.value&&this.__commitText(t):t instanceof B?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===z?(this.value=z,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof L&&this.value.template===e)this.value.update(t.values);else{const i=new L(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new K(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){T(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Q{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;R(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=I,t(this)}if(this.__pendingValue===I)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=I}}class X extends Z{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class tt extends G{}let et=!1;(()=>{try{const t={get capture(){return et=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class it{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;R(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=I,t(this)}if(this.__pendingValue===I)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=nt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=I}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const nt=t=>t&&(et?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function st(t){let e=rt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},rt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(M);return i=e.keyString.get(n),void 0===i&&(i=new V(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const rt=new Map,ot=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const at=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new X(t,e.slice(1),i).parts}return"@"===s?[new it(t,e.slice(1),n.eventContext)]:"?"===s?[new Q(t,e.slice(1),i)]:new Z(t,e,i).parts}handleTextExpression(t){return new K(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const ct=(t,...e)=>new B(t,e,"html",at)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,lt=(t,e)=>`${t}--${e}`;let dt=!0;void 0===window.ShadyCSS?dt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),dt=!1);const ht=t=>e=>{const i=lt(e.type,t);let n=rt.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},rt.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(M);if(s=n.keyString.get(r),void 0===s){const i=e.getTemplateElement();dt&&window.ShadyCSS.prepareTemplateDom(i,t),s=new V(e,i),n.keyString.set(r,s)}return n.stringsArray.set(e.strings,s),s},ut=["html","svg"],pt=new Set,ft=(t,e,i)=>{pt.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{ut.forEach(e=>{const i=rt.get(lt(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),F(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=U(s),a=0,c=-1;for(;r.nextNode();){for(c++,r.currentNode===i&&(a=H(e),i.parentNode.insertBefore(e,i));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=U(s,o);return}o=U(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),F(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const mt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},gt=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:gt};class _t extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=yt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||yt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=gt){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||mt,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||mt.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=yt){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,s=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}_t.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const vt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),St=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):St(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const bt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol();class Ct{constructor(t,e){if(e!==xt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(bt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Et=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof Ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new Ct(i,xt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Nt={};class Pt extends _t{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?bt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Nt}}Pt.finalized=!0,Pt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=ot.has(e),r=dt&&11===e.nodeType&&!!e.host,o=r&&!pt.has(n),a=o?document.createDocumentFragment():e;if(((t,e,i)=>{let n=ot.get(e);void 0===n&&(T(e,e.firstChild),ot.set(e,n=new K(Object.assign({templateFactory:st},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:ht(n)},i)),o){const t=ot.get(a);ot.delete(a);const i=t.value instanceof L?t.value.template:void 0;ft(n,a,i),T(e,e.firstChild),e.appendChild(a),ot.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)};class Tt{static error(t,e){const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),ct`${i}`}}const Mt=Et`
  .card-header-wrapper {
    display: flex;
    padding: 24px 16px 16px;
  }

  .card-header-wrapper .count {
    margin-left: auto;
    align-self: center;
  }

  .card-header {
    color: var(--ha-card-header-color, --primary-text-color);
    font-family: var(--ha-card-header-font-family);
    letter-spacing: -0.012em;
    line-height: 32px;
  }

  .card-header > .name {
    font-size: var(--ha-card-header-font-size, 24px);
  }

  .card-header > .name > .icon {
    padding: 0px 18px 0px 8px;
  }

  .folder-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
  }

  .folder-item .icon-wrapper {
    flex-basis: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
  }

  .folder-item .item-name {
    margin-left: 16px;
    flex: 1 0 60px;
  }

  .card-empty {
    padding: 16px;
  }
`;var At,Ot;!function(t){t.DEFAULT="default",t.ASC="ascending",t.DESC="descending"}(At||(At={}));let Vt=Ot=class extends Pt{constructor(){super(...arguments),this._folderEntities=null}get entity(){return this.hass.states[this.config.entity]}get selectedEntityIndex(){const t=this.folderEntities.indexOf(this.config.entity);return t>-1?t:0}get sortOrder(){var t;return null!==(t=this.config.sort)&&void 0!==t?t:At.DEFAULT}get folderEntities(){return null===this._folderEntities&&(this._folderEntities=Object.keys(this.hass.states).filter(t=>"sensor"===w(t)&&Boolean(this.hass.states[t].attributes.file_list))),this._folderEntities}render(){var t;return 0===this.folderEntities.length?ct`<div>
        It looks like you don't have any
        <a href="https://www.home-assistant.io/integrations/folder/" target="_blank"
          >Folder sensors</a
        >
        yet. Please add one and come back!
      </div>`:ct`<div class="card-config">
      <paper-dropdown-menu
        style="width: 100%"
        label="Entity (Required)"
        .configValue=${"entity"}
        @value-changed=${this.onValueChange}
      >
        <paper-listbox slot="dropdown-content" .selected=${this.selectedEntityIndex}>
          ${this.folderEntities.map(t=>ct`<paper-item>${t}</paper-item>`)}
        </paper-listbox>
      </paper-dropdown-menu>
      <div class="side-by-side">
        <paper-input
          label="Title (Optional)"
          .configValue=${"title"}
          .value=${this.config.title}
          .placeholder=${null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name}
          @value-changed=${this.onValueChange}
        ></paper-input>
        <paper-input
          label="Header Icon (Optional)"
          .configValue=${"icon"}
          .value=${this.config.icon}
          @value-changed=${this.onValueChange}
        ></paper-input>
      </div>
      <div class="side-by-side">
        <paper-input
          type="number"
          label="Max Count (Optional)"
          .configValue=${"max_count"}
          .value=${this.config.max_count}
          @value-changed=${this.onValueChange}
        ></paper-input>
        <paper-dropdown-menu
          style="width: 100%"
          label="Sort Order (Optional)"
          .configValue=${"sort"}
          @value-changed=${this.onValueChange}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${Object.values(At).indexOf(this.sortOrder)}
          >
            ${Object.values(At).map(t=>ct`<paper-item>${t}</paper-item>`)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      <div class="side-by-side">
        <ha-switch
          .checked="${this.config.show_count}"
          .configValue="${"show_count"}"
          @change="${this.onSwitchChange}"
        >
          Show Count?
        </ha-switch>
        <ha-switch
          .checked="${this.config.show_hidden}"
          .configValue="${"show_hidden"}"
          @change="${this.onSwitchChange}"
        >
          Show Hidden?
        </ha-switch>
      </div>
      <p>
        Note: tap_action is not supported in Visual Editor yet.
      </p>
    </div> `}setConfig(t){this.config=t}onSwitchChange({target:{checked:t,configValue:e}}){const i=Object.assign(Object.assign({},this.config),{[e]:t});this.dispatch(i)}onValueChange(t){const e=t.target.configValue;let i=t.detail.value;if("sort"===e&&(i="default"===i?void 0:i),"max_count"===e&&(i=parseInt(i),isNaN(i)))return;if(this.config[e]===i)return;const n=Object.assign(Object.assign({},this.config),{[e]:i});this.dispatch(n)}dispatch(t){const e=new CustomEvent(Ot.CONFIG_CHANGED_EVENT,{bubbles:!0,composed:!0,detail:{config:t}});this.dispatchEvent(e)}static get styles(){return Et`
      ha-switch {
        padding: 16px 0;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
    `}};Vt.CONFIG_CHANGED_EVENT="config-changed",t([wt({type:Object})],Vt.prototype,"hass",void 0),t([wt()],Vt.prototype,"config",void 0),Vt=Ot=t([vt("folder-card-editor")],Vt),console.info("%c  FOLDER-CARD \n%c  Version 0.4.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"folder-card",name:"Folder Card",description:"The Folder Card allows you to list and interact with files from a Folder Sensor."});let $t=class extends Pt{constructor(){super(...arguments),this.isExpanded=!1}get entity(){return this.hass.states[this.config.entity]}get files(){var t;let e=null===(t=this.entity)||void 0===t?void 0:t.attributes.file_list;return!1===Boolean(this.config.show_hidden)&&(e=e.filter(t=>-1!==this.getFileName(t).indexOf("."))),this.config.sort&&(e=e.sort((t,e)=>{const i=t>e?-1:1;return this.config.sort===At.ASC?-1*i:i})),!this.isExpanded&&this.config.max_count&&(e=e.slice(0,this.config.max_count)),e}get totalFileCount(){var t,e;return null!==(e=null===(t=this.entity)||void 0===t?void 0:t.attributes.file_list.length)&&void 0!==e?e:0}get canExpand(){return Boolean(this.config.max_count)&&this.totalFileCount>this.config.max_count}get cardTitle(){var t;return this.config.title&&this.config.title.length>0?this.config.title:null===(t=this.entity)||void 0===t?void 0:t.attributes.friendly_name}render(){return this.entity?this.entity.attributes.file_list?0===this.files.length?this.renderEmpty():ct`
      <ha-card>
        ${this.renderHeader()}
        <div class="card-content">
          ${this.files.map(t=>this.renderFile(t))}
          ${this.canExpand?this.renderCollapse():""}
        </div>
      </ha-card>
    `:Tt.error("The entity you passed doesn't appear to be a folder sensor",this.config):Tt.error("Entity not found",this.config)}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("You need to set an entity");this.config=t}getCardSize(){return 6}renderFile(t){return ct`
      <div class="folder-item" @click=${()=>this.onSelectFile(t)}>
        <div class="icon-wrapper"><ha-icon icon="mdi:file"></ha-icon></div>
        <div class="item-name">${this.getFileName(t)}</div>
      </div>
    `}renderCollapse(){const t=this.isExpanded?"Collapse":"Expand",e=this.isExpanded?"mdi:arrow-collapse-vertical":"mdi:arrow-expand-vertical";return ct`
      <div class="folder-item" @click=${this.onToggleCollapse}>
        <div class="icon-wrapper"><ha-icon .icon="${e}"></ha-icon></div>
        <div class="item-name">${t}</div>
      </div>
    `}renderHeader(){return this.cardTitle?ct`
      <div class="card-header-wrapper">
        <div class="card-header">
          <div class="name">
            ${this.config.icon?ct`<ha-icon class="icon" icon=${this.config.icon}></ha-icon>`:""}
            ${this.cardTitle}
          </div>
        </div>
        ${this.config.show_count?ct`<div class="count">Total: ${this.totalFileCount}</div>`:""}
      </div>
    `:null}renderEmpty(){return ct`
      <ha-card>
        ${this.renderHeader()}
        <div class="card-empty">There are no files to show.</div>
      </ha-card>
    `}getFileName(t){return t.split("/").slice(-1)[0]}onSelectFile(t){const e=this.buildActionConfig(t);N(this,this.hass,e,!1,!1)}onToggleCollapse(){this.isExpanded=!this.isExpanded}buildActionConfig(t){var e;const i={entity:this.config.entity,tap_action:Object.assign({},this.config.tap_action)},n={file:t};return"call-service"===(null===(e=i.tap_action)||void 0===e?void 0:e.action)&&(i.tap_action.service_data=Object.assign({},i.tap_action.service_data,n)),i}static get styles(){return Mt}static getConfigElement(){return document.createElement("folder-card-editor")}};t([wt()],$t.prototype,"hass",void 0),t([wt()],$t.prototype,"config",void 0),t([wt()],$t.prototype,"isExpanded",void 0),$t=t([vt("folder-card")],$t);export{$t as FolderCard};
