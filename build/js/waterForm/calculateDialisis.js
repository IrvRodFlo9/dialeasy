import{entries}from"../utils/data.js";const calculateDialisis=e=>{const{inputs:s,classDisplay:a}=entries.dialisis,{inputDrain:l,inputInfuse:i}=s,t=e.previousElementSibling.querySelector("."+i.className),r=e.querySelector("."+l.className),u=(e.querySelector("."+a),t.value),c=r.value;return parseFloat(c)-parseFloat(u)};export default calculateDialisis;
//# sourceMappingURL=calculateDialisis.js.map
