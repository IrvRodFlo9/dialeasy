import calculateIngest from "../ingestForm/calculateIngest.js";
import calculateEquivalent from "../ingestForm/calculateEquivalent.js";
import calculateDialisis from "../waterForm/calculateDialisis.js";
import calculateUF from "../waterForm/calculateUF.js";
import calculateWater from "../waterForm/calculateWater.js";
import unlockQuantity from "../ingestForm/unlockQuantity.js";
import unlockDialisisEntries from "../waterForm/unlockDialisisEntries.js";
import unlockCalculateWater from "../waterForm/unlockCalculateWater.js";
import unlockCalculateBtn from "./unlockCalculateBtn.js";
import generateFoods from "../ingestForm/generateFoods.js";
import generateEntryResult from "./generateEntryResult.js";
import generateResult from "./generateResult.js";
import generateWaterCalculator from "../waterForm/generateWaterCalculator.js";
import potassiumContent from "../ingestForm/potassiumIngest.js";
import runIngestForm from "../ingestForm/main.js";
import runWaterForm from "../waterForm/main.js";

export const foods = {
  /*  Water  */
  water: {
    optionName: "Agua",
    unit: "mL",
    equivalent: 1,
    type: "other",
    potassiumContent: null,
  },
  jelly: {
    optionName: "Gelatina",
    unit: "Taza",
    equivalent: 250,
    type: "other",
    potassiumContent: null,
  },
  /*  Fruits  */
  apple: {
    optionName: "Manzana",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "low",
  },
  orange: {
    optionName: "Naranja",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "high",
  },
  mango: {
    optionName: "Mango Manila",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "high",
  },
  watermelon: {
    optionName: "Sandía",
    unit: "Taza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "medium",
  },
  papaya: {
    optionName: "Papaya",
    unit: "Taza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "high",
  },
  pineapple: {
    optionName: "Piña",
    unit: "Taza",
    equivalent: 200,
    type: "fruit",
    potassiumContent: "low",
  },
  melon: {
    optionName: "Melón",
    unit: "Taza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "high",
  },
  pear: {
    optionName: "Pera",
    unit: "Pieza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "low",
  },
  tangerine: {
    optionName: "Mandarina",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "high",
  },
  tuna: {
    optionName: "Tuna",
    unit: "Pieza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "high",
  },
  grape: {
    optionName: "Uva",
    unit: "Pieza",
    equivalent: 2.77,
    type: "fruit",
    potassiumContent: "medium",
  },
  banana: {
    optionName: "Plátano",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "medium",
  },
  higo: {
    optionName: "Higo",
    unit: "Pieza",
    equivalent: 25,
    type: "fruit",
    potassiumContent: "medium",
  },
  toronja: {
    optionName: "Toronja",
    unit: "Taza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "medium",
  },
  mangoA: {
    optionName: "Mango Ataulfo",
    unit: "Pieza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "medium",
  },
  grenade: {
    optionName: "Granda Roja",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "medium",
  },
  raspberry: {
    optionName: "Frambuesa",
    unit: "Taza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "medium",
  },
  cherry: {
    optionName: "Cereza",
    unit: "Pieza",
    equivalent: 2.5,
    type: "fruit",
    potassiumContent: "medium",
  },
  cranberry: {
    optionName: "Arándano",
    unit: "g",
    equivalent: 0.4,
    type: "fruit",
    potassiumContent: "low",
  },
  lichis: {
    optionName: "Lichis",
    unit: "Pieza",
    equivalent: 4.2,
    type: "fruit",
    potassiumContent: "medium",
  },
  mamey: {
    optionName: "Mamey",
    unit: "Pieza",
    equivalent: 150,
    type: "fruit",
    potassiumContent: "medium",
  },
  dominicBanana: {
    optionName: "Plátano Dominico",
    unit: "Pieza",
    equivalent: 16.66,
    type: "fruit",
    potassiumContent: "medium",
  },
  blackberry: {
    optionName: "Zarzamora",
    unit: "Taza",
    equivalent: 66.66,
    type: "fruit",
    potassiumContent: "medium",
  },
  zapote: {
    optionName: "Zapote",
    unit: "Pieza",
    equivalent: 100,
    type: "fruit",
    potassiumContent: "low",
  },
  blueberry: {
    optionName: "Mora Azul",
    unit: "Taza",
    equivalent: 62.5,
    type: "fruit",
    potassiumContent: "low",
  },
  guanabana: {
    optionName: "Guanábana",
    unit: "Pieza",
    equivalent: 50,
    type: "fruit",
    potassiumContent: "low",
  },
  nispero: {
    optionName: "Níspero",
    unit: "Pieza",
    equivalent: 2,
    type: "fruit",
    potassiumContent: "high",
  },
  /*  Vegetables  */
  nopal: {
    optionName: "Nopal",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "high",
  },
  carrot: {
    optionName: "Zanahoria",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "low",
  },
  carrotMini: {
    optionName: "Zanahoria Mini",
    unit: "Pieza",
    equivalent: 16.66,
    type: "vegetable",
    potassiumContent: "low",
  },
  tomato: {
    optionName: "Jítomate",
    unit: "g",
    equivalent: 0.833,
    type: "vegetable",
    potassiumContent: "high",
  },
  brocoli: {
    optionName: "Brocoli",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "high",
  },
  pumpkin: {
    optionName: "Calabaza",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "high",
  },
  potato: {
    optionName: "Papa",
    unit: "Tazas",
    equivalent: 50,
    type: "vegetable",
    potassiumContent: "low",
  },
  jicama: {
    optionName: "Jícama",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "low",
  },
  lettuce: {
    optionName: "Lechuga",
    unit: "Tazas",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "low",
  },
  onion: {
    optionName: "Cebolla",
    unit: "Taza",
    equivalent: 200,
    type: "vegetable",
    potassiumContent: "low",
  },
  chilePoblano: {
    optionName: "Chile Poblano",
    unit: "Pieza",
    equivalent: 66.66,
    type: "vegetable",
    potassiumContent: "low",
  },
  verdolaga: {
    optionName: "Verdolaga",
    unit: "Taza",
    equivalent: 50,
    type: "vegetable",
    potassiumContent: "high",
  },
  coliflor: {
    optionName: "Coliflor",
    unit: "Taza",
    equivalent: 62.5,
    type: "vegetable",
    potassiumContent: "low",
  },
  ejote: {
    optionName: "Ejote",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "low",
  },
  pumpkinFlower: {
    optionName: "Flor de Calabaza",
    unit: "Taza",
    equivalent: 50,
    type: "vegetable",
    potassiumContent: "low",
  },
  pepper: {
    optionName: "Pimiento",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "low",
  },
  betabel: {
    optionName: "Betabel",
    unit: "Taza",
    equivalent: 200,
    type: "vegetable",
    potassiumContent: "low",
  },
  huitlacoche: {
    optionName: "Huitlacoche",
    unit: "Taza",
    equivalent: 150,
    type: "vegetable",
    potassiumContent: "low",
  },
  setas: {
    optionName: "Setas",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "medium",
  },
  chard: {
    optionName: "Acelga",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "high",
  },
  spinachCooked: {
    optionName: "Espinaca Cocida",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "high",
  },
  spinach: {
    optionName: "Espinaca Cruda",
    unit: "Taza",
    equivalent: 25,
    type: "vegetable",
    potassiumContent: "high",
  },
  chileC: {
    optionName: "Chile Cuaresmeño",
    unit: "Pieza",
    equivalent: 25,
    type: "vegetable",
    potassiumContent: "medium",
  },
  huazontle: {
    optionName: "Huazontle",
    unit: "Taza",
    equivalent: 100,
    type: "vegetable",
    potassiumContent: "medium",
  },
  berro: {
    optionName: "Berro",
    unit: "Taza",
    equivalent: 50,
    type: "vegetable",
    potassiumContent: "low",
  },
  quelite: {
    optionName: "Quelite",
    unit: "g",
    equivalent: 0.625,
    type: "vegetable",
    potassiumContent: "high",
  },
  greenTomato: {
    optionName: "Tomate verde",
    unit: "Pieza",
    equivalent: 10,
    type: "vegetable",
    potassiumContent: "medium",
  },
  xoconostle: {
    optionName: "Xoconostle",
    unit: "Pieza",
    equivalent: 16.66,
    type: "vegetable",
    potassiumContent: "medium",
  },
  cilantro: {
    optionName: "Cilantro",
    unit: "Taza",
    equivalent: 28.7,
    type: "vegetable",
    potassiumContent: "high",
  },
};

export const inputsFunctions = {
  inputQuantity: (entry) => {
    generateEntryResult("entryIngest", entry, calculateEquivalent);
    unlockCalculateBtn(entry);
  },
  selectFood: (entry) => {
    unlockQuantity(entry);
    generateEntryResult("entryIngest", entry, calculateEquivalent);
  },
  inputInfuse: (entry) => {
    generateEntryResult("entryDialisis", entry, calculateDialisis);
    unlockCalculateBtn(entry);
  },
  inputDrain: (entry) => {
    generateEntryResult("entryDialisis", entry, calculateDialisis);
    unlockCalculateBtn(entry);
  },
  inputsWaterCalculator: (inputs, btnCalculate) => {
    unlockCalculateWater(inputs, btnCalculate);
  },
  inpuInfuseYesterday: (entry) => {
    unlockDialisisEntries(entry);
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
  yesterday: {
    inputs: {
      inputInfuseYesterday: {
        className: "input-infuse",
        eventType: "input",
        functionEvent: (entry) => {
          inputsFunctions.inpuInfuseYesterday(entry);
        },
      },
    },
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
    extraClasses: ["ingest"],
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
              <optgroup label="Frutas">
                ${generateFoods(foods, "fruit")}
              </optgroup>
              <optgroup label="Verduras">
                ${generateFoods(foods, "vegetable")}
              </optgroup>
            </select>
        </div>
      `;
      return html;
    },
    data: entries.ingest,
  },
  entryInfuseYesterday: {
    extraClasses: ["dialisis", "yesterday-dialisis"],
    html: () => {
      const html = `  
        <div class="input last-day">
          <label>Entra (Infunde) último día anterior (mL)</label>
          <input type="number" class="${entries.yesterday.inputs.inputInfuseYesterday.className}" />
        </div>
      `;
      return html;
    },
    data: entries.yesterday,
  },
  entryDialisis: {
    extraClasses: ["dialisis"],
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
      `;
      return html;
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
      potassiumContent(container);
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
  waterManual: {
    title: "Agua por Ingerir",
    subtitle: "Manual",
    styleClass: "form-water",
    initContent:
      "<section class='initial-ask'><p>¿Ya calculó la ultrafiltración (UF) de 24 h?</p><div class='btns-yes-no'><button class='btn bg-green'>SI</button><button class='btn bg-red'>NO</button></div></section>",
    typeAppendBtns: "appendDialisis",
    run: () => runWaterForm(),
  },
  ingest: {
    title: "Ingesta de Agua",
    subtitle: "Vía Oral",
    styleClass: "form-ingest",
    initContent: "<section class='ingest-container'></section>",
    typeAppendBtns: "appendIngest",
    run: () => runIngestForm,
  },
};
