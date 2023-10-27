import{foods,entries}from"../utils/data.js";const unlockQuantity=t=>{const{inputs:e}=entries.ingest,{inputQuantity:s,selectFood:o}=e,n=t.querySelector(".display-units"),u=t.querySelector("."+s.className),i=t.querySelector("."+o.className);n.textContent=`(${foods[i.value].unit})`,u.disabled=!1};export default unlockQuantity;
//# sourceMappingURL=unlockQuantity.js.map
