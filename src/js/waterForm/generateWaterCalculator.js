import generateResult from "../utils/generateResult.js";
import { inputsFunctions } from "../utils/data.js";

const generateWaterCalculator = (container, ultrafiltration = null) => {
  container.querySelectorAll(".water-calculator").length > 0 &&
    container.querySelector(".water-calculator").remove();

  const waterCalculator = document.createElement("section");
  waterCalculator.classList.add("water-calculator");
  waterCalculator.innerHTML = `
    <div class="inputs-container">
        <div class="input">
            <label>Ultrafiltración 24 h (UF 24) mL</label>
            <input type="number" class="input-uf24" min="1"/>
        </div>
        <div class="input">
            <label>Orina Total (mL)</label>
            <input type="number" class="input-urine" min="1"/>
        </div>
        <button class="btn btn-calculate calculate-water" disabled>Calcular</button>
    </div>
    <!-- inputs-container -->
  `;

  container.appendChild(waterCalculator);

  const btnCalculateWater = document.querySelector(".calculate-water");
  const inputUrine = document.querySelector(".input-urine");
  const inputUF24 = document.querySelector(".input-uf24");
  const { inputsWaterCalculator } = inputsFunctions;

  ultrafiltration !== null && (inputUF24.value = ultrafiltration);

  inputUrine.addEventListener("input", (e) => {
    e.preventDefault();
    inputsWaterCalculator([inputUF24, inputUrine], btnCalculateWater);
  });

  inputUF24.addEventListener("input", (e) => {
    e.preventDefault();
    inputsWaterCalculator([inputUF24, inputUrine], btnCalculateWater);
  });

  btnCalculateWater.addEventListener("click", (e) => {
    e.preventDefault();
    btnCalculateWater.disabled = true;
    generateResult("waterResult", waterCalculator);
  });
};

export default generateWaterCalculator;
