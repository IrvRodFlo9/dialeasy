import calculateIngest from"../ingestForm/calculateIngest.js";import calculateEquivalent from"../ingestForm/calculateEquivalent.js";import calculateDialisis from"../waterForm/calculateDialisis.js";import calculateUF from"../waterForm/calculateUF.js";import calculateWater from"../waterForm/calculateWater.js";import unlockQuantity from"../ingestForm/unlockQuantity.js";import unlockDialisisEntries from"../waterForm/unlockDialisisEntries.js";import unlockCalculateWater from"../waterForm/unlockCalculateWater.js";import unlosckCalculateBtn from"../ingestForm/unlockCalculateBtn.js";import generateFoods from"../ingestForm/generateFoods.js";import generateEntryResult from"./generateEntryResult.js";import generateResult from"./generateResult.js";import generateWaterCalculator from"../waterForm/generateWaterCalculator.js";export const foods={water:{optionName:"Agua",unit:"mL",equivalent:1},papaya:{optionName:"Papaya",unit:"Tazas",equivalent:100},pinapple:{optionName:"Piña",unit:"Tazas",equivalent:100},lettuce:{optionName:"Lechuga",unit:"Tazas",equivalent:100},jelly:{optionName:"Gelatina",unit:"Tazas",equivalent:250},potato:{optionName:"Papa",unit:"Tazas",equivalent:50},apple:{optionName:"Manzana",unit:"Tazas",equivalent:50}};export const inputsFunctions={inputQuantity:e=>{generateEntryResult("entryIngest",e,calculateEquivalent),unlosckCalculateBtn(e)},selectFood:e=>{unlockQuantity(e)},inputInfuse:e=>{calculateDialisis(e)},inputDrain:e=>{calculateDialisis(e)},inputsWaterCalculator:(e,t)=>{unlockCalculateWater(e,t)},inpuInfuseYesterday:e=>{unlockDialisisEntries(e)}};export const entries={ingest:{inputs:{inputQuantity:{className:"input-quantity",eventType:"input",functionEvent:e=>{inputsFunctions.inputQuantity(e)}},selectFood:{className:"select-food",eventType:"change",functionEvent:e=>{inputsFunctions.selectFood(e)}}},classDisplay:"water-quantity"},dialisis:{inputs:{inputInfuse:{className:"input-infuse",eventType:"input",functionEvent:e=>{inputsFunctions.inputInfuse(e)}},inputDrain:{className:"input-drain",eventType:"input",functionEvent:e=>{inputsFunctions.inputDrain(e)}}},classDisplay:"dialisis-equivalent"},yesterday:{inputs:{inputInfuseYesterday:{className:"input-infuse",eventType:"input",functionEvent:e=>{inputsFunctions.inpuInfuseYesterday(e)}}}}};export const entriesResults={entryIngest:{textLabel:"Cantidad de Agua",classStyle:"water-equivalent",classDisplay:["equivalent-value",entries.ingest.classDisplay]},entryDialisis:{textLabel:"Diferencia",classStyle:"dialisis-delta",classDisplay:[entries.dialisis.classDisplay]}};export const entryDatas={entryIngest:{extraClasses:["ingest"],html:()=>`  \n        <div class="input input-amount">\n            <label>Cantidad <span class="display-units"></span></label>\n            <input type="number" class="${entries.ingest.inputs.inputQuantity.className}" disabled min="0"/>\n        </div>\n        <div class="input select-ingest">\n            <label>Alimento</label>\n            <select class="${entries.ingest.inputs.selectFood.className}">\n              <option selected disabled>Seleccione alimento </option>\n              ${generateFoods(foods)}\n            </select>\n        </div>\n      `,data:entries.ingest},entryInfuseYesterday:{extraClasses:["dialisis","yesterday-dialisis"],html:()=>`  \n        <div class="input last-day">\n          <label>Entra (Infunde) último día anterior (mL)</label>\n          <input type="number" class="${entries.yesterday.inputs.inputInfuseYesterday.className}" />\n        </div>\n      `,data:entries.yesterday},entryDialisis:{extraClasses:["dialisis"],html:()=>`  \n        <div class="input">\n          <label>Entra (Infunde) mL</label>\n          <input type="number" class="${entries.dialisis.inputs.inputInfuse.className} min="0""/>\n        </div>\n        <div class="input">\n          <label>Sale (Drena) mL</label>\n          <input type="number" class="${entries.dialisis.inputs.inputDrain.className} min="0""/>\n        </div>\n        <div class="dialisis-delta entry-result">\n          <p>Diferencia</p>\n          <p><span class="${entries.dialisis.classDisplay}"></span> mL</p>\n        </div>\n      `,data:entries.dialisis}};export const appendBtns={appendIngest:{classMain:"apend-ingest",addText:"Agregar Ingesta",classAdd:"add-ingest",classCalculate:"calculate-ingest",entryToAdd:"entryIngest",resultType:"ingestResult",calculateFunction:(e,t)=>{generateResult(e,t)}},appendDialisis:{classMain:"apend-dialisis",addText:"Agregar Dialisis",classAdd:"add-dialisis",classCalculate:"calculate-dialisis",entryToAdd:"entryDialisis",resultType:"dialisisResult",calculateFunction:(e,t)=>{const a=calculateUF();generateResult(e,t),generateWaterCalculator(t,a)}}};export const results={waterResult:{calculator:()=>calculateWater(),extraClass:"water-result",title:"Resultado Vía Oral"},dialisisResult:{calculator:()=>calculateUF(),extraClass:"dialisis-result",title:"La Ultrafiltración 24 h es:"},ingestResult:{calculator:()=>calculateIngest(),extraClass:"ingest-result",title:"El total de agua es:"}};export const forms={dialisis:{typeAppendBtns:"appendDialisis"},ingest:{typeAppendBtns:"appendIngest"}};
//# sourceMappingURL=data.js.map
