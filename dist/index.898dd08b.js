!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[o]&&i[o],d=u.cache||{},f="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,n){if(!d[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(u)return u(t,!0);if(f&&"string"==typeof t)return f(t);var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}s.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},s.cache={};var c=d[t]=new l.Module(t);e[t][0].call(c.exports,s,c,c.exports,this)}return d[t].exports;function s(e){var t=s.resolve(e);return!1===t?{}:l(t)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=d,l.parent=u,l.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(l,"root",{get:function(){return i[o]}}),i[o]=l;for(var a=0;a<t.length;a++)l(t[a]);if(n){var c=l(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({jmHfV:[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js"),r=e("./sizes.js"),i=o.interopDefault(r),u=e("./converter.js");document.addEventListener("DOMContentLoaded",()=>{(0,u.setDefaultSize)(),document.getElementById("source_region").addEventListener("change",e=>{let t=e.target.value;(0,u.populateSizes)(t,"size-button")}),document.getElementById("target_region").addEventListener("change",()=>{(0,u.convert)()})}),window.onload=function(){let e=(0,i.default).map(e=>e.region),t=document.getElementById("source_region"),n=document.getElementById("target_region");e.forEach(e=>{let o=new Option(e,e);t.add(o),n.add(o.cloneNode(!0))}),(0,u.populateSizes)(e[0],"size-button")},document.getElementById("target_region").addEventListener("change",function(){let e=this.value,t=(0,u.getSizesForRegion)(e);return console.log(t),t})},{"./sizes.js":"2rRka","./converter.js":"32kUO","@parcel/transformer-js/src/esmodule-helpers.js":"7rhan"}],"7rhan":[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["jmHfV"],"jmHfV","parcelRequire0664");
//# sourceMappingURL=index.898dd08b.js.map
