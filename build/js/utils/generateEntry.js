import{entryDatas}from"./data.js";const generateEntry=(t,e,n=null)=>{const{extraClass:a,html:s,append:r,data:d}=entryDatas[t],{inputs:l}=d,c=document.createElement("div");c.classList.add("entry-data"),c.classList.add(a),c.innerHTML=s,null===n?r(c,e):r(c,e,n);for(let t in l){const{className:e,eventType:n,functionEvent:a}=l[t];c.querySelector("."+e).addEventListener(n,()=>{a()})}};export default generateEntry;
//# sourceMappingURL=generateEntry.js.map
