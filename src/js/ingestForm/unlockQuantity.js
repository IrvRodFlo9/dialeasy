import { foods, entries } from "../utils/data.js";

const unlockQuantity = (entry) => {
  const { inputs } = entries.ingest;
  const { inputQuantity, selectFood } = inputs;

  const screenUnits = entry.querySelector(".display-units");
  const inputQuantityElement = entry.querySelector(
    "." + inputQuantity.className
  );
  const selectFoodElement = entry.querySelector("." + selectFood.className);

  screenUnits.textContent = `(${foods[selectFoodElement.value].unit})`;
  inputQuantityElement.disabled = false;
};

export default unlockQuantity;
