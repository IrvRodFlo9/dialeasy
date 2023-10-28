import calculateIngest from "../ingestForm/calculateIngest.js";
import calculateEquivalent from "../ingestForm/calculateEquivalent.js";
import unlockQuantity from "../ingestForm/unlockQuantity.js";
import generateFoods from "../ingestForm/generateFoods.js";
import generateResult from "./calculateResult.js";
import generateWaterCalculator from "../waterForm/generateWaterCalculator.js";
import waterCalculator from "../waterForm/waterCalculator.js";

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

const inputsFunctions = {
  inputQuantity: (entry) => {
    calculateEquivalent(entry);
  },
  selectFood: (entry) => {
    unlockQuantity(entry);
  },
  inputInfuse: (entry) => {
    console.log("infuse");
    console.log(entry);
  },
  inputDrain: (entry) => {
    console.log("drain");
    console.log(entry);
  },
  inputUF24: () => {
    console.log("uf24");
  },
  inputUrine: () => {
    console.log("urine");
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
        eventType: "click",
        functionEvent: (entry) => {
          inputsFunctions.inputInfuse(entry);
        },
      },
      inputDrain: {
        className: "input-drain",
        eventType: "click",
        functionEvent: (entry) => {
          inputsFunctions.inputDrain(entry);
        },
      },
    },
    classDisplay: "dialisis-equivalent",
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
            }" disabled/>
        </div>
        <div class="input select-ingest">
            <label>Alimento</label>
            <select class="${entries.ingest.inputs.selectFood.className}">
              <option selected disabled>Seleccione alimento </option>
              ${generateFoods(foods)}
            </select>
        </div>
        <div class="water-equivalent entry-result">
            <p>Cantidad de Agua</p>
            <p><span class="equivalent-value ${
              entries.ingest.classDisplay
            }" ></span> mL</p>
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
          <input type="number" class="${entries.dialisis.inputs.inputInfuse.className}"/>
        </div>
        <div class="input">
          <label>Sale (Drena) mL</label>
          <input type="number" class="${entries.dialisis.inputs.inputDrain.className}"/>
        </div>
        <div class="dialisis-delta entry-result">
          <p>Diferencia</p>
          <p><span class="${entries.dialisis.classDisplay}"> 200 </span> mL</p>
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
    calculateFunction: (resultType, container, entriesContainer) => {
      generateResult(resultType, container, entriesContainer);
    },
  },
  appendDialisis: {
    classMain: "apend-dialisis",
    addText: "Agregar Dialisis",
    classAdd: "add-dialisis",
    classCalculate: "calculate-dialisis",
    entryToAdd: "entryDialisis",
    resultType: "dialisisResult",
    calculateFunction: (resultType, container, entriesContainer) => {
      generateResult(resultType, container, entriesContainer);
      generateWaterCalculator(container);
    },
  },
};

export const results = {
  waterResult: {
    calculator: () => {
      return waterCalculator();
    },
    extraClass: "water-result",
    title: "Resultado Vía Oral",
  },
  dialisisResult: {
    calculator: () => {
      console.log("calculando dialisis");
      return 1000;
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
