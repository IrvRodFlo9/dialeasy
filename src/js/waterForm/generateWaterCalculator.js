import generateResult from "../utils/calculateResult.js";

const generateWaterCalculator = (container, ultrafiltration = null) => {
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
        <button class="btn btn-calculate calculate-water">Calcular</button>
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
