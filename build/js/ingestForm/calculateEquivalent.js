import{foods,entries}from"../utils/data.js";const calculateEquivalent=e=>{const{inputs:t,classDisplay:a}=entries.ingest,{inputQuantity:l,selectFood:s}=t,o=e.querySelector("."+a),u=e.querySelector("."+l.className),n=e.querySelector("."+s.className),c=foods[n.value].equivalent,i=u.value,r=Math.round(c*i);o.textContent=r};export default calculateEquivalent;
//# sourceMappingURL=calculateEquivalent.js.map
