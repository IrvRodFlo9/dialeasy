import calculateIngest from "../ingestForm/calculateIngest.js";
import calculateEquivalent from "../ingestForm/calculateEquivalent.js";
import calculateDialisis from "../waterForm/calculateDialisis.js";
import calculateUF from "../waterForm/calculateUF.js";
import calculateWater from "../waterForm/calculateWater.js";
import unlockQuantity from "../ingestForm/unlockQuantity.js";
import unlockCalculateWater from "../waterForm/unlockCalculateWater.js";
import generateFoods from "../ingestForm/generateFoods.js";
import generateEntryResult from "./generateEntryResult.js";
import generateResult from "./generateResult.js";
import generateWaterCalculator from "../waterForm/generateWaterCalculator.js";

export const foods = {
  water: {
    optionName: "Agua",
    unit: "mL",
    equivalent: 1,
  },
  papaya: {
    optionName: "Papaya",
    unit: "Tazas",
    equivalent: 100,
  },
  pinapple: {
    optionName: "Piña",
    unit: "Tazas",
    equivalent: 100,
  },
  lettuce: {
    optionName: "Lechuga",
    unit: "Tazas",
    equivalent: 100,
  },
  jelly: {
    optionName: "Gelatina",
    unit: "Tazas",
    equivalent: 250,
  },
  potato: {
    optionName: "Papa",
    unit: "Tazas",
    equivalent: 50,
  },
  apple: {
    optionName: "Manzana",
    unit: "Tazas",
    equivalent: 50,
  },
};

export const inputsFunctions = {
  inputQuantity: (entry) => {
    generateEntryResult("entryIngest", entry, calculateEquivalent);
  },
  selectFood: (entry) => {
    unlockQuantity(entry);
  },
  inputInfuse: (entry) => {
    calculateDialisis(entry);
  },
  inputDrain: (entry) => {
    calculateDialisis(entry);
  },
  inputsWaterCalculator: (inputs, btnCalculate) => {
    unlockCalculateWater(inputs, btnCalculate);
  },
};

export const entries = {
  ingest: {
    inputs: {
      inputQuantity: {
        className: "input-quantity",
        eventType: "input",
        functionEvent: (entry) => {
          inputsFunctions.inputQuantity(entry);
        },
      },
      selectFood: {
        className: "select-food",
        eventType: "change",
        functionEvent: (entry) => {
          inputsFunctions.selectFood(entry);
        },
      },
    },
    classDisplay: "water-quantity",
  },
  dialisis: {
    inputs: {
      inputInfuse: {
        className: "input-infuse",
        eventType: "input",
        functionEvent: (entry) => {
          inputsFunctions.inputInfuse(entry);
        },
      },
      inputDrain: {
        className: "input-drain",
        eventType: "input",
        functionEvent: (entry) => {
          inputsFunctions.inputDrain(entry);
        },
      },
    },
    classDisplay: "dialisis-equivalent",
  },
};

export const entriesResults = {
  entryIngest: {
    textLabel: "Cantidad de Agua",
    classStyle: "water-equivalent",
    classDisplay: ["equivalent-value", entries.ingest.classDisplay],
  },
  entryDialisis: {
    textLabel: "Diferencia",
    classStyle: "dialisis-delta",
    classDisplay: [entries.dialisis.classDisplay],
  },
};

export const entryDatas = {
  entryIngest: {
    extraClass: "ingest",
    html: () => {
      const html = `  
        <div class="input input-amount">
            <label>Cantidad <span class="display-units"></span></label>
            <input type="number" class="${
              entries.ingest.inputs.inputQuantity.className
            }" disabled min="0"/>
        </div>
        <div class="input select-ingest">
            <label>Alimento</label>
            <select class="${entries.ingest.inputs.selectFood.className}">
              <option selected disabled>Seleccione alimento </option>
              ${generateFoods(foods)}
            </select>
        </div>
      `;
      return html;
    },
    append: (element, container) => {
      container.appendChild(element);
    },
    data: entries.ingest,
  },
  entryDialisis: {
    extraClass: "dialisis",
    html: () => {
      const html = `  
        <div class="input">
          <label>Entra (Infunde) mL</label>
          <input type="number" class="${entries.dialisis.inputs.inputInfuse.className} min="0""/>
        </div>
        <div class="input">
          <label>Sale (Drena) mL</label>
          <input type="number" class="${entries.dialisis.inputs.inputDrain.className} min="0""/>
        </div>
        <div class="dialisis-delta entry-result">
          <p>Diferencia</p>
          <p><span class="${entries.dialisis.classDisplay}"></span> mL</p>
        </div>
      `;
      return html;
    },
    append: (element, container) => {
      container.appendChild(element);
    },
    data: entries.dialisis,
  },
};

export const appendBtns = {
  appendIngest: {
    classMain: "apend-ingest",
    addText: "Agregar Ingesta",
    classAdd: "add-ingest",
    classCalculate: "calculate-ingest",
    entryToAdd: "entryIngest",
    resultType: "ingestResult",
    calculateFunction: (resultType, container) => {
      generateResult(resultType, container);
    },
  },
  appendDialisis: {
    classMain: "apend-dialisis",
    addText: "Agregar Dialisis",
    classAdd: "add-dialisis",
    classCalculate: "calculate-dialisis",
    entryToAdd: "entryDialisis",
    resultType: "dialisisResult",
    calculateFunction: (resultType, container) => {
      const ultrafiltration = calculateUF();

      generateResult(resultType, container);
      generateWaterCalculator(container, ultrafiltration);
    },
  },
};

export const results = {
  waterResult: {
    calculator: () => {
      return calculateWater();
    },
    extraClass: "water-result",
    title: "Resultado Vía Oral",
  },
  dialisisResult: {
    calculator: () => {
      return calculateUF();
    },
    extraClass: "dialisis-result",
    title: "La Ultrafiltración 24 h es:",
  },
  ingestResult: {
    calculator: () => {
      return calculateIngest();
    },
    extraClass: "ingest-result",
    title: "El total de agua es:",
  },
};

export const forms = {
  dialisis: {
    typeAppendBtns: "appendDialisis",
  },
  ingest: {
    typeAppendBtns: "appendIngest",
  },
};
