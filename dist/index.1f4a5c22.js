var e=globalThis,t={},n={},o=e.parcelRequire0664;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire0664=o),(0,o.register)("kHbSi",function(e,t){Object.defineProperty(e.exports,"convert",{get:()=>i,set:void 0,enumerable:!0,configurable:!0});var n=o("4Me3b"),r=o("1sX5S");function i(){let e=document.getElementById("source_region").value,t=document.getElementById("target_region").value,n=parseFloat(document.querySelector(".size-buttons-container button.active").innerHTML);if(console.log("sourceRegion:",e,"targetRegion:",t,"selectedSize:",n,typeof n),!t){alert('error: Please select "To" area');return}let o=(0,r.convertSize)(n,e,t);isNaN(o)?document.getElementById("output").innerHTML="Please select 'To' area":document.getElementById("output").innerHTML="Size "+o+" in "+t}document.addEventListener("DOMContentLoaded",()=>{(0,r.setDefaultSize)(),document.getElementById("source_region").addEventListener("change",e=>{let t=e.target.value;(0,r.populateSizes)(t,"size-button")}),document.getElementById("target_region").addEventListener("change",()=>{i()})}),window.onload=function(){let e=(0,n.default).map(e=>e.region),t=document.getElementById("source_region"),o=document.getElementById("target_region");e.forEach(e=>{let n=new Option(e,e);t.add(n),o.add(n.cloneNode(!0))}),(0,r.populateSizes)(e[0],"size-button")},document.getElementById("target_region").addEventListener("change",function(){let e=this.value,t=(0,r.getSizesForRegion)(e);return console.log(t),t})}),o("kHbSi");
//# sourceMappingURL=index.1f4a5c22.js.map
