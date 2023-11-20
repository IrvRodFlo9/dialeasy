import { foods } from "../utils/data.js";

const potassiumContent = (container) => {
  container.querySelectorAll(".potassium").length > 0 &&
    container.querySelector(".potassium").remove();

  const foodsSelections = document.querySelectorAll(".select-food");
  let potassium = 0;
  let potassiumHigh = [];
  let potassiumMedium = [];

  foodsSelections.forEach((selection) => {
    const food = foods[selection.value];

    if (food.potassiumContent === "high") {
      potassium += 1;
      potassiumHigh.includes(food.optionName)
        ? null
        : potassiumHigh.push(food.optionName);
    } else if (food.potassiumContent === "medium") {
      potassium += 0.5;
      potassiumMedium.includes(food.optionName)
        ? null
        : potassiumMedium.push(food.optionName);
    }
  });

  const excessPotassium = potassium >= 3 ? true : false;

  if (excessPotassium) {
    const alert = document.createElement("section");
    alert.classList.add("potassium");
    alert.innerHTML = `
        <div class="title"> 
            <h3>¡Tenga cuidado!</h3>
            <p>Esta consumiendo varios alimentos con <span>potasio</span>  y corre el riesgo de hincharse</p>
        </div>
        <div class="list">
            <h4>Esta consumiendo los siguientes alimentos con:</h4>
            ${
              potassiumHigh.length > 0
                ? `<p>Alto contenido de potasio </p>
                <ul>
                    ${potassiumHigh.map((food) => `<li>${food}</li>`).join("")}
                </ul>
                `
                : ""
            }
            ${
              potassiumMedium.length > 0
                ? `<p>Medio contenido de potasio </p>
                <ul>
                    ${potassiumMedium
                      .map((food) => `<li>${food}</li>`)
                      .join("")}
                </ul>
                `
                : ""
            } 
        </div>
    `;
    container.appendChild(alert);
  }
};

export default potassiumContent;
