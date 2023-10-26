import generateWaterCalculator from"./waterCalculator.js";import generateResult from"../utils/calculateResult.js";import generateEntry from"../utils/generateEntry.js";import generateAppendBtns from"../utils/generateAppend.js";const waterForm=document.querySelector(".form-water"),initialAsk=document.querySelector(".initial-ask"),btnsYesNo=document.querySelector(".btns-yes-no"),deleteYesNo=()=>{initialAsk.remove()},startDialisis=e=>{const t=document.createElement("section");t.classList.add("dialisis-container"),t.innerHTML='\n    <div class="dialisis yesterday-dialisis">\n        <div class="input last-day">\n        <label>Entra (Infunde) último día anterior (mL)</label>\n        <input type="number" />\n        </div>\n    </div>\n  ',e.appendChild(t);for(let e=1;e<=3;e++)generateEntry("entryDialisis",t);generateAppendBtns("appendDialisis",t);const r=document.querySelector(".apend-dialisis");document.querySelector(".add-dialisis").addEventListener("click",e=>{e.preventDefault(),generateEntry("entryDialisis",t,r)});document.querySelector(".calculate-dialisis").addEventListener("click",e=>{e.preventDefault(),t.removeChild(r),generateResult("dialisisResult",t),generateWaterCalculator(waterForm)})},yesAns=()=>{deleteYesNo(),generateWaterCalculator(waterForm)},noAns=()=>{deleteYesNo(),startDialisis(waterForm)},yesOrNo=e=>{e.preventDefault();"si"===e.target.textContent.toLowerCase()?(deleteYesNo(),generateWaterCalculator(waterForm)):(deleteYesNo(),startDialisis(waterForm))},runWaterForm=()=>{btnsYesNo.addEventListener("click",e=>{yesOrNo(e)})};export default runWaterForm;
//# sourceMappingURL=main.js.map
