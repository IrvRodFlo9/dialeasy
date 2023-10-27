import { appendBtns } from "./data.js";

const generateAppendBtns = (type, container) => {
  const { classMain, addText, classAdd, classCalculate } = appendBtns[type];

  const appendContainer = document.createElement("div");
  appendContainer.classList.add("apend-container");
  appendContainer.classList.add(classMain);
  appendContainer.innerHTML = `    
    <button class="btn ${classAdd}">${addText}</button>
    <button type="submit" class="btn btn-calculate ${classCalculate}">Calcular Total</button>
  `;

  container.appendChild(appendContainer);
};

export default generateAppendBtns;