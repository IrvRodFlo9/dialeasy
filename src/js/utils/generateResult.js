import { results } from "./data.js";

const generateResult = (type, container) => {
  const { calculator, extraClass, title } = results[type];

  container.querySelectorAll(".result").length > 0 &&
    container.querySelector(".result").remove();

  const resultML = calculator();
  const resultL = resultML / 1000;

  const resultDisplay = document.createElement("div");
  resultDisplay.classList.add("result");
  resultDisplay.classList.add(extraClass);
  resultDisplay.innerHTML = `
    <h4>${title}</h4>
    <p>${resultML} mL = ${resultL} L</p>
  `;

  container.appendChild(resultDisplay);
};

export default generateResult;
