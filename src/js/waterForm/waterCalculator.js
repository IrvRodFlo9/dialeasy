import generateResult from "../utils/calculateResult.js";

const generateWaterCalculator = (container) => {
  const waterCalculator = document.createElement("section");
  waterCalculator.classList.add("water-calculator");
  waterCalculator.innerHTML = `
        <div class="inputs-container">
            <div class="input">
                <label>Ultrafiltración 24 h (UF 24) mL</label>
                <input type="number" />
            </div>
            <div class="input">
                <label>Orina Total (mL)</label>
                <input type="number" />
            </div>
            <button type="submit" class="btn btn-calculate calculate-water">Calcular</button>
        </div>
        <!-- inputs-container -->
    `;

  container.appendChild(waterCalculator);

  const btnCalculateWater = document.querySelector(".calculate-water");
  btnCalculateWater.addEventListener("click", (e) => {
    e.preventDefault();
    generateResult("waterResult", waterCalculator);
  });
};

export default generateWaterCalculator;
