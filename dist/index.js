!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(()=>(()=>{var e={849:(e,t,r)=>{e.exports=r.p+"eb2a74afcf58200a3a0bce55c3a757cc.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var n={};return(()=>{"use strict";r.r(n),r.d(n,{SelectItem:()=>l});const e=require("react");var t=r.n(e);r(849);const o=require("prop-types");var c=r.n(o);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,i,a=[],l=!0,s=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(r){var n=r.arrayProps,o=r.selectImg,c=r.selectClass,a=i((0,e.useState)(""),2),l=a[0],s=a[1],u=i((0,e.useState)(!1),2),f=u[0],m=u[1],d=(0,e.useRef)(),p=function(){document.querySelector(".selectItem__".concat(c,"__list")).classList.toggle("hide"),document.querySelector(".selectItem__".concat(c,"__field--img")).classList.toggle("rotate")};return list&&(0,e.useEffect)((function(){var e=function(e){d.current.contains(e.target)||(document.querySelector("selectItem__".concat(c,"__list")).classList.add("hide"),document.querySelector(".selectItem__".concat(c,"__field--img")).classList.remove("rotate"))};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}})),t().createElement("div",{className:"selectItem",ref:d},t().createElement("div",{id:"selectField",className:"selectItem__".concat(c,"__field"),onClick:function(){p()}},t().createElement("p",{id:"".concat(c)},!1===f?"Select your ".concat(c):l),t().createElement("img",{className:"selectItem__".concat(c,"__field--img"),src:o,alt:"Fleche ouverture du select"})),t().createElement("ul",{className:"selectItem__".concat(c,"__list hide")},n.map((function(e){return t().createElement("li",{className:"selectItem__".concat(c,"__list--option"),onClick:function(){s(e.name),m(!0),p()},key:e.abbreviation},t().createElement("p",null,e.name))}))))}l.propTypes={arrayProps:c().arrayOf(c().shape({name:c().string.isRequired,abbreviation:c().string.isRequired}).isRequired).isRequired,selectImg:c().string.isRequired,selectClass:c().string.isRequired}})(),n})()));