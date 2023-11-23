import{foods,entries}from"../utils/data.js";const calculateEquivalent=e=>{const{inputs:t}=entries.ingest,{inputQuantity:a,selectFood:l}=t,u=e.querySelector("."+a.className),s=e.querySelector("."+l.className),o=foods[s.value].equivalent,n=u.value;return Math.round(o*n)};export default calculateEquivalent;
//# sourceMappingURL=calculateEquivalent.js.map
