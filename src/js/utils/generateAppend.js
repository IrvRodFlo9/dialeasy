import { appendBtns } from "./data.js";

const generateAppendBtns = (typeData, container) => {
  const { classMain, addText, classAdd, classCalculate } = typeData;

  const appendContainer = document.createElement("div");
  appendContainer.classList.add("apend-container");
  appendContainer.classList.add(classMain);
  appendContainer.innerHTML = `    
    <button class="btn ${classAdd}">${addText}</button>
    <button class="btn btn-calculate ${classCalculate}" disabled>Calcular Total</button>
  `;

  container.appendChild(appendContainer);
};

export default generateAppendBtns;
