import{entries}from"../utils/data.js";const calculateDialisis=e=>{const{inputs:s,classDisplay:t}=entries.dialisis,{inputDrain:a,inputInfuse:l}=s,i=e.previousElementSibling.querySelector("."+l.className),r=e.querySelector("."+a.className),u=e.querySelector("."+t),n=i.value,c=r.value,o=parseFloat(c)-parseFloat(n);u.textContent=o};export default calculateDialisis;
//# sourceMappingURL=calculateDialisis.js.map
