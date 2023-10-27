import calculateIngest from "../ingestForm/calculateIngest.js";

const inputsFunctions = {
  inputQuantity: () => {
    console.log("quantity");
  },
  selectFood: () => {
    console.log("food");
  },
  inputInfuse: () => {
    console.log("infuse");
  },
  inputDrain: () => {
    console.log("drain");
  },
};

const entries = {
  ingest: {
    inputs: {
      inputQuantity: {
        className: "input-quantity",
        eventType: "click",
        functionEvent: () => {
          inputsFunctions.inputQuantity();
        },
      },
      selectFood: {
        className: "select-food",
        eventType: "change",
        functionEvent: () => {
          inputsFunctions.selectFood();
        },
      },
    },
    classDisplay: "water-equivalent",
  },
  dialisis: {
    inputs: {
      inputInfuse: {
        className: "input-infuse",
        eventType: "click",
        functionEvent: () => {
          inputsFunctions.inputInfuse();
        },
      },
      inputDrain: {
        className: "input-drain",
        eventType: "click",
        functionEvent: () => {
          inputsFunctions.inputDrain();
        },
      },
    },
    classDisplay: "dialisis-equivalent",
  },
};

export const entryDatas = {
  entryIngest: {
    extraClass: "ingest",
    html: `  
        <div class="input input-amount">
            <label>Cantidad <span>(Tazas)</span></label>
            <input type="text" class="${entries.ingest.inputs.inputQuantity.className}"/>
        </div>
        <div class="input select-ingest">
            <label>Alimento</label>
            <select class="${entries.ingest.inputs.selectFood.className}">
              <option>Agua</option>    
              <option>Papaya</option>
            </select>
        </div>
        <div class="water-equivalent entry-result">
            <p>Cantidad de Agua</p>
            <p><span class="equivalent-value ${entries.ingest.classDisplay}" > 200 </span> mL</p>
        </div>
        `,
    append: (element, container) => {
      container.appendChild(element);
    },
    data: entries.ingest,
  },
  entryDialisis: {
    extraClass: "dialisis",
    html: `  
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
    `,
    append: (element, container, elementBefore = null) => {
      elementBefore === null
        ? container.appendChild(element)
        : container.insertBefore(element, elementBefore);
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
  },
  appendDialisis: {
    classMain: "apend-dialisis",
    addText: "Agregar Dialisis",
    classAdd: "add-dialisis",
    classCalculate: "calculate-dialisis",
  },
};

export const results = {
  waterResult: {
    calculator: () => {
      console.log("calculando agua");
      return 1000;
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
