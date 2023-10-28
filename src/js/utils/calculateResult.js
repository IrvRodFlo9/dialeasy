import { results } from "./data.js";

const generateResult = (type, container, entriesContainer = null) => {
  const { calculator, extraClass, title } = results[type];

  const resultML = calculator();
  entriesContainer !== null && entriesContainer.remove();
  const resultL = resultML / 1000;
  container.innerHTML += `
    <div class="result ${extraClass}">
      <h4>${title}</h4>
      <p>${resultML} mL = ${resultL} L</p>
    </div>
  `;
};

export default generateResult;
