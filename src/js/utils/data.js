import calculateIngest from "../ingestForm/calculateIngest.js";

const entries = {
  ingest: {
    classInputs: {
      inputQuantity: "input-quantity",
      selectFood: "select-food",
    },
    classDisplay: "water-equivalent",
  },
  dialisis: {
    classInputs: {
      inputInfuse: "input-infuse-",
      inputDrain: "input-drain",
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
            <input type="text" class="${entries.ingest.classInputs.inputQuantity}"/>
        </div>
        <div class="input select-ingest">
            <label>Alimento</label>
            <select class="${entries.ingest.classInputs.selectFood}">
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
        <input type="number" class="${entries.dialisis.classInputs.inputInfuse}"/>
      </div>
      <div class="input">
        <label>Sale (Drena) mL</label>
        <input type="number" class="${entries.dialisis.classInputs.inputDrain}"/>
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
