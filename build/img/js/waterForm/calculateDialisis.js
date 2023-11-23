import{entries}from"../utils/data.js";const calculateDialisis=e=>{const{inputs:a}=entries.dialisis,{inputDrain:s,inputInfuse:t}=a,i=e.previousElementSibling.querySelector("."+t.className),l=e.querySelector("."+s.className),r=i.value,u=l.value;return Math.round(parseFloat(u)-parseFloat(r))};export default calculateDialisis;
//# sourceMappingURL=calculateDialisis.js.map
