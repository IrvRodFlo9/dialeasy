import{entryDatas}from"./data.js";const generateEntry=(t,a,e=null)=>{const{extraClass:n,html:r,append:s}=entryDatas[t],d=document.createElement("div");d.classList.add("entry-data"),d.classList.add(n),d.innerHTML=r,null===e?s(d,a):s(d,a,e)};export default generateEntry;
//# sourceMappingURL=generateEntry.js.map
