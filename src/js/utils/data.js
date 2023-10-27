import calculateIngest from "../ingestForm/calculateIngest.js";

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

export const entryDatas = {
  entryIngest: {
    extraClass: "ingest",
    html: `  
        <div class="input input-amount">
            <label>Cantidad<span>(Tazas)</span></label>
            <input type="text" />
        </div>
        <div class="input select-ingest">
            <label>Ingesta</label>
            <select>
                <option>Papaya</option>
            </select>
        </div>
        <div class="water-equivalent entry-result">
            <p>Cantidad de Agua</p>
            <p><span class="equivalent-value"> 200 </span> mL</p>
        </div>
        `,
    append: (element, container) => {
      container.appendChild(element);
    },
  },
  entryDialisis: {
    extraClass: "dialisis",
    html: `  
      <div class="input">
        <label>Entra (Infunde) mL</label>
        <input type="number" />
      </div>
      <div class="input">
        <label>Sale (Drena) mL</label>
        <input type="number" />
      </div>
      <div class="dialisis-delta entry-result">
        <p>Diferencia</p>
        <p>-150 mL</p>
      </div>
    `,
    append: (element, container, elementBefore = null) => {
      elementBefore === null
        ? container.appendChild(element)
        : container.insertBefore(element, elementBefore);
    },
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
