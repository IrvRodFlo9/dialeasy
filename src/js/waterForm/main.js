import generateWaterCalculator from "./generateWaterCalculator.js";
import startDialisis from "./startDialisis.js";

const waterForm = document.querySelector(".form-water");
const initialAsk = document.querySelector(".initial-ask");
const initialBtns = document.querySelector(".btns-yes-no");

const answer = (e) => {
  e.preventDefault();
  const answer = e.target.textContent.toLowerCase();
  if (["si", "no"].includes(answer)) {
    initialAsk.remove();
    answer === "si"
      ? generateWaterCalculator(waterForm)
      : startDialisis(waterForm);
  }
};

const runWaterForm = () => {
  initialBtns.addEventListener("click", (e) => {
    e.preventDefault();
    answer(e);
  });
};

export default runWaterForm;
