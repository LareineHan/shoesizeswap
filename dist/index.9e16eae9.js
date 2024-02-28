var e=[{region:"US(M)",sizes:[3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22]},{region:"US(W)",sizes:[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5]},{region:"UK",sizes:[3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21]},{region:"KOREA",sizes:[220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400]},{region:"JAPAN",sizes:[22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40]},{region:"EU",sizes:[35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,41,41.5,42,42.5,43,44,44.5,45,45.5,46,46.5,47,47.5,48,48.5,49,49.5,50,50.5,51,51.5,52,52.5,53,53.5,54,54.5,55]}];function t(e,i){let r=document.getElementsByClassName(i)[0];r.innerHTML="";let l=n(e);l&&l.forEach(e=>{let t=document.createElement("button");t.innerHTML=e,t.value=e,t.addEventListener("click",function(){document.querySelectorAll(".size-buttons-container button").forEach(e=>{e.classList.toggle("active",e===this)}),parseFloat(this.value),o()}),r.appendChild(t)});let d=document.createElement("button");d.innerHTML="↻",d.addEventListener("click",function(){document.querySelectorAll(".size-buttons-container button").forEach(e=>{e.classList.remove("active")});let e=document.getElementById("source_region"),n=document.getElementById("target_region"),o=document.getElementById("output");e.selectedIndex=0,n.selectedIndex=0,o.innerHTML="",t(e.value,"size-button")}),r.appendChild(d);let c=document.getElementById("target_region"),s=document.getElementById("source_region").value,a=new Option("Select","");c.innerHTML="",c.add(a),""!==s&&(({"US(M)":["US(W)","UK","EU","KOREA","JAPAN"],"US(W)":["US(M)","UK","EU","KOREA","JAPAN"],UK:["US(M)","US(W)","EU","KOREA","JAPAN"],KOREA:["US(M)","US(W)","UK","EU","JAPAN"],JAPAN:["US(M)","US(W)","UK","EU","KOREA"],EU:["US(M)","US(W)","UK","KOREA","JAPAN"]})[s]||[]).forEach(e=>{let t=new Option(e,e);c.add(t)})}function n(t){let n=e.find(e=>e.region===t);return n?n.sizes:[]}function o(){let t=document.getElementById("source_region").value,n=document.getElementById("target_region").value,o=document.querySelector(".size-buttons-container button.active"),i=parseFloat(o?o.innerHTML:null);if(console.log("sourceRegion:",t,"targetRegion:",n,"selectedSize:",i,typeof i),!n){alert('error: Please select "To" area');return}let r=function(t,n,o){let i=e.find(e=>e.region===n),r=e.find(e=>e.region===o);if(console.log("소스지역:",i,"타겟지역:",r),i&&r){let e=i.sizes.findIndex(e=>e===t);if(-1!==e){let t=r.sizes[e];if(t)return t}}}(i,t,n);isNaN(r)?document.getElementById("output").innerHTML="Please select 'To' area":document.getElementById("output").innerHTML="Size "+r+" in "+n}document.addEventListener("DOMContentLoaded",()=>{let n,i;n=e[0].region,i=e[0].sizes[5],document.getElementById("output").innerHTML="Choose 'To'.",console.log("default size and region is all set",n,i),document.querySelectorAll(".size-buttons-container button").forEach(e=>{parseFloat(e.value)===i?e.classList.add("active"):e.classList.remove("active")}),document.getElementById("source_region").addEventListener("change",e=>{t(e.target.value,"size-button")}),document.getElementById("target_region").addEventListener("change",()=>{o()})}),window.onload=function(){let n=e.map(e=>e.region),o=document.getElementById("source_region"),i=document.getElementById("target_region");n.forEach(e=>{let t=new Option(e,e);o.add(t),i.add(t.cloneNode(!0))}),t(n[0],"size-button")},document.getElementById("target_region").addEventListener("change",function(){let e=n(this.value);return console.log(e),e});
//# sourceMappingURL=index.9e16eae9.js.map
