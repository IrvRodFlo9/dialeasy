import{foods,entries}from"../utils/data.js";const calculateEquivalent=e=>{const{inputs:t,classDisplay:a}=entries.ingest,{inputQuantity:l,selectFood:s}=t,u=(e.querySelector("."+a),e.querySelector("."+l.className)),o=e.querySelector("."+s.className),r=foods[o.value].equivalent,c=u.value;return Math.round(r*c)};export default calculateEquivalent;
//# sourceMappingURL=calculateEquivalent.js.map
