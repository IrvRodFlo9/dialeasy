import generateWaterCalculator from"./waterCalculator.js";import generateResult from"../utils/calculateResult.js";const waterForm=document.querySelector(".form-water"),initialAsk=document.querySelector(".initial-ask"),btnsYesNo=document.querySelector(".btns-yes-no"),deleteYesNo=()=>{initialAsk.remove()},generateDialisis=(e,t=!1,a=null)=>{const n=document.createElement("div");n.classList.add("dialisis"),n.classList.add("entry-data"),n.innerHTML='  \n    <div class="input">\n        <label>Entra (Infunde) mL</label>\n        <input type="number" />\n    </div>\n    <div class="input">\n        <label>Sale (Drena) mL</label>\n        <input type="number" />\n    </div>\n    <div class="dialisis-delta entry-result">\n        <p>Diferencia</p>\n        <p>-150 mL</p>\n    </div>',t?e.insertBefore(n,a):e.appendChild(n)},startDialisis=e=>{const t=document.createElement("section");t.classList.add("dialisis-container"),t.innerHTML='\n    <div class="dialisis yesterday-dialisis">\n        <div class="input last-day">\n        <label>Entra (Infunde) último día anterior (mL)</label>\n        <input type="number" />\n        </div>\n    </div>\n  ',e.appendChild(t);for(let e=1;e<=3;e++)generateDialisis(t);const a=document.createElement("div");a.classList.add("apend-container"),a.classList.add("apend-dialisis"),a.innerHTML='    \n    <button class="btn add-dialisis">Agregar Diálisis</button>\n    <button type="submit" class="btn btn-calculate calculate-dialisis">Calcular Total</button>\n  ',t.appendChild(a);document.querySelector(".add-dialisis").addEventListener("click",e=>{e.preventDefault(),generateDialisis(t,!0,a)});document.querySelector(".calculate-dialisis").addEventListener("click",e=>{e.preventDefault(),t.removeChild(a),generateResult("dialisisResult",t),generateWaterCalculator(waterForm)})},yesAns=()=>{deleteYesNo(),generateWaterCalculator(waterForm)},noAns=()=>{deleteYesNo(),startDialisis(waterForm)},yesOrNo=e=>{e.preventDefault();"si"===e.target.textContent.toLowerCase()?(deleteYesNo(),generateWaterCalculator(waterForm)):(deleteYesNo(),startDialisis(waterForm))},runWaterForm=()=>{btnsYesNo.addEventListener("click",e=>{yesOrNo(e)})};export default runWaterForm;
//# sourceMappingURL=main.js.map
